class Article < ApplicationRecord
  before_save :parse_content
  belongs_to :category, optional: true
  searchkick
  
  private

  def parse_content
    options = {
      filter_html:         true,
      hard_wrap:           true,
      space_after_headers: true,
      fenced_code_blocks:  true
    }

    extensions = {
      autolink:    true,
      superscript: true
    }

    renderer = Redcarpet::Render::HTML.new(options)
    markdown = Redcarpet::Markdown.new(renderer, extensions)

    self.content_parsed = markdown.render(self.content)
  end
end