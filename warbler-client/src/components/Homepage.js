import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessageTimeLine from './MessageTimeline';
import { fetchMessages } from '../store/actions/messages';
import { fetchUserData } from '../store/actions/users';
import { fetchFollowers, fetchFollowing } from '../store/actions/followers';
import {  Link } from 'react-router-dom';


class Homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		this.props.fetchMessages();
		this.props.fetchUserData(this.props.currentUser.user.username);
		// replace with one call to get all user data for current user
		// getUserData to backend function getUser
		this.props.fetchFollowers(this.props.currentUser.user.id);
		this.props.fetchFollowing(this.props.currentUser.user.id);
	}

	render(){
		const { messages, followers, following, currentUser, user } = this.props;
		if(!currentUser.isAuthenticated){
			return (
				<div className="home-hero">
					<h1>What's Happening</h1>
					<h4>New to Warbler?</h4>
					<Link to="/signup" className="btn btn-primary">
						Sign up here
					</Link>
				</div>
			);
		}
		return (
			<MessageTimeLine
					currentUser={currentUser}
					profileImageUrl={currentUser.user.profileImageUrl}
					username={currentUser.user.username}
					messages={messages}
					followers={followers}
					following={following}
					userData={user}
			/>
		);
	}

}

function mapStateToProps(state) {
  return {
		currentUser: state.currentUser,
    messages: state.messages,
    followers: state.followers,
    following: state.following,
		user: state.user.userData
  };
}

export default connect(mapStateToProps, { fetchUserData, fetchMessages, fetchFollowers, fetchFollowing })(Homepage);
