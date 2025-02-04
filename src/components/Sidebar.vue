<template>
<div class=" sidebar">
    <h2>Barra lateral</h2>
    <ul>
    <li><Router-link to="/contador">Contador</Router-link></li>
    <li><Router-link to="/lista-de-tareas">Lista de Tareas</Router-link></li>
    </ul>
</div>
</template>

<script setup>

</script>

<style>
.sidebar {
    width: 200px;
    color: rgb(46, 46, 36);
    padding: 20px;
}
</style>