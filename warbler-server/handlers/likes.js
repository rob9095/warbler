const db = require('../models');
// to like...
// update user that liked message, add messageId into their likes array
// update user whose message was liked, add userId/messageId into their liked array
// update message that got liked, add user ID who liked to likes array

// to unlike...
// update user that liked message, remove messageId from their likes arrays
// update user whose message was liked, remove userId/messageId from their liked arrays
// update message that got unliked, remove the user ID from the likes arrays

// POST - /api/users/:id/likes/:message_id
exports.addLike = async function(req, res, next) {
	try {
		// the user being followed
		let foundUserLiking = await db.User.findById(req.params.id);
		// the current user requesting to follow
		let foundMessageLiked = await db.Message.findById(req.params.message_id);
		// make sure the user and message exist
		if (foundUserLiking === null || foundMessageLiked === null) {
			return next({
				status: 400,
				message: 'User/Message not found!'
			});
		}
    // the user with a message that was liked
		let foundUserLiked = await db.User.findById(foundMessageLiked.user);

    // prevent liking the same message twice
    const alreadyLiked = foundMessageLiked.likes.includes('5ac67fc6c97d3d39589e46aa');
    if (alreadyLiked) {
      return next({
				status: 400,
				message: 'Message already liked'
			});
    }
		// push messageId into the likedMessages array for the user that liked message
			foundUserLiking.likedMessages.push(foundMessageLiked._id);
		// push messageId into the messagesLiked array for the user with the liked message
			foundUserLiked.messagesLiked.push(foundMessageLiked._id);
    // push the userLiking userID into the likes array on the message that was likedMessages
      foundMessageLiked.likes.push(foundUserLiking._id);
			await foundUserLiking.save();
			await foundUserLiked.save();
			await foundMessageLiked.save();
		  return res.status(200).json({foundMessageLiked});
	} catch(err) {
		if(err.code === 11000) {
			err.message = 'Message already liked';
		}
		return next(err);
	}
};
