class CreateDatasets < ActiveRecord::Migration[5.2]
  def change
    create_table :datasets do |t|
      t.string :title
      t.string :data
      t.text :description

      t.timestamps
    end
  end
end
