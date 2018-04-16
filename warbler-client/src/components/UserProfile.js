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
		this.state = {
			isLoading: true
		}
	}

	async componentWillReceiveProps(newProps){
		if (newProps.match.params.username != this.props.match.params.username){
			await this.props.fetchUserData(newProps.match.params.username);
			this.setState({
				isLoading: false
			})
		}
	}

	async componentDidMount() {
		await this.props.fetchMessages();
		await this.props.fetchUserData(this.props.match.params.username);
		// replace with one call to get all user data for current user
		// getUserData to backend function getUser
		await this.props.fetchFollowers(this.props.currentUser.user.id);
		await this.props.fetchFollowing(this.props.currentUser.user.id);
		this.setState({
			isLoading: false
		})
	}

	render(){

		const { messages, followers, following, currentUser, user } = this.props;

		// create messages to display if current user is viewing another users profile
		let profileMessages = messages.filter(m => (m.user.username === this.props.match.params.username))

		// if user if viewing their own profile
		if (this.props.match.params.username === currentUser.user.username) {

			// create messages array with currentUsers followings messages
			let followingMessages = [];
			messages.forEach(function(m){
				if (following.includes(m.user._id)){
					followingMessages.push(m)
				}
			});

			// create message array with currentUsers messages
			let userMessages = messages.filter(m => (m.user._id === currentUser.user.id))

			// combine and sort arrays and assign to profileMessages
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
		if(this.state.isLoading) {
			return (
				<div className="loading-container">
					<div className="spinner">
						<div className="right-side">
							<div className="bar"></div>
						</div>
						<div className="left-side">
							<div className="bar"></div>
						</div>
					</div>
				</div>
			)
		}
		return (
      <ProfileTimeLine
			currentUser={currentUser}
			username={currentUser.user.username}
			followers={followers}
			following={following}
			profileImageUrl={currentUser.user.profileImageUrl}
			profileMessages={profileMessages}
			profileUser={this.props.match.params.username}
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

export default connect(mapStateToProps, { fetchUserData, fetchMessages, fetchFollowers, fetchFollowing })(UserProfile);
