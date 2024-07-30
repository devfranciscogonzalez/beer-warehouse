<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIngresosTable extends Migration
{
    public function up()
    {
        Schema::create('ingresos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('fabrica_id');
            $table->unsignedBigInteger('cargamento_id');
            $table->unsignedBigInteger('bodega_id');
            $table->timestamps();

            $table->foreign('fabrica_id')->references('id')->on('fabricas');
            $table->foreign('cargamento_id')->references('id')->on('cargamentos');
            $table->foreign('bodega_id')->references('id')->on('bodegas');
        });
    }

    public function down()
    {
        Schema::dropIfExists('ingresos');
    }
}
