<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cargamento extends Model
{
    use HasFactory;

    protected $fillable = ['producto_id', 'cantidad', 'fabrica_id', 'bodega_origen_id', 'bodega_destino_id'];

    // Relación con el producto
    public function producto()
    {
        return $this->belongsTo(Producto::class);
    }

    // Relación con la fábrica
    public function fabrica()
    {
        return $this->belongsTo(Fabrica::class);
    }

    // Relación con la bodega de origen
    public function bodegaOrigen()
    {
        return $this->belongsTo(Bodega::class, 'bodega_origen_id');
    }

    // Relación con la bodega de destino
    public function bodegaDestino()
    {
        return $this->belongsTo(Bodega::class, 'bodega_destino_id');
    }

    public function ventas()
    {
        return $this->belongsTo(Venta::class);
    }
}
