<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-10">
        <button @click="showForm()" class="btn btn-success mt-3">Create Your Own Post</button>
        <div v-if="wantToSeeForm">
          <BlogEntryCard />
        </div>
      </div>
      <div v-for="blog in blogs" :key="blog.id" class="col-10">
        <BlogCard :blogProp="blog" />
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js"
import { AppState } from "../AppState.js"

export default {

  setup() {
    let wantToSeeForm = ref(false)

    function showForm() {
      wantToSeeForm.value = !wantToSeeForm.value
    }

    onMounted(() => {
      getBlogs()
    });

    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      wantToSeeForm,
      showForm,
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
