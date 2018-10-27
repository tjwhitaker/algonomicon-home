class AddSlugsToModels < ActiveRecord::Migration[5.2]
  def change
    add_column :articles, :slug, :string, unique: true
    add_column :datasets, :slug, :string, unique: true
    add_column :events, :slug, :string, unique: true
    add_column :papers, :slug, :string, unique: true
    add_column :projects, :slug, :string, unique: true
  end
end
