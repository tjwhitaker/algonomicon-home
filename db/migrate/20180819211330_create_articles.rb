class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.belongs_to :category, index: true

      t.string :title
      t.text :description
      t.text :content
      t.text :content_parsed

      t.timestamps
    end
  end
end
