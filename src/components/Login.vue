<style scoped>
div {
  margin: 0;
  padding: 0;
}
.box {
  margin: auto;
  margin-top: 15px;
  display: flexbox;
  align-content: center;
  text-align: center;
  border: 2px solid #ddd;
  width: 25%;
  height: 150px;
  border-radius: 5px;
}
input[type="email"],
input[type="password"] {
  align-self: center;
  margin: auto;
  margin-left: 5px;
  margin-top: 5px;
  width: 160px;
  border: 0.5px solid rgb(202, 200, 200);
  border-radius: 2px;
}
input[type="button"] {
  margin: auto;
  width: 60px;
  margin-top: 15px;
  height: 35px;
  background-color: rgb(149, 107, 247);
  border: 1px solid #ddd;
  border-radius: 5px;
  color: white;
}
form {
  margin: auto;
  margin-top: 35px;
}
.registrar {
  margin-top: 35px;
}
</style>

<template>
  <div>
    <p style="color: red;">{{resultado}}</p>
    <div class="box">
      <form router-link to="/foo">
        <div>
          <div>
            <label for="login">E-mail:</label>
            <input type="email" v-model="email" name="login" id="login" />
          </div>
          <div>
            <label for="pass">Senha:</label>
            <input type="password" v-model="pass" name="pass" id="password" />
          </div>
          <input type="button" value="Logar" v-on:click="Logar" />
        </div>
      </form>
    </div>
    <div class="registrar">
      <p>
        Não tem uma conta ainda?
        <router-link to="/login/cadastro">Registre-se</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import Service from "../services/request";
export default {
  name: "Login",
  data: function() {
    return {
      email: "",
      pass: "",
      resultado: ""
    };
  },
  methods: {
    al: msg => {
      return alert(msg);
    },
    Logar: async function() {
      let usuario = {
        email: this.email,
        password: this.pass
      };

      if (!usuario.email) return this.al("Digite o nome de usuario");

      let response = await Service.fetch(
        "http://localhost:3001/logar",
        "POST",
        JSON.stringify(usuario)
      );

      if (response) {
        this.al(`Olá ${response.name}, Bem-Vindo!`);
        return this.$router.push({
          name: "rpg"
        });
      }

      return (this.resultado = "Acesso Negado!");
    }
  }
};
</script>