@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
					<h1 class="text-center">Добро пожаловать в MY PAY</h1>
					<div class="text-center">
					@guest
						<a href="{{ route('login') }}" class="btn btn-primary btn-lg" tabindex="-1" role="button">Вход в личный кабинет</a>
					@else
						<a href="{{ route('history') }}" class="btn btn-primary btn-lg" tabindex="-1" role="button">История платежей</a>
					@endif
					</div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
