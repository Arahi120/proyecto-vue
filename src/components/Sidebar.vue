<template>
<div class=" sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
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
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);
watch(() => registrarStore.nombre, (newValue) => {
    nombre.value = newValue;
});

watch(() => registrarStore.email, (newValue) => {
    email.value = newValue;
})

</script>

<style>
.sidebar {
    width: 200px;
    color: rgb(46, 46, 36);
    padding: 20px;
}
</style>