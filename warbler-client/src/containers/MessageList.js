import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/messages';
import { followUser, unFollowUser, fetchFollowers, fetchFollowing } from '../store/actions/followers';
import { fetchUserData } from '../store/actions/users';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { messages, followers, following, removeMessage, followUser, unFollowUser, currentUser, fetchUserData } = this.props;
    let messageList = messages.map(m => (
      <MessageItem
        key={m._id}
        date={m.createdAt}
        text={m.text}
        username={m.user.username}
        profileImageUrl={m.user.profileImageUrl}
        removeMessage={removeMessage.bind(this, m.user._id, m._id)}
        followUser={followUser.bind(this, m.user._id, currentUser.user.id)}
        fetchUserData={fetchUserData.bind(this, currentUser.user.username)}
		    unFollowUser={unFollowUser.bind(this, m.user._id, currentUser.user.id)}
        isCorrectUser={currentUser.user.id === m.user._id}
        isFollowing={following.includes(m.user._id)}
      />
  ));
  return (
    <div className="col-lg-8 message-container">
      <div className="col-sm-10">
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
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { fetchMessages, removeMessage, followUser, unFollowUser, fetchFollowers, fetchFollowing, fetchUserData })(MessageList);
