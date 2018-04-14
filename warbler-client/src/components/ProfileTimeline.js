import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileMessageList from '../containers/ProfileMessageList'
import { followUser, unFollowUser } from '../store/actions/followers';
import { fetchUserData } from '../store/actions/users';
import UserAside from './UserAside';

class ProfileTimeline extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render(){
		const { username, currentUser, profileUser, userData, following, followers, isCorrectUser, isFollowing, profileMessages, followUser, unFollowUser, fetchUserData }= this.props;
		{if(!userData){
			return <div />
		}}
		return (
			<div className='row'>
				<UserAside
					username={username}
					followers={followers}
					following={following}
					currentUser={currentUser}
					profileUser={profileUser}
					profileMessages={profileMessages}
					userData={userData}
					isCorrectUser = {currentUser.user.username === profileUser}
					isFollowing = {following.includes(userData.id)}
					followUser={followUser.bind(this, userData.id, currentUser.user.id)}
					unFollowUser={unFollowUser.bind(this, userData.id, currentUser.user.id)}
					fetchUserData={fetchUserData.bind(this,userData.username)}
				/>
				<ProfileMessageList
					profileUser={profileUser}
					profileMessages={profileMessages}
					userData={userData}
					currentUser={currentUser}
				/>
			</div>
		);
	}
};

function mapStateToProps(state) {
  return {
    messages: state.messages,
    followers: state.followers,
    following: state.following,
    currentUser: state.currentUser,
		user: state.user.userData
  };
}

export default connect(mapStateToProps, {followUser, unFollowUser, fetchUserData})(ProfileTimeline);
