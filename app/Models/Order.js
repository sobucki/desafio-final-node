"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Order extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }

  items() {
    return this.belongsToMany("App/Models/Item").pivotTable("order_items");
  }
}

module.exports = Order;
