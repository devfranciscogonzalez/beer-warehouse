<?php

namespace App\Http\Controllers;

use App\Models\Cargamento;
use App\Models\Producto;
use Illuminate\Http\Request;

class CargamentoController extends Controller
{
    public function crear(Request $request)
    {
        $request->validate([
            'producto_id' => 'required|exists:productos,id',
            'cantidad' => 'required|integer|min:1',
        ]);

        // Crear un nuevo cargamento
        $cargamento = Cargamento::create([
            'producto_id' => $request->input('producto_id'),
            'cantidad' => $request->input('cantidad'),
            // Agrega otros campos según tus necesidades
        ]);

        // Asignar cargamento a una bodega

        return response()->json(['message' => 'Cargamento creado con éxito'], 201);
    }

    public function index()
    {
        $cargamentos = Cargamento::with('producto')->get();
        return response()->json($cargamentos);
    }
}
