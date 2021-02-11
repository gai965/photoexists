class CreatePhotos < ActiveRecord::Migration[6.0]
  def change
    create_table :photos do |t|
      t.string     :title,        null: false
      t.text       :explanation
      t.decimal    :latitude,     precision: 11, scale: 8
      t.decimal    :longitude,    precision: 11, scale: 8
      t.references :user,         foreign_key: true
      t.timestamps
    end
  end
end
