<template>
  <div>
    <h1>Tela de Cadastro</h1>
    <button v-on:click="Voltar">Voltar</button>
  </div>
</template>
<script>
export default {
  name: "UsuarioCadastro",
  methods: {
    Voltar() {
      return this.$router.push({
        name: "index"
      });
    }
  }
};
</script>