var express = require('express');
var router = express.Router();

const { v4: uuidv4 } = require('uuid');

var fs = require('fs');
var database = fs.readFileSync('./src/db.json');

class User {
    constructor(firstName, lastName, email,
        password, contactNumber) {
        this.id = uuidv4();
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.contactNumber = contactNumber;
    }
}

//  CRUD
router.get('/all', (req, res) => {
    res.send(getAllUsers());
    console.log('All Users');
})

router.get('/:email', (req, res) => {
    var user = getUser(req.params.email);
    res.send(user);
    console.log(user.email);
})

router.post('/create-user', (req, res) => {
    //  ERROR needs fixing
    console.log('User Created');
})

router.put('/', (req, res) => {
    res.send({ message: 'User Updated' });
})

router.delete('/', (req, res) => {
    res.send({ message: 'User Deleted' });
})

function getAllUsers() {
    var users = JSON.parse(database);
    console.log(users);

    return users;
}

function getUser(email) {
    var usersObject = JSON.parse(database).users;

    var result = '';
    for (var user in usersObject) {
        if (usersObject[user].email === email) {
            result = usersObject[user];
        }
    }

    return result;
}

module.exports = router;