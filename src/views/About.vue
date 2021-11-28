<template>
  <div class="about">
    <h1>Confira seus dados abaixo</h1>
    <br />
    <ul>
      <li><b>Nome: </b> {{ $store.state.user.name }}</li>
      <li><b>Sobrenome: </b> {{ $store.state.user.second_name }}</li>
      <li><b>Idade: </b> {{ $store.state.user.old }}</li>
      <li><b>Email: </b> {{ $store.state.user.email }}</li>
    </ul>
  </div>
</template>
