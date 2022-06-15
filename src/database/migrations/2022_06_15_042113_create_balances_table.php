<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\User;

class CreateBalancesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('balances', function (Blueprint $table) {
            $table->id();
			$table->foreignIdFor(User::class);
			$table->decimal('amount', $precision = 10, $scale = 2);
        });
		
		// Add the constraint
		DB::statement('ALTER TABLE balances ADD CONSTRAINT chk_amount CHECK (amount >= 0);');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('balances');
    }
}
