@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

					<h2>Ваш баланс: <span class="balance-amount">{{ $amount }}</span></h2>
					
					<h2>Пополнения:</h2>
					<div class="incomes-list">
					@forelse ($incomes as $t)
						<p>{{ $t->sender->name }}, {{ $t->receiver->name }}, {{ $t->amount }}, {{ $t->description }}, {{ $t->created_at }}</p>
					@empty
						<p>Нет пополнений</p>
					@endforelse
					</div>
				
					<h2>Списания:</h2>
					<div class="expenditures-list">
					@forelse ($expenditures as $t)
						<p>{{ $t->sender->name }}, {{ $t->receiver->name }}, {{ $t->amount }}, {{ $t->description }}, {{ $t->created_at }}</p>
					@empty
						<p>Нет списаний</p>
					@endforelse
					</div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="{{ mix('/js/home.js') }}"></script>
@endsection
