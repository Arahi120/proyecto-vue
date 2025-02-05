<template>
<div class=" sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.email }}</h3>
    <ul>
    <li><Router-link to="/contador">Contador</Router-link></li>
    <li><Router-link to="/lista-de-tareas">Lista de Tareas</Router-link></li>
    <li><Router-link to="/registrar">Registrar</Router-link></li>
    
    </ul>
</div>
</template>

<script setup>
import { useRegistrarStore } from '@/modules/registro/stores/registrarStore';
import {ref, watch} from 'vue';
const registrarStore = useRegistrarStore();
const nombre = ref();
const email = ref();


</script>

<style>
.sidebar {
    width: 200px;
    color: rgb(46, 46, 36);
    padding: 20px;
}
</style>