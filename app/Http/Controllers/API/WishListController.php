<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\WishListRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProductResource;
use App\Jobs\CreateWishList;
use App\Product;

class WishListController extends Controller
{

    function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $products = Product::with('variants', 'category', 'statistics', 'tax')->whereHas('wishListedUsers', function ($query) {
            $query->where('user_id', auth()->id());
        })->get();

        return ProductResource::collection($products);
    }

    public function store(WishListRequest $request)
    {
        $this->dispatchNow(CreateWishList::fromRequest($request));

        return response([], 202);
    }
}
