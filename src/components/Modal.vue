<template>
  <transition name="modal">
    <div class="poptrox-overlay">
      <div class="align-middle"></div>
      <div class="poptrox-popup">
        <div class="pic">
          <img :src="image" :alt="title">
        </div>
        <div class="caption"><h2>{{title}}</h2>
          <p>{{description}} <a :href="url" target="_blank">Read more</a></p>
        </div>
        <span class="closer" @click="$emit('close')"></span>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'vue-modal',
    props: ['image', 'title', 'description', 'url']
  }
</script>

<style scoped>
  .poptrox-overlay {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 20000;
    width: 100%;
    height: 100%;
    text-align: center;
    display: block;
    opacity: 1;
  }

  .poptrox-popup {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    z-index: 1;
    min-width: 150px;
    min-height: 150px;
    width: auto;
    height: auto;
    transition: opacity 0.5s
  }

  .align-middle {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .pic {
    display: block;
    text-indent: 0;
  }

  .pic img {
    vertical-align: bottom;
    max-width: 913px;
    max-height: 651px;
  }

  .caption {
    display: block;
  }

  .closer {
    cursor: pointer;
    display: block;
  }

  .modal-enter .poptrox-popup,
  .modal-leave-to .poptrox-popup {
    opacity: 0
  }
</style>
