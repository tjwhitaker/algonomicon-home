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
      title: "Source",
      name: "source",
      type: "string"
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
    },
    {
      title: "Content",
      name: "content",
      type: "array",
      of: [
        {type: "block"},
        {type: "code"}
      ]
    }
  ]
}