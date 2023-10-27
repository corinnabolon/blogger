<template>
  <form @submit.prevent="postBlog()">
    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input v-model="editable.title" type="title" class="form-control" id="title" maxlength="100">
    </div>
    <div class="mb-3">
      <label for="body" class="form-label">Blog Entry</label>
      <textarea v-model="editable.body" class="form-control" id="body" maxlength="5000" cols="4"></textarea>
    </div>
    <div class="mb-3 form-check">
      <label for="imgUrl" class="form-label">Image</label>
      <input v-model="editable.imgUrl" type="imgUrl" class="form-control" id="imgUrl" maxlength="500">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>


<script>
// import { AppState } from '../AppState';
import { ref } from 'vue';
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js";



export default {
  setup() {
    const editable = ref({})
    return {
      async postBlog() {
        try {
          let blogData = editable.value
          await blogsService.postBlog(blogData)
        } catch (error) {
          Pop.error(error)
        }
      },
      editable
    }
  }
};
</script>


<style lang="scss" scoped></style>