<template>
  <div id="wrapper">
    <vue-progress-bar></vue-progress-bar>
    <vue-header :sort-by="sortBy" :source="source"></vue-header>
    <vue-articles :articles="articles"></vue-articles>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Articles from './components/Articles'

  export default {
    name: 'app',
    components: {
      'vue-header': Header,
      'vue-articles': Articles
    },
    data () {
      return {
        sortBy: '',
        source: '',
        articles: []
      }
    },
    methods: {
      toTitleCase: function (str) {
        return str.replace(/\w\S*/g, function (word) {
          return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
        })
      }
    },
    created: function () {
      this.$Progress.start()
      this.$http.get('http://localhost:3001/api/news.sources')
        .then(response => {
          return response.data.sources
        })
        .then(sources => {
          this.$http.get('http://localhost:3001/api/news.articles?source=' + sources[0].id + '&sortBy=top')
            .then(response => {
              return response.data
            })
            .then(data => {
              this.sortBy = this.toTitleCase(data.sortBy)
              this.source = this.toTitleCase(data.source.replace(/-/g, ' '))
              this.articles = data.articles
              this.$Progress.finish()
            })
        })
    }
  }
</script>

<style></style>
