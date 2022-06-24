const path = require('path');
const express = require('express');
const routes = require('./controlers');
const exhbps = require('express-handlebars');
const helpers = require('./utils/helpers')


const app = express();
const PORT = process.env.PORT || 3306;