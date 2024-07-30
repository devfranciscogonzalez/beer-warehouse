<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInventariosTable extends Migration
{
    public function up()
    {
        Schema::create('inventarios', function (Blueprint $table) {
            $table->id();
            $table->integer('cantidad');
            $table->unsignedBigInteger('producto_id');
            $table->unsignedBigInteger('bodega_id');
            $table->foreign('producto_id')->references('id')->on('productos');
            $table->foreign('bodega_id')->references('id')->on('bodegas');
            // Agrega otros campos según sea necesario para el inventario
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('inventarios');
    }
}
