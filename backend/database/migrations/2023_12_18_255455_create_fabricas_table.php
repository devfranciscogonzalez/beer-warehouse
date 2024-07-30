<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFabricasTable extends Migration
{
    public function up()
    {
        Schema::create('fabricas', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('direccion');
            // Agrega otros campos según sea necesario
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('fabricas');
    }
}
