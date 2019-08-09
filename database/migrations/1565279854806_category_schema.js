"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CategorySchema extends Schema {
  up() {
    this.create("categories", table => {
      table.increments();
      table.text("description").notNullable();
      table.integer("time").notNullable();
      table
        .integer("file_id")
        .unsigned()
        .references("id")
        .inTable("files")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");
      table.timestamps();
    });
  }

  down() {
    this.drop("categories");
  }
}

module.exports = CategorySchema;
