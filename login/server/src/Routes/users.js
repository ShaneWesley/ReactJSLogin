var express = require('express');

var router = express.Router();

//  Get user data from users database
router.get('/get-user-data', function (req, res) {
    res.send('GET handler for /users route.');
    console.log('user [user_name] data retrieved.');
});

//  Add user data to users database
router.post('/add-user-data', function (req, res) {
    res.send('POST handler for /users route.');
    console.log('user [user_name] data created.');
});

module.exports = router;