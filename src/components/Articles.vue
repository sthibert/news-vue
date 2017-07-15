<template>
  <div>
    <transition-group name="staggered-fade" tag="div" id="main" v-on:before-enter="beforeEnter" v-on:enter="enter">
      <article class="thumb" v-for="article in articles" v-bind:key="article">
        <a href="javascript:void(0)" class="image"
           @click="openModal(article.urlToImage, article.title, article.description, article.url)">
          <img :src="article.urlToImage" :alt="article.title"/>
        </a>
        <h2>{{article.title}}</h2>
      </article>
    </transition-group>
    <vue-modal v-if="showModal" @close="closeModal()"
               :image="modalData.image"
               :title="modalData.title"
               :description="modalData.description"
               :url="modalData.url"></vue-modal>
  </div>
</template>

<script>
  import Modal from './Modal'
  import Velocity from '../../node_modules/velocity-animate/velocity.min'

  export default {
    name: 'vue-articles',
    props: ['articles'],
    components: {
      'vue-modal': Modal
    },
    data: function () {
      return {
        showModal: false,
        modalData: {
          image: '',
          title: '',
          description: '',
          url: ''
        }
      }
    },
    methods: {
      beforeEnter: function (el) {
        el.style.opacity = 0
      },
      enter: function (el, done) {
        Velocity(el, {opacity: 1}, {complete: done})
      },
      openModal: function (image, title, description, url) {
        this.showModal = true
        this.modalData.image = image
        this.modalData.title = title
        this.modalData.description = description
        this.modalData.url = url
      },
      closeModal: function () {
        this.showModal = false
        this.modalData.image = ''
        this.modalData.title = ''
        this.modalData.description = ''
        this.modalData.url = ''
      }
    }
  }
</script>

<style scoped>
  .image {
    -webkit-transition: all 0.2s ease-in-out;
    -moz-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }

  .image:hover {
    zoom: 1;
    filter: alpha(opacity=50);
    opacity: 0.5;
    transform: scale(1.05);
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    -o-transform: scale(1.05);
    -ms-transform: scale(1.05);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>
