<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Transaction extends Model
{
	protected $fillable = [
		'from',
		'to',
		'amount',
		'description',
		'created_at',
		'updated_at',
	];
	
	public function sender()
	{
		return $this->belongsTo(User::class, 'from');
	}
	
	public function receiver()
	{
		return $this->belongsTo(User::class, 'to');
	}
}
