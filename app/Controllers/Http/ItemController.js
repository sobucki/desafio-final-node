"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Item = use("App/Models/Item");
/**
 * Resourceful controller for interacting with items
 */
class ItemController {
  /**
   * Show a list of all items.
   * GET items
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ params, request, response, view }) {
    const items = await Item.query()
      .where("product_id", params.products_id)
      .with("product")
      .with("cover")
      .fetch();

    return items;
  }

  /**
   * Create/save a new item.
   * POST items
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ params, request, response }) {
    const data = request.only(["size", "price", "file_id"]);

    const item = await Item.create({
      ...data,
      product_id: params.products_id
    });

    return item;
  }

  /**
   * Display a single item.
   * GET items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
    const item = await Item.findOrFail(params.id);

    console.log(`teste`);
    await item.load("product.cover");

    // if (item.product) {
    //   await item.product().load("cover");
    // }
    console.log("teste2");

    return item;
  }

  /**
   * Update item details.
   * PUT or PATCH items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const item = await Item.findOrFail(params.id);
    const data = request.only(["size", "price", "file_id"]);

    item.merge(data);

    await item.save();

    return item;
  }

  /**
   * Delete a item with id.
   * DELETE items/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    const item = await Item.findOrFail(params.id);

    await item.delete();
  }
}

module.exports = ItemController;
