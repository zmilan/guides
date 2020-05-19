@extends('_layouts.master')

@section('nav-toggle')
    @include('_nav.menu-toggle')
@endsection

@section('body')
<section class="container max-w-8xl mx-auto px-6 md:px-8 py-4">
    <div class="flex flex-col lg:flex-row">
        <nav id="js-nav-menu" class="nav-menu hidden lg:block">
            <div class="text-sm px-4 mb-4 leading-loose">
                <a href="https://getcandy.io" class="text-gray-600 block font-regular mb-1" title="Go to main GetCandy website">GetCandy Website</a>
                <a href="https://community.getcandy.io/" class="text-gray-600 font-regular block mb-1" title="View the GetCandy forum">Community</a>
                <a href="https://api-docs.getcandy.io/" class="text-gray-600 font-regular block mb-1" title="View the GetCandy forum">API Reference</a>
            </div>
            @include('_nav.menu', ['items' => $page->navigation])
        </nav>

        <div class="DocSearch-content w-full lg:w-3/5 break-words pb-16 lg:pl-4" v-pre>
            @yield('content')
        </div>
    </div>
</section>
@endsection
