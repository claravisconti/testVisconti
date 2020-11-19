const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    root: (req, res) => {
        res.render('index', {
            productos
        });
    }
};

module.exports = controller;