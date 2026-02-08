// Solo cargar dotenv en local
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("scr/publico"));

const auth = require("./modulos/auth/rutas");
const productos = require("./modulos/productos/rutas");
const usuarios = require("./modulos/usuarios/rutas");
const ventas = require("./modulos/ventas/rutas");

// Rutas principales
app.use("/", auth);
app.use("/productos", productos);
app.use("/usuarios", usuarios);
app.use("/ventas", ventas);

// Ruta raíz para Render (salud del servicio)
app.get("/", (req, res) => {
  res.send("Servidor funcionando en Render 🚀");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
