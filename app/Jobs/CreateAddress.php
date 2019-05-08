<?php

namespace App\Jobs;

use App\Http\Requests\AddressRequest;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Foundation\Bus\DispatchesJobs;

class CreateAddress {

    use DispatchesJobs;

    protected $pinCode;

    protected $locality;

    protected $name;

    protected $textAddress;

    protected $mobile;

    protected $isDefault;

    protected $state;

    protected $city;

    /**
     * Create a new job instance.
     *
     * @param $pinCode
     * @param $locality
     * @param $name
     * @param $textAddress
     * @param $mobile
     * @param $isDefault
     * @param null $state
     * @param null $city
     */
    public function __construct(
        $pinCode,
        $locality,
        $name,
        $textAddress,
        $mobile,
        $isDefault,
        $state = null,
        $city = null
    )
    {
        $this->pinCode = $pinCode;
        $this->locality = $locality;
        $this->name = $name;
        $this->textAddress = $textAddress;
        $this->mobile = $mobile;
        $this->isDefault = $isDefault;
        $this->state = $state;
        $this->city = $city;
    }

    public static function fromRequest(AddressRequest $request)
    {
        return new static(
            $request->pinCode(),
            $request->locality(),
            $request->name(),
            $request->textAddress(),
            $request->mobile(),
            $request->isDefault(),
            $request->state(),
            $request->city()
        );
    }

    /**
     * Execute the job.
     *
     * @return array
     */
    public function handle()
    {
        $responseJson = $this->getStateCity();

        $this->markAsDefaultIfNeeded();

        return auth()->user()->addresses()->create([
            'pin_code'   => $this->pinCode,
            'town'       => $this->locality,
            'distinct'   => $responseJson['city'] ?? $this->city,
            'state'      => $responseJson['stateName'] ?? $this->state,
            'state_code' => $responseJson['state'] ?? '',
            'name'       => $this->name,
            'address'    => $this->textAddress,
            'mobile'     => $this->mobile,
            'is_default' => $this->isDefault,
        ]);
    }

    protected function getStateCity()
    {
        try {
            $responseJson = $this->dispatchNow(
                new FetchStateCityByPin($this->pinCode)
            );

            return $responseJson;
        } catch (RequestException $e) {
            return [];
        }
    }

    protected function markAsDefaultIfNeeded(): void
    {
        if ($this->isDefault) {
            auth()->user()->addresses()->update([
                'is_default' => false,
            ]);
        }
    }
}
