import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/messages';
import { followUser, unFollowUser, fetchFollowers, fetchFollowing } from '../store/actions/followers';
import { fetchUserData } from '../store/actions/users';
import MessageItem from '../components/MessageItem';

class ProfileMessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
  const { messages, followers, following, removeMessage, followUser, unFollowUser, currentUser, profileMessages, profileUser, userData, fetchUserData } = this.props;
	let messageList = profileMessages.map(m => (
      <MessageItem
        key={m._id}
        messageKey = {m._id}
        date={m.createdAt}
        text={m.text}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        followUser={followUser.bind(this, m.user._id, currentUser.user.id)}
		    fetchUserData={fetchUserData.bind(this, profileUser)}
		    unFollowUser={unFollowUser.bind(this, m.user._id, currentUser.user.id)}
        isCorrectUser={currentUser.user.id === m.user._id}
        isFollowing={following.includes(m.user._id)}
      />
  ));
  return (
    <div className="message-container">
      <div className="mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet">
        <ul className="list-group" id="messages">
          {messageList}
        </ul>
      </div>
    </div>
  );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    followers: state.followers,
    following: state.following,
	  userData: state.userData
  };
}

export default connect(mapStateToProps, { fetchMessages, removeMessage, followUser, unFollowUser, fetchFollowers, fetchFollowing, fetchUserData })(ProfileMessageList);
