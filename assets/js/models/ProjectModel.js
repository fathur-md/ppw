export class ProjectModel {
  constructor(data) {
    this.id = data.id;
    this.category = data.category;
    this.type = data.type;
    this.title = data.title;
    this.description = data.description;
    this.status = data.status;
    this.createdAt = new Date(data.createdAt);
    this.img = data.img;
    this.link = data.link;
    this.tags = data.tags || [];
  }
}
