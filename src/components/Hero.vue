<script lang="ts" setup>
import Media from './Media.vue';
const data = [
  {
    pic: "https://note-image-1302477034.cos.ap-chengdu.myqcloud.com/pic/test.jpeg",
    link: "http://www.qq.com",
    title: "标题1"
  },
  {
    pic: "../assets/005.jpg",
    link: "http://www.qq.com",
    title: "标题1"
  },
  {
    pic: "../assets/005.jpg",
    link: "http://www.qq.com",
    title: "标题1"
  },
  {
    pic: "../assets/005.jpg",
    link: "http://www.qq.com",
    title: "标题1"
  },
  {
    pic: "../assets/005.jpg",
    link: "http://www.qq.com",
    title: "标题1"
  },
]
</script>

<template>
  <div class="hero">
    <div class="hero__bg">
      <img src="../assets/005.jpg" alt="" />
    </div>
    <div class="container">
      <div class="row transition-all">
        <div class="column-6 transition-all">
          <Media :item="data[0]" />
        </div>
        <div class="column-6 transition-all">
          <div class="row column-6 transition-all">
            <Media :item="data[0]" />
            <Media :item="data[0]" />
          </div>
          <div class="space"></div>
          <div class="row column-6 transition-all">
            <Media :item="data[0]" />
            <Media :item="data[0]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  height: 70vh;
}
.hero__bg {
  position: absolute;
  top: 0;
  inset: 0;
  overflow: hidden;
  z-index: -1;
}

.hero__bg > img {
  position: relative;
  width: 100%;
  height: 100%;
  object-position: 50% 50%;
  object-fit: cover;
}
.hero__bg > img::before {
  content: "";
  display: block;
  position: absolute;
  background-color: red;
  inset: 0;
  backdrop-filter: blur(10px);
}

.container {
  padding-top: 3em;
}

.row {
  height: calc( 1024px / 2);
  justify-content: stretch;
}

.row > .column-6:first-child {
  margin-right: 0.5em;
}

.column-6 > .row {
  height: calc( 1024px / 4);
}

.column-6 > .space{
  height: 0;
  padding-bottom: 0.5em;
}
.column-6 > .row > .media:nth-child(2n) {
  margin-left: 0.5em;
}

@media (min-width: 1280px) {
  .row {
    height: calc( 1280px / 2);
  }

  .column-6 > .row {
    height: calc( 1280px / 4);
  }
}

@media (min-width: 1536px) {
  .row {
    height: calc( 1536px / 2);
  }

  .column-6 > .row {
    height: calc( 1536px / 4);
  }
}



</style>
