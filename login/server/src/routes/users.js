var express = require('express');
var router = express.Router();

//  CRUD
router.get('/', (req, res) => {
    res.send({ message: 'User Retrieved' });
})

router.post('/', (req, res) => {
    res.send({ message: 'User Created' });
})

router.put('/', (req, res) => {
    res.send({ message: 'User Updated' });
})

router.delete('/', (req, res) => {
    res.send({ message: 'User Deleted' });
})

module.exports = router;