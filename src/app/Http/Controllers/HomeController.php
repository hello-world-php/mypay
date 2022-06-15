<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
		$user = Auth::user();
		
		$amount = $user->balance->amount;
		$incomes = $user->incomes()
					->orderBy('created_at', 'desc')
					->limit(5)
					->get();
					
		$expenditures = $user->expenditures()
						->orderBy('created_at', 'desc')
						->limit(5)
						->get();
		
        return view('home', [
			'amount' => $amount,
			'incomes' => $incomes,
			'expenditures' => $expenditures,
		]);
    }
	
	public function getLastTransactions()
	{
		$user = Auth::user();
		$amount = $user->balance->amount;
		
		$incomes = $user->incomes()
					->orderBy('created_at', 'desc')
					->limit(5)
					->get();
		
		$incomes_arr = [];
		foreach($incomes as $t) {
			$incomes_arr[] = [
				'from' => $t->sender->name,
				'to' => $t->receiver->name,
				'amount' => $t->amount,
				'description' => $t->description ?? "",
				'created_at' => $t->created_at,
			];
		}
		
		$expenditures = $user->expenditures()
						->orderBy('created_at', 'desc')
						->limit(5)
						->get();
						
		$expenditures_arr = [];
		foreach($expenditures as $t) {
			$expenditures_arr[] = [
				'from' => $t->sender->name,
				'to' => $t->receiver->name,
				'amount' => $t->amount,
				'description' => $t->description ?? "",
				'created_at' => $t->created_at,
			];
		}
		
		return response()->json([
			'amount' => $amount,
			'incomes' => $incomes_arr,
			'expenditures' => $expenditures_arr,
		]);
	}
}
