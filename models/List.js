// Schema: mongoose constructor
// Model: mongoose model method
const {Schema, model} = require('mongoose');

/* data to be stored when user creates list:
- name of list
- list items
*/

const ListSchema = new Schema({
    listName: {
        type: String,
    },
    listItems: {
        type: Array,
    },
});

//create List model using ListSchema
const List = model('List', ListSchema);
//export List model
module.exports = List;
