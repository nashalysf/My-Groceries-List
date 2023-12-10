const { List } = require("../models");

const listController = {
  //methods of list controller to use as callback functions for routes

  //GET all lists | callback for get /api/lists
  getAllLists(req, res) {
    List.find({})
      .then((dbListData) => res.json(dbListData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // GET one list by id
  getListById({ params }, res) {
    //destructure params to get only id
    List.findOne({ _id: params.id })
      .then((dbListData) => {
        //if no list send 404
        if (!dbListData) {
          res.status(404).json({ message: "No list found!" });
          return;
        }
        res.json(dbListData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  //CREATE list | callback for post /api/lists
  createList({ body }, res) {
    List.create(body)
      .then((dbListData) => res.json(dbListData))
      .catch((err) => res.status(400).json(err));
  },

  //UPDATE list by id | callback for put /api/lists/:id
  updateList({ params, body }, res) {
    List.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbListData) => {
        if (!dbListData) {
          res.status(404).json({ message: "No list found!" });
          return;
        }
        res.json(dbListData);
      })
      .catch((err) => res.status(400).json(err));
  },

  //DELETE list by id | callback for delete /api/lists/:id
  deleteList({ params }, res) {
    List.findOneAndDelete({ _id: params.id })
      .then((dbListData) => {
        if (!dbListData) {
          res.status(404).json({ message: "No list found!" });
          return;
        }
        res.json(dbListData);
      })
      .catch((err) => res.status(400).json(err));
  },
};
module.exports = listController;
