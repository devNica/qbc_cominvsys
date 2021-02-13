/* eslint-disable prettier/prettier */
const express = require("express");
const bodyparser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 4200;

//CONFIGURATION ENGINE TEMPLATES
const hbs = exphbs.create({
  defaultLayout: "base",
  layoutsDir: path.join(__dirname, "views/layouts"),
  partialsDir: path.join(__dirname, "views/partials"),
  extname: "hbs",
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },

  /*create custom helpers*/
  helpers: {
    escogerMarca: function (value) {
      var selected = this.IDMARCA === value ? 'selected="selected"' : '';
      return '<option value="' + this.IDMARCA + '" ' + selected + '>' + this.MARCA + '</option>';
    },

    escogerEquipo: function (value) {
      var selected = this.IDCATALOGOEQP === value ? 'selected="selected"' : '';
      return '<option value="' + this.IDCATALOGOEQP + '" ' + selected + '>' + this.TIPOEQP + '</option>';
    },
  },
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "/public")));

/**MIDDLEWARES*/
app.use(bodyparser.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/index", (req, res) => {
  res.render("templates/index");
});

//ROUTERS
app.use("/modelo", require("./routes/modelo"));

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
