require("dotenv").config();
const express = require("express")
const routes = require("./routes")
const cors = require("cors");
const port = process.env.APP_PORT
const app = express()

app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


routes(app);

app.listen(port, () => {
    console.log(`\n[Express] Servidor corriendo en el puerto ${port}.`);
  console.log(`[Express] Ingresar a http://localhost:${port}.\n`);
});
