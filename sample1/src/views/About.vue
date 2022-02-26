<template>
  <main class="about">
    <h1>About</h1>

name: {{ $store.state.user.name }}<br>
 dname:    {{ $store.state.user.displayName }}<br>

  {{ $store.state.user.email }}
  </main>
</template>
