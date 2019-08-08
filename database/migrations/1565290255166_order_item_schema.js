"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class OrderItemSchema extends Schema {
  up() {
    this.create("order_items", table => {
      table.increments();
      table
        .integer("order_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("orders")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("item_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("items")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    });
  }

  down() {
    this.drop("order_items");
  }
}

module.exports = OrderItemSchema;
