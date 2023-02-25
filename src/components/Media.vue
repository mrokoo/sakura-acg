<script setup lang="ts">
defineProps<{
  item: {
    title: string;
    pic: string;
    link: string;
  };
}>();
</script>

<template>
  <div class="media">
    <p class="media__title">{{ item.title }}</p>
    <a :href="item.link" class="media__link"></a>
    <img :src="item.pic" alt="" class="media__pic" />
  </div>
</template>

<style scoped>
.media {
  position: relative;
  height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.media__pic {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
  object-position: 50% 50%;
  transition: all 0.5s ease-in-out;
}

.media__title {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 0;
  font-size: 18px;
  font-weight: bold;
  color: white;
  padding: 1em 1.5em;
}

.media__link {
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: 10px;
}

.media__link:hover + .media__pic {
  transform: scale(1.05);
}


</style>
