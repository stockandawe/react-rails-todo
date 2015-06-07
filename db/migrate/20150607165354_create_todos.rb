class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :task, null: false
      t.boolean :completed, default: true

      t.timestamps null: false
    end
  end
end
