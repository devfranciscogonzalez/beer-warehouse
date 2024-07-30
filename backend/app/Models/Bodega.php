<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bodega extends Model
{
    use HasFactory;

    protected $fillable = ['nombre', 'direccion'];

    // Relación con el inventario
    public function inventario()
    {
        return $this->hasOne(Inventario::class);
    }

}