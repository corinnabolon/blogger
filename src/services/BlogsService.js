import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { Blogger } from "../models/Blogger.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class BlogsService {

  async getBlogs() {
    AppState.activeBlogger = null
    const res = await api.get("api/blogs")
    logger.log(res.data)
    AppState.blogs = res.data.map((blogPOJO) => new Blog(blogPOJO))
  }

  async getBlogByUserId(userId) {
    const res = await api.get(`api/blogs?creatorId=${userId}`)
    logger.log(res.data)
    AppState.blogs = res.data.map((blogPOJO => new Blog(blogPOJO)))
    let activeBlog = AppState.blogs.find(blog => blog.creator.id == userId)
    let activeBlogger = new Blogger(activeBlog.creator)
    logger.log("Active Blogger", activeBlogger)
    AppState.activeBlogger = activeBlogger
  }

  async postBlog(blogData) {
    const res = await api.post("api/blogs", blogData)
  }

}

export const blogsService = new BlogsService()