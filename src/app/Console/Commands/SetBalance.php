<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class SetBalance extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'balance {user_name} {amount}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Setting balance amount to the specified user';

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
		$balance = User::where('name', $this->argument('user_name'))->first()->balance;
		
		$balance->amount = (float) $this->argument('amount');
		
		$balance->save();
		
		echo 'Balance has been setted to ' . 
			$this->argument('amount') . 
			' for user "' . 
			$this->argument('user_name') .
			'"' . PHP_EOL;
		
        return 0;
    }
}
