<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Resources\ProductCollection;
use App\Product;

class ProductsController extends Controller
{

    public function index($categorySlug = null)
    {
        $productQuery = Product::query();

        if ($categorySlug) {
            $productQuery->whereHas('category', function ($query) use ($categorySlug) {
                $query->filterByParentCategory($categorySlug);
            });
        }

        return new ProductCollection($productQuery->with('variants', 'category')->get());
    }
}
