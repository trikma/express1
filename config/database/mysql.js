var Sequelize = require("sequelize");
var db = new Sequelize("kuliah2", "root", "tanah_jawaku", {
  dialect: "mysql",
  host: "localhost",
});
console.log("koneksi berhasil");
module.exports = db;
