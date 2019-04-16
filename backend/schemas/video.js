export default {
  title: "Video",
  name: "video",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
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
      title: "URL",
      name: "url",
      type: "string"
    },
    {
      title: "Description",
      name: "description",
      type: "text"
    }
  ]
}