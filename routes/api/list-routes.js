const router = require('express').Router();

const {
    getAllLists,
    getListById,
    createList,
    updateList,
    deleteList
} = require('../../controllers/list-controller');

//Set up Get all and create at api/lists
router.route('/').get(getAllLists).post(createList);

//Set up Grt one, update, and delete at api/lists/:id
router.route('/:id').get(getListById).put(updateList).delete(deleteList);

module.exports = router;