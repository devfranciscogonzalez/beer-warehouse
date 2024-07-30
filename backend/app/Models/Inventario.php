<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventario extends Model
{
    use HasFactory;

    protected $fillable = ['producto_id', 'cantidad', 'bodega_id'];

    // Relación con la bodega
    public function bodega()
    {
        return $this->belongsTo(Bodega::class);
    }

    public function producto()
    {
        return $this->belongsTo(Producto::class);
    }
}
