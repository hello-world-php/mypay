@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
					<form action="" method="GET">
						<div class="input-group mb-3">
							<input 
								@if (request()->get('payment_desc'))
									value="{{ request()->get('payment_desc') }}"
								@endif
								type="text" 
								class="form-control" 
								name="payment_desc" 
								placeholder="Описание платежа" 
								aria-label="Описание платежа" 
								aria-describedby="button-addon2"
							/>
							<button class="btn btn-outline-secondary" type="submit" id="button-addon2">Найти</button>
						</div>
					</form>
					<h2>Пополнения:</h2>
					@if (count($incomes))
						<table class="table">
						  <thead>
							<tr>
							  <th scope="col">От</th>
							  <th scope="col">Кому</th>
							  <th scope="col">Сумма</th>
							  <th scope="col">Описание</th>
							  <th scope="col">
								@if (request()->get('sort_by') == 'date' AND request()->get('order') == 'ASC')
									<a href="{{ route('history') }}">Дата платежа <i class="bi bi-sort-up"></i>
								@else
									<a href="?sort_by=date&order=ASC">Дата платежа <i class="bi bi-sort-down"></i>
								@endif
							  </th>
							</tr>
						  </thead>
						  <tbody>
						  @foreach ($incomes as $t)
							<tr>
							  <td>{{ $t->sender->name }}</td>
							  <td>{{ $t->receiver->name }} (Это вы)</td>
							  <td>{{ $t->amount }}</td>
							  <td>{{ $t->description }}</td>
							  <td>{{ $t->created_at }}</td>
							</tr>
						  @endforeach
						  </tbody>
						</table>
					@else
						<p>Нет пополнений</p>
					@endif
				
					<h2>Списания:</h2>
					@if (count($expenditures))
						<table class="table">
						  <thead>
							<tr>
							  <th scope="col">От</th>
							  <th scope="col">Кому</th>
							  <th scope="col">Сумма</th>
							  <th scope="col">Описание</th>
							  <th scope="col">
								@if (request()->get('sort_by') == 'date' AND request()->get('order') == 'ASC')
									<a href="{{ route('history') }}">Дата платежа <i class="bi bi-sort-up"></i>
								@else
									<a href="?sort_by=date&order=ASC">Дата платежа <i class="bi bi-sort-down"></i>
								@endif
							  </th>
							</tr>
						  </thead>
						  <tbody>
						  @foreach ($expenditures as $t)
							<tr>
							  <td>{{ $t->sender->name }} (Это вы)</td>
							  <td>{{ $t->receiver->name }}</td>
							  <td>{{ $t->amount }}</td>
							  <td>{{ $t->description }}</td>
							  <td>{{ $t->created_at }}</td>
							</tr>
						  @endforeach
						  </tbody>
						</table>
					@else
						<p>Нет списаний</p>
					@endif
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
