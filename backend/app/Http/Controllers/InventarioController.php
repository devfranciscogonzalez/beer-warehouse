<?php

namespace App\Http\Controllers;

use App\Models\Inventario;
use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class InventarioController extends Controller
{
    public function agregarProducto(Request $request)
    {
        try {
            $request->validate([
                'producto_id' => 'required|exists:productos,id',
                'cantidad' => 'required|integer|min:1',
                'bodega_id' => 'required|exists:bodegas,id',
            ]);

            // Verificar si ya existe un registro en el inventario para este producto y esta bodega
            $inventarioExistente = Inventario::where('producto_id', $request->input('producto_id'))->first();

            if ($inventarioExistente) {
                // Si ya existe, actualiza la cantidad
                $inventarioExistente->increment('cantidad', $request->input('cantidad'));
            } else {
                // Si no existe, crea un nuevo registro en el inventario
                Inventario::create([
                    'producto_id' => $request->input('producto_id'),
                    'cantidad' => $request->input('cantidad'),
                    'bodega_id' => $request->input('bodega_id'),
                ]);
            }

            return response()->json(['message' => 'Producto agregado al inventario con éxito'], 201);
        } catch (ValidationException $e) {
            // Manejar errores de validación
            return response()->json(['error' => $e->validator->errors()], 422);
        }
    }

    public function quitarProducto(Request $request)
    {
        try {
            $request->validate([
                'producto_id' => 'required|exists:productos,id',
                'cantidad' => 'required|integer|min:1',
                'bodega_id' => 'required|exists:bodegas,id',
            ]);

            // Verificar si ya existe un registro en el inventario para este producto y esta bodega
            $inventarioExistente = Inventario::where('producto_id', $request->input('producto_id'))->first();

            if ($inventarioExistente) {
                // Si ya existe, actualiza la cantidad
                $inventarioExistente->decrement('cantidad', $request->input('cantidad'));
            } else {
                // Si no existe, crea un nuevo registro en el inventario
                Inventario::create([
                    'producto_id' => $request->input('producto_id'),
                    'cantidad' => $request->input('cantidad'),
                    'bodega_id' => $request->input('bodega_id'),
                    // Puedes ajustar otros campos según tus necesidades
                ]);
            }

            return response()->json(['message' => 'Producto quitado del inventario con éxito'], 201);
        } catch (ValidationException $e) {
            // Manejar errores de validación
            return response()->json(['error' => $e->validator->errors()], 422);
        }
    }

    public function verInventario(Request $request)
    {
        try {
            $request->validate([
                'bodega_id' => 'required|exists:bodegas,id',
            ]);
    
            // Filtrar el inventario por la bodega en específico
            $inventario = Inventario::with('producto')
                ->where('bodega_id', $request->input('bodega_id'))
                ->get();
    
            return response()->json($inventario);
        } catch (ValidationException $e) {
            // Manejar errores de validación
            return response()->json(['error' => $e->validator->errors()], 422);
        }
    }
}
