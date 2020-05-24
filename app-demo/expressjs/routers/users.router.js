const express = require('express');
const router = express.Router();
const shortId = require('shortid');

router.get('/create', (req, res) => {
    res.render('users/create');
})
router.post('/create', (req, res) => {
    let newUser = req.body;
    let id = shortId.generate();
    newUser.id = id;
    db.get('users').push(newUser).write();
    res.redirect('/users');
})
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.render('users/view', { user: db.get('users').find({ id: id }).value() });
})
router.get('/search', (req, res) => {
    var q = req.query.q;
    res.render('users/index', { users: db.get('users').value().filter(item => item.name.toLowerCase().indexOf(q.toLowerCase()) !== -1) })
})
router.get('/', (req, res) => {
    res.render('users/index', {
        users: db.get('users').value()
    });
})
module.exports = router;