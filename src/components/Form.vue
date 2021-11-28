<template>
  <div>
    <input id="name" type="text" placeholder="Digite seu nome" />
    <br />
    <input id="second_name" type="text" placeholder="Digite seu sobrenome" />
    <br />

    <input id="old" type="number" placeholder="Digite sua idade" />
    <br />

    <input id="email" type="text" placeholder="Digite seu email" />

    <br />
    <button @click="changeData">Enviar</button>

    <br /><br /><br />

    <p><b>Nome Completo: </b> {{ fullName }}</p>
    <br />
    <p><b>Idade: </b> {{ user.old }}</p>
    <br />
    <p><b>Email: </b> {{ user.email }}</p>
    <br /><br /><br />
    <span>Usando modules</span>
    <p>Primeiro nome: {{ $store.state.users.first_name }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Form",
  computed: {
    ...mapGetters(["fullName"]),
    ...mapState({
      user: (state) => state.user,
    }),
    ...mapActions(),
    ...mapMutations(),
  },
  components: {},
  methods: {
    changeData() {
      let name = document.getElementById("name").value;
      let secondName = document.getElementById("second_name").value;
      let old = document.getElementById("old").value;
      let email = document.getElementById("email").value;
      console.log(name, secondName, old, email);

      name != "" ? this.$store.commit("changeName", name) : false;
      secondName != ""
        ? this.$store.commit("changeSecondName", secondName)
        : false;
      old != "" ? this.$store.commit("changeOld", old) : false;
      email != "" ? this.$store.commit("changeEmail", email) : false;

      console.log(this.$store.state.user.name);
    },
  },
};
</script>
