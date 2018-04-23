import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileMessageList from '../containers/ProfileMessageList'
import UserAside from './UserAside';

class ProfileTimeline extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}


	render(){
		const { username, currentUser, following, userData, isFollowing, profileMessages }= this.props;
		{if(!userData){
			return <div />
		}}
		return (
			<div className="row top-pad">
				<UserAside
					username={username}
					currentUser={currentUser}
					profileUser={userData.username}
					profileMessages={profileMessages}
					userData={userData}
					isCorrectUser = {currentUser.user.username === userData.username}
					isFollowing = {following.includes(userData.id)}
				/>
				<ProfileMessageList
					profileUser={userData.username}
					profileMessages={profileMessages}
					userData={userData}
					currentUser={currentUser}
				/>
			</div>
		);
	}
};

export default ProfileTimeline;
