const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './public')));
app.set("views", path.join(__dirname, "views"));

const indexRouter = require("./routers/mainRouter");

app.use("/", indexRouter);
app.set('view engine', 'ejs')

app.listen(3000, () => {
  console.log('Servidor funcionando');
});
console.log("Error al levantar el servidor");