class CreatePapers < ActiveRecord::Migration[5.2]
  def change
    create_table :papers do |t|
      t.belongs_to :category, index: true

      t.string :title
      t.string :source
      t.string :content
      t.string :authors
      t.text :abstract
      t.date :submitted

      t.timestamps
    end
  end
end
