const User = require("./User");
const Order = require("./Order");
const Product = require("./Product");
const Category = require("./Category");

User.hasMany(Order);
Order.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

module.exports = {
  User,
  Order,
  Product,
  Category,
};
