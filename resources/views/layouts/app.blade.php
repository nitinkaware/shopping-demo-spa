<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible"
          content="IE=edge">
    <meta name="viewport"
          content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token"
          content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    @routes
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"
            defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}"
          rel="stylesheet">
    <link rel="shortcut icon"
          href="https://cdn.myntassets.com/skin1/icons/favicon.ico">
</head>
<body>
<div id="app"
     class="page">
    <div class="page-main">
        <div class="header py-4">
            <div class="container">
                <div class="d-flex">
                    <router-link to="/"
                                 class="header-brand">
                        <img src="https://tabler.github.io/tabler/demo/brand/tabler.svg"
                             class="header-brand-img"
                             alt="tabler logo">
                    </router-link>


                    <div class="d-flex order-lg-2 ml-auto">

                        @auth
                            <cart-menu :prop-count="{{ auth()->user()->carts()->count() }}"></cart-menu>
                        @endauth

                        @guest

                            <div class="nav-item d-none d-md-flex">
                                <router-link to="/login"
                                             class="btn btn-link">
                                    Login
                                </router-link>
                            </div>

                            <div class="nav-item d-none d-md-flex">
                                <router-link to="/register"
                                             class="btn btn-link">
                                    Register
                                </router-link>
                            </div>
                        @else
                            <div class="dropdown">
                                <a href="#"
                                   class="nav-link pr-0 leading-none"
                                   data-toggle="dropdown">
                                <span class="avatar"
                                      style="background-image: url()"></span>
                                    <span class="ml-2 d-none d-lg-block">
                                    <span class="text-default">{{ auth()->user()->name }}</span>
                                        <small class="text-muted d-block mt-1">Administrator</small>
                                    </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
                                    <a class="dropdown-item"
                                       href="#">
                                        <i class="dropdown-icon fe fe-user"></i> Profile
                                    </a>

                                    <router-link to="/my/wishlist"
                                                 class="dropdown-item">
                                        <i class="dropdown-icon fe fe-user"></i>
                                        My Wishlist
                                    </router-link>

                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item"
                                       href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                        <i class="dropdown-icon fe fe-log-out"></i> @lang('Sign out')
                                    </a>
                                    <form id="logout-form"
                                          action="{{ route('logout') }}"
                                          method="POST"
                                          style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </div>
                        @endguest
                    </div>

                    <a href="#"
                       class="header-toggler d-lg-none ml-3 ml-lg-0"
                       data-toggle="collapse"
                       data-target="#headerMenuCollapse">
                        <span class="header-toggler-icon"></span>
                    </a>
                </div>
            </div>
        </div>

        <div class="header collapse d-lg-flex p-0"
             id="headerMenuCollapse">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-3 ml-auto">
                        <form class="input-icon my-3 my-lg-0">
                            <input type="search"
                                   class="form-control header-search"
                                   placeholder="Search&hellip;"
                                   tabindex="1">
                            <div class="input-icon-addon">
                                <i class="fe fe-search"></i>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg order-lg-first">
                        <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
                            @foreach($menus as $menu)
                                <li class="nav-item">
                                    <a class="nav-link"
                                       @if($menu->subCategories->isNotEmpty())
                                       href="javascript:void(0)"
                                       data-toggle="dropdown"
                                       @else
                                       href="{!! $menu->slug !!}" @endif>
                                        {!! $menu->name !!}
                                    </a>

                                    @if($menu->subCategories->isNotEmpty())
                                        <div class="dropdown-menu dropdown-menu-arrow">
                                            @foreach($menu->subCategories as $menuChild)
                                                <router-link to="/products/{{ $menuChild->slug }}"
                                                             class="dropdown-item">
                                                    {{ $menuChild->name }}
                                                </router-link>
                                            @endforeach
                                        </div>
                                    @endif
                                </li>
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</div>
</body>
</html>
