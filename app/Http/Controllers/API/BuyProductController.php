<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\ProductCollection;
use App\Http\Resources\ProductResource;
use App\Product;
use App\Http\Controllers\Controller;
use Illuminate\Support\Collection;

class BuyProductController extends Controller
{
    public function index(string $category, Product $product)
    {
        return response()->json([
            'product' => new ProductResource($product->load(['statistics', 'variants', 'tax'])),
            'topProducts' => new ProductCollection($this->getMostOrderedProducts($category))
        ]);
    }

    private function getMostOrderedProducts($category): Collection
    {
        return Product::with('tax', 'variants', 'category')->whereHas('category', function ($query) use ($category) {
            $query->where('slug', $category);
        })->select('products.*')->join('product_statistics', 'products.id', '=', 'product_statistics.product_id')
            ->latest('order_count')->take(10)->get();
    }
}
