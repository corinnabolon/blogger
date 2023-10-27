<template>
  <section class="row align-items-center bg-light rounded shadow justify-content-around my-3">
    <div class="col-7">
      <router-link v-if="!activeBlogger" :to="{ name: 'Blog', params: { userId: blogProp.creator.id } }">
        <div class="d-flex">
          <img :src="blogProp.creator.coverImg" alt="User Image" class="rounded-circle user-image">
          <p>{{ blogProp.creator.name }}</p>
        </div>
      </router-link>
      <div class="col-12">
        <p class="fs-3">{{ blogProp.title }}</p>
        <p>{{ blogProp.body }}</p>
        <p v-if="blogProp.tags.length != 0">Tags: {{ blogProp.tags }}</p>
        <p>Published: {{ blogProp.createdAt }} Last Updated: {{ blogProp.updatedAt }}</p>
      </div>
    </div>
    <div class="col-4">
      <img :src="blogProp.imgUrl" alt="Blog Picture" class="blog-image">
    </div>
  </section>

  <!-- this.title = data.title
    this.imgUrl = data.imgUrl
    this.tags = data.tags
 -->
</template>


<script>
import { computed } from "vue";
import { Blog } from "../models/Blog.js";
import { AppState } from "../AppState.js";

// import { AppState } from '../AppState';
// import { computed, reactive, onMounted } from 'vue';

export default {
  props: { blogProp: { type: Blog, required: true } },

  setup() {
    return {
      activeBlogger: computed(() => AppState.activeBlogger)
    }
  }
};
</script>


<style lang="scss" scoped>
.user-image {
  height: 5vh;
  width: 5vh;
  object-fit: cover;
}

.blog-image {
  height: 20vh;
  width: 20vh;
  object-fit: cover;
}
</style>