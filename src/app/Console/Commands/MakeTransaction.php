<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use App\Models\Transaction;

class MakeTransaction extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make_transaction {from} {to} {amount} {desc=""}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Transacts money from user to user';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
		$from = User::where('name', $this->argument('from'))->first();
		$to = User::where('name', $this->argument('to'))->first();
		$amount = (float) $this->argument('amount');
		$description = $this->argument('desc');
		try {
			if($from->balance->amount < $amount) {
				throw new \Exception("Not enough money");
			}
			
			DB::transaction(function () use ($from, $to, $amount, $description){
				$from->balance->amount -= $amount;
				$to->balance->amount += $amount;
				$from->balance->save();
				$to->balance->save();
				
				Transaction::create([
					'from' => $from->id,
					'to' => $to->id,
					'amount' => $amount,
					'description' => $description,
				]);
			});
			
		} catch(Throwable $e) {
			echo $e->getMessage();
		}
		
		printf(
			"%.2f has been transacted from '%s' to '%s'\n", 
			$amount, 
			$this->argument('from'),
			$this->argument('to')
		);
		
        return 0;
    }
}
