<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVentasTable extends Migration
{
    public function up()
    {
        Schema::create('ventas', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('cargamento_id');
            $table->unsignedBigInteger('bodega_id');
            
            $table->foreign('cargamento_id')->references('id')->on('cargamentos');
            $table->foreign('bodega_id')->references('id')->on('bodegas');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('ventas');
    }
}
