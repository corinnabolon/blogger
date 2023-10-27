<template>
  <div class="container-fluid" v-if="activeBlogger">
    <section class="row">
      <div class="col-12 d-flex align-items-center">
        <img :src="activeBlogger.picture" :alt="activeBlogger.name" class="rounded-circle user-image m-5">
        <p class="fs-2">{{ activeBlogger?.name }}</p>
      </div>
      <section class="row">
        <div v-for="blog in blogs" :key="blog.id" class="col-10">
          <BlogCard :blogProp="blog" />
        </div>
      </section>


    </section>
  </div>
</template>


<script>
import { useRoute } from "vue-router";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js";
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import { AppState } from '../AppState';

export default {
  setup() {
    const route = useRoute();

    onMounted(() => {
      getBlogByUserId();
    });

    async function getBlogByUserId() {
      try {
        let userId = route.params.userId
        logger.log(userId)
        await blogsService.getBlogByUserId(userId)
      } catch (error) {
        Pop.error(error)
      }
    }

    return {
      blogs: computed(() => AppState.blogs),
      activeBlogger: computed(() => AppState.activeBlogger)
    }
  }
};
</script>


<style lang="scss" scoped>
.user-image {
  height: 30vh;
  width: 30vh;
  object-fit: cover;
}
</style>