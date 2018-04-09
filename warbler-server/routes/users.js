const express = require('express');
const router = express.Router({mergeParams: true});

const { getUser, getUserMessages } = require('../handlers/users');

// prefixed with /api/user/:username
router.route('/').get(getUser);

// prefixed with /api/user/:username/user_messages -> maybe this should go into messages?
router.route('/user_messages').get(getUserMessages);


module.exports = router;
