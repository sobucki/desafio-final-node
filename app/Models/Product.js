"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Product extends Model {
  category() {
    return this.belongsTo("App/Models/Category");
  }

  cover() {
    return this.belongsTo("App/Models/File");
  }
}

module.exports = Product;
