<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class ProductoController extends Controller
{
    public function index()
    {
        $productos = Producto::all(); // Obtener todos los productos, incluyendo los eliminados suavemente
        return response()->json($productos);
    }

    public function show($id)
    {
        $producto = Producto::withTrashed()->find($id); // Obtener un producto, incluyendo los eliminados suavemente

        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        return response()->json($producto);
    }

    public function crear(Request $request)
    {
        try {
            $request->validate([
                'nombre' => 'required|string|max:255',
                'marca' => 'required|string|max:255',
                'precio' => 'required|numeric',
            ]);

            $producto = Producto::create($request->all());

            return response()->json(['message' => 'Producto creado con éxito'], 201);
        } catch (ValidationException $e) {
            return response()->json(['error' => $e->validator->errors()], 422);
        }
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'nombre' => 'required|string|max:255',
            'marca' => 'required|string|max:255',
            'precio' => 'required|numeric',
        ]);

        $producto = Producto::withTrashed()->find($id);

        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $producto->update($request->all());

        return response()->json(['message' => 'Producto actualizado'], 200);
    }

    public function destroy($id)
    {
        $producto = Producto::withTrashed()->find($id);

        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        // Si quieres eliminar permanentemente, puedes usar $producto->forceDelete();
        $producto->delete();

        return response()->json(['message' => 'Producto eliminado'], 200);
    }

    public function restore($id)
    {
        $producto = Producto::withTrashed()->find($id);

        if (!$producto) {
            return response()->json(['message' => 'Producto no encontrado'], 404);
        }

        $producto->restore();

        return response()->json(['message' => 'Producto restaurado'], 200);
    }
}
