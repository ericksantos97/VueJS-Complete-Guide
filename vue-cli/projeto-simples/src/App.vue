<template>
  <div id="app">
    {{ titulo }}
    <button @click="titulo += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      titulo: "Teste Data usando Vue Js"
    };
  }
};
</script>

<style>
#app {
  background-color: chocolate;
  color: aliceblue;
}
</style>
