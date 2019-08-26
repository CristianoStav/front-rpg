<style>
button {
  margin: 5px;
}
</style>

<template >
  <div>
    <p>Eventos Disponíveis</p>

    <div v-for="event in events" :key="event._id">
      <h3>Evento</h3>
      <li>Nome: {{event.name}}</li>
      <li>Local: {{event.local}}</li>
      <li>Data: {{event.data}}</li>
    </div>
    <button>Procurar Eventos</button>
    <button v-on:click="cadastrarEvento">Cadastrar Evento</button>
  </div>
</template>

<script>
import Service from "../services/request";
export default {
  name: "rpg",
  data: () => {
    return {
      events: ""
    };
  },
  created: function() {
    let result = Service.get("http://localhost:8000/");
    result.then(e => (this.events = e));
  },
  methods: {
    // getEvents: function() {
    //   let result = Service.get("http://localhost:8000/");
    //   result.then(e => (this.events = e));
    // },
    cadastrarEvento: function() {
      return this.$router.push({
        name: "cadastro"
      });
    }
  }
};
</script>