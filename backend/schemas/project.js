export default {
  title: "Project",
  name: "project",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    },
    {
      title: "Hero Image",
      name: "heroImage",
      type: "image"
    },
    {
      title: "Description",
      name: "description",
      type: "text"
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [{type: "block"}]
    }
  ]
}