<?php

namespace App\Http\Middleware;

use App\Category;
use Closure;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Str;
use Lavary\Menu\Facade as Menu;

class DefineMenus {

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        \View::share('menus', $this->getTopLevelCategories());

        return $next($request);
    }

    /**
     * @return Collection|static[]
     */
    private function getTopLevelCategories()
    {
        return cache()->rememberForever('menus:topLevelCategories', function () {
            return Category::with('subCategories')->whereHas('subCategories', function ($query) {
                $query->whereNotIn('category_id', function ($innerQuery) {
                    $innerQuery->select('sub_category_id')->from('sub_categories');
                });
            })->get();
        });
    }
}
