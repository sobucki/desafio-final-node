"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("users", "UserController.store");
Route.post("sessions", "SessionController.store");

Route.post("passwords", "ForgotPasswordController.store");

Route.get("/files/:id", "FileController.show");

// Route.group(() => {
Route.post("/files", "FileController.store");
Route.resource("categories", "CategoryController").apiOnly();
Route.resource("categories.products", "ProductController").apiOnly();
Route.resource("products.items", "ItemController").apiOnly();
// }).middleware(["auth"]);
