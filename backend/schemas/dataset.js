export default {
  title: "Dataset",
  name: "dataset",
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
      title: "Creator",
      name: "creator",
      type: "string"
    },
    {
      title: "Format",
      name: "format",
      type: "string"
    },
    {
      title: "Instances",
      name: "instances",
      type: "number"
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
        {type: "code"}
      ]
    }
  ]
}