<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTraspasosTable extends Migration
{
    public function up()
    {
        Schema::create('traspasos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('bodega_origen_id');
            $table->unsignedBigInteger('bodega_destino_id');
            $table->timestamps();

            $table->foreign('bodega_origen_id')->references('id')->on('bodegas');
            $table->foreign('bodega_destino_id')->references('id')->on('bodegas');
        });
    }

    public function down()
    {
        Schema::dropIfExists('traspasos');
    }
}
