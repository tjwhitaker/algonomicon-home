export default {
  title: "Paper",
  name: "paper",
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
      title: "Author",
      name: "author",
      type: "string"
    },
    {
      title: "Abstract",
      name: "abstract",
      type: "text"
    }
  ]
}