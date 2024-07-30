<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    use HasFactory;

    protected $fillable = ['cargamento_id', 'bodega_id'];

    // Relación con el cargamento
    public function cargamento()
    {
        return $this->hasMany(Cargamento::class);
    }

    // Relación con la bodega
    public function bodega()
    {
        return $this->belongsTo(Bodega::class);
    }
}
