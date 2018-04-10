import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../store/actions/messages';
import { fetchUserData } from '../store/actions/users';
import { fetchFollowers, fetchFollowing } from '../store/actions/followers';
import { Link } from 'react-router-dom';
import ProfileTimeLine from './ProfileTimeline';


class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	componentDidMount() {
		this.props.fetchMessages();
		this.props.fetchUserData(this.props.match.params.username);
		// replace with one call to get all user data for current user
		// getUserData to backend function getUser		
		this.props.fetchFollowers(this.props.currentUser.user.id);
		this.props.fetchFollowing(this.props.currentUser.user.id);
	}

	render(){
		const { messages, followers, following, currentUser, user } = this.props;
		let profileMessages = messages.filter(m => (m.user.username === this.props.match.params.username))
		let followingMessages = [];
		messages.forEach(function(m){
			if (following.includes(m.user._id)){
				followingMessages.push(m)
			}
		});
		let userMessages = messages.filter(m => (m.user._id === currentUser.user.id))
		if (this.props.match.params.username === currentUser.user.username) {
			profileMessages = followingMessages.concat(profileMessages)
			profileMessages.sort(function(a, b){return a.createdAt < b.createdAt});
			}
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
      <ProfileTimeLine
			currentUser={currentUser}
			username={currentUser.user.username}
			profileImageUrl={currentUser.user.profileImageUrl}
			userMessages={userMessages}
			followers={followers}
			following={following}
			profileMessages={profileMessages}
			profileUser={this.props.match.params.username}
			userData={user}			
			/>
		);
	}

}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    followers: state.followers,
    following: state.following,
	user: state.user.userData
  };
}

export default connect(mapStateToProps, { fetchUserData, fetchMessages, fetchFollowers, fetchFollowing })(UserProfile);
