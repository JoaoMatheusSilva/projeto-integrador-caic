<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'contact', 'email', 'phone',
     'number', 'complement', 'cnpj', 'address_id'];

    public function address()
    {
        return $this->belongsTo(Address::class, 'address_id');
    }
    public function priceList()
    {
        return $this->hasMany(PriceList::class);
    }
}