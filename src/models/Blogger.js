export class Blogger {
  constructor(data) {
    this.id = data._id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture || null
    this.bio = data.bio || null
    this.coverImg = data.coverImg || null
    this.github = data.github || null
    this.linkedin = data.linkedin || null
    this.resume = data.resume || null
    this.class = data.class || null
    this.graduated = data.graduated || false
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }
}