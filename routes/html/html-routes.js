const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/groceries-list.html'));
});

router.get('/create-list', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/create-list.html'));
});

router.get('/list', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/list.html'));
});

module.exports = router;
