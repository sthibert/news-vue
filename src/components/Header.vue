<template>
  <header id="header">
    <h1><strong>{{sortBy}}</strong> News From <strong>{{source}}</strong></h1>
    <nav>
      <ul>
        <li>Powered by&nbsp;&nbsp;<a href="https://newsapi.org" target="_blank">News API</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'vue-header',
    props: ['sortBy', 'source']
  }
</script>

<style scoped></style>
