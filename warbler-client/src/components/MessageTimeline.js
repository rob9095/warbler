import React from 'react';
import { connect } from 'react-redux';
import { followUser, unFollowUser } from '../store/actions/followers';
import { fetchUserData } from '../store/actions/users';
import MessageList from '../containers/MessageList'
import UserAside from './UserAside';

const MessageTimeline = props => {
	return (
		<div className='row top-pad'>
			<UserAside
				profileImageUrl={props.profileImageUrl}
				username={props.username}
				messages={props.messages}
				followers={props.followers}
				following={props.following}
				currentUser={props.currentUser}
				userData={props.userData}
				isCorrectUser = {true}
				isFollowing = {false}
			/>
			<MessageList
				currentUser={props.currentUser}
				userData={props.userData}
				 />
		</div>
	);
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    followers: state.followers,
    following: state.following,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, {followUser, unFollowUser, fetchUserData})(MessageTimeline);
