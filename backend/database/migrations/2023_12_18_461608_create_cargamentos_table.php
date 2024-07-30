<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCargamentosTable extends Migration
{
    public function up()
    {
        Schema::create('cargamentos', function (Blueprint $table) {
            $table->id();
            $table->integer('cantidad');
            $table->unsignedBigInteger('producto_id');
            $table->unsignedBigInteger('fabrica_id')->nullable();
            $table->unsignedBigInteger('bodega_origen_id')->nullable();
            $table->unsignedBigInteger('bodega_destino_id')->nullable();
            //$table->boolean('es_venta')->default(false);
            $table->timestamps();

            $table->foreign('producto_id')->references('id')->on('productos');
            $table->foreign('fabrica_id')->references('id')->on('fabricas');
            $table->foreign('bodega_origen_id')->references('id')->on('bodegas');
            $table->foreign('bodega_destino_id')->references('id')->on('bodegas');
        });
    }

    public function down()
    {
        Schema::dropIfExists('cargamentos');
    }
}

