// Solo cargar dotenv en local
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();

app.use(express.json());

// Solo sirve estáticos si la carpeta existe
const path = require("path");
const publicoPath = path.join(__dirname, "publico");
app.use(express.static(publicoPath));

// Importar módulos
const auth = require("./modulos/auth/rutas");
const productos = require("./modulos/productos/rutas");
const usuarios = require("./modulos/usuarios/rutas");
const ventas = require("./modulos/ventas/rutas");

// Importar conexión a DB
const pool = require("./bd/mysql");

// Rutas principales
app.use("/auth", auth);
app.use("/productos", productos);
app.use("/usuarios", usuarios);
app.use("/ventas", ventas);

// Ruta raíz para Render (salud del servicio)
app.get("/", (req, res) => {
  res.send("Servidor funcionando en Render 🚀");
});

// Endpoint de prueba para DB
app.get("/pingdb", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT 1");
    res.send("Conexión a DB OK 🚀");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error de conexión a DB ❌");
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

