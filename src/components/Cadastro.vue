<style lang="css">
input {
  width: 150px;
  margin-left: 5px;
}
.labels {
  display: inline-block;
  margin: 0px;
  min-width: 120px;
  color: blue;
  margin-right: 5px;
}
.form-control {
  /* border: 1px solid; */
  width: auto;
  text-align: center;
  height: 30px;
}
</style>
<template>
  <div>
    <div class="form-control">
      <label class="labels" for="Name">Nome do evento:</label>
      <input v-model="nome" type="text" name="Name" id="NomeEvento" />
    </div>
    <div class="form-control">
      <label class="labels" for="Local">Local do evento:</label>
      <input v-model="local" type="text" name="local" id="localEvento" />
    </div>
    <div class="form-control">
      <label class="labels" for="Data">Data do evento:</label>
      <input v-model="data" type="Date" name="Data" id="DataEvento" />
    </div>
    <button @click="Cadastrar">Cadastrar</button>
    <button @click="Voltar">Voltar</button>

    <span>{{resultado}}</span>
  </div>
</template>

<script>
export default {
  name: "cadastro",
  data: () => {
    return {
      nome: "",
      data: "",
      local: "",
      resultado: ""
    };
  },
  methods: {
    Cadastrar() {
      const evento = {
        name: this.nome,
        local: this.local,
        data: this.data
      };

      fetch("http://localhost:8000/cadastrar", {
        method: "POST",
        body: JSON.stringify(evento),
        headers: { "Content-type": "application/json" }
      }).then(resp => {
        return resp.json().then(r => (this.resultado = r));
      });
    },
    Voltar() {
      return this.$router.push({
        name: "rpg"
      });
    }
  }
};
</script>