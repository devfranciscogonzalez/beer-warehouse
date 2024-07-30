<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductoController;
use App\Http\Controllers\CargamentoController;
use App\Http\Controllers\BodegaController;
use App\Http\Controllers\InventarioController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::prefix('productos')->group(function () {
    Route::get('/', [ProductoController::class, 'index']);
    Route::get('/{id}', [ProductoController::class, 'show']);
    Route::post('/', [ProductoController::class, 'crear']);
    Route::put('/{id}', [ProductoController::class, 'update']);
    Route::delete('/{id}', [ProductoController::class, 'destroy']);
    Route::put('/restore/{id}', [ProductoController::class, 'restore']);
});

/* 
GET /productos: Obtener todos los productos.
GET /productos/{id}: Obtener un producto específico.
POST /productos: Crear un nuevo producto.
PUT /productos/{id}: Actualizar un producto.
DELETE /productos/{id}: Eliminar un producto.
PUT /productos/restore/{id}: Restaurar un producto eliminado. 
*/

Route::group(['prefix' => 'cargamentos'], function(){
    Route::get('/', [CargamentoController::class, 'index']);
    Route::post('/', [CargamentoController::class, 'crear']);
});

/* 
GET /cargamentos: Obtener todos los cargamentos.
POST /cargamentos: Crear un nuevo cargamento. 
*/

Route::group(['prefix' => 'bodegas'], function(){
    Route::get('/', [BodegaController::class, 'index']);
    Route::post('/', [BodegaController::class, 'crear']);
});

/*
GET /bodegas: Obtener todas las bodegas.
POST /bodegas: Crear una nueva bodega. 
*/

Route::group(['prefix' => 'inventarios'], function(){
    Route::get('/', [InventarioController::class, 'verInventario']);
    Route::post('/agregar', [InventarioController::class, 'agregarProducto']);
    Route::post('/quitar', [InventarioController::class, 'quitarProducto']);
});

/*
GET /inventarios: Obtener el inventario de una bodega específica.
POST /inventarios/agregar: Agregar un producto al inventario de una bodega.
POST /inventarios/quitar: Quitar un producto del inventario de una bodega. 
*/
