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
      },
      getOrigin: function () {
        return (process.env.NODE_ENV === 'development') ? 'http://localhost:3001' : 'https://blooming-forest-83104.herokuapp.com'
      }
    },
    created: function () {
      this.$Progress.start()
      this.$http.get(this.getOrigin() + '/api/news.sources')
        .then(response => {
          return response.data.sources
        })
        .then(sources => {
          this.$http.get(this.getOrigin() + '/api/news.articles?source=' + sources[0].id + '&sortBy=top')
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
