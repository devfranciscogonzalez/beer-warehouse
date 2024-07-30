<?php

namespace App\Http\Controllers;

use App\Models\Bodega;
use Illuminate\Http\Request;

class BodegaController extends Controller
{
    public function index()
    {
        $bodegas = Bodega::all();
        return response()->json($bodegas);
    }

    public function crear(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'direccion' => 'required|string|max:255',
        ]);

        $bodega = Bodega::create([
            'nombre' => $request->input('nombre'),
            'direccion' => $request->input('direccion'),
            // Agrega otros campos según tus necesidades
        ]);

        return response()->json(['message' => 'Bodega creada con éxito'], 201);
    }
}
