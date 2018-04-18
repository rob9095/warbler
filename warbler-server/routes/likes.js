const express = require('express');
const router = express.Router({mergeParams: true});
const { addLike } = require('../handlers/likes');

// prefixed with /api/users/:id/likes/:message_id
router
	.route('/:message_id')
	.post(addLike);

module.exports = router;
