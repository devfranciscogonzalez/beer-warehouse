<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingreso extends Model
{
    use HasFactory;

    protected $fillable = ['fabrica_id', 'cargamento_id', 'bodega_id'];

    // Relación con la fábrica
    public function fabrica()
    {
        return $this->belongsTo(Fabrica::class);
    }

    // Relación con el cargamento
    public function cargamento()
    {
        return $this->belongsTo(Cargamento::class);
    }

    // Relación con la bodega
    public function bodega()
    {
        return $this->belongsTo(Bodega::class);
    }
}
