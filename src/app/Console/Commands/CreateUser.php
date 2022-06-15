<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;
use App\Models\Balance;
use Illuminate\Support\Facades\Hash;

class CreateUser extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:user {user_login} {user_password=secret}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create new User';

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
		echo $this->argument('user_login') . "\n";
		echo $this->argument('user_password') . "\n";
		
		try {
			$user = User::create([
				'name' => $this->argument('user_login'),
				'email' => $this->argument('user_login') . '@test-laravel.org',
				'password' => Hash::make($this->argument('user_password')),
			]);
			
			$balance = Balance::create([
				'user_id' => $user->id,
				'amount' => 0,
			]);
			
		} catch(Trowable $e) {
			echo $e->getMessage();
		}
		
		return 0;
		
    }
}
