<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HistoryController extends Controller
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
     * Show transactions
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request)
    {
		if(
			$request->get('sort_by', '') == 'date' &&
			$request->get('order', '') == 'ASC'
		) {
			$order = 'ASC';
		} else {
			$order = 'DESC';
		}
		
		$filter_by_desc = false;
		if(!empty($request->get('payment_desc', false))) {
			$filter_by_desc = true;
		}
		
		$user = Auth::user();
		
		if($filter_by_desc) {
			$incomes = $user->incomes()
						->where('description', 
								'like', 
								'%' . strip_tags($request->get('payment_desc')) . '%')
						->orderBy('created_at', $order)
						->get();
						
			$expenditures = $user->expenditures()
							->where('description', 
								'like', 
								'%' . strip_tags($request->get('payment_desc')) . '%')
							->orderBy('created_at', $order)
							->get();
		} else {
			$incomes = $user->incomes()
						->orderBy('created_at', $order)
						->get();
						
			$expenditures = $user->expenditures()
							->orderBy('created_at', $order)
							->get();
		}
		
		
        return view('history', [
			'incomes' => $incomes,
			'expenditures' => $expenditures,
		]);
    }
}
