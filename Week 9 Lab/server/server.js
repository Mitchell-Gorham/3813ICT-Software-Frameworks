const add = require ("../operations/add");
const read = require ("../operations/read");
const update = require ("../operations/update");
const remove = require ("../operations/remove");

const docArray = [
    { id: 1, name: "Shoe 1", desc: "Running Shoes", price: 20.00, units:35 },
    { id: 2, name: "Shoe 2", desc: "Sport Shoes", price: 33.00, units:22 },
    { id: 3, name: "Shoe 3", desc: "Fashion Shoes", price: 41.00, units:17 }
];
const queryJSONf = {};
const queryJSONup = { id: 1 };
const updateJSON = { id: 4 };
const queryJSONdel = { id: 3 };

module.exports = function(client, col) {
    add.insertDocuments(col, docArray, () => {
        update.updateDocument(col, queryJSONup, updateJSON, () => {
            remove.removeDocument(col, queryJSONdel, () => {
                read.findDocument(col, queryJSONf, () => {
                    client.close();
                });
            });
        });
    });
};