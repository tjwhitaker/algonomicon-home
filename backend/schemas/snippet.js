export default {
  title: "Snippet",
  name: "snippet",
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
      title: "Description",
      name: "description",
      type: "text"
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {type: "block"},
        {type: "code"},
        {type: "image"}
      ]
    }
  ]
}