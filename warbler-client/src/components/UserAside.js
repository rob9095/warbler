import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/messages';
import { followUser, unFollowUser, fetchFollowers, fetchFollowing } from '../store/actions/followers';
import { fetchUserData } from '../store/actions/users';
import DefaultProfileWidgetBg from '../images/default-user-bg.png';
import DefaultProfileImg from '../images/default-profile-image.jpg';

class UserAside extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render(){
		const { username, currentUser, profileUser, userData, following, followers, isCorrectUser, isFollowing, followUser, unFollowUser, fetchUserData }= this.props;
		const inlineUserWidgetStyles = {
			backgroundImage: `url('${DefaultProfileWidgetBg}')`
		}

		{if(!userData){
			return <div />
		}}
		return(
			<aside className="col-lg-4">
				<div className="user-card mdl-card mdl-shadow--2dp">
				  <div className="mdl-card__title" style={inlineUserWidgetStyles}>
				    <div className="user-image-wrapper">
							<img src={userData.profileImageUrl || DefaultProfileImg}
							 alt={userData.username}
							 className="user-profile-image"
							 height="80px"
						  />
						</div>
				    <div className="user-info">
				      <div className="user-name">{userData.username}</div>
				      <div className="user-username"><a href={`/users/${userData.username}/profile`}>@{userData.username}</a></div>
				    </div>
				  </div>
				  <div className="mdl-card__supporting-text">
				    <div className="user-stat"><div className="stat">{userData.messages.length}</div>Messages</div>
				    <div className="user-stat middle"><div className="stat">{userData.followers.length}</div>Followers</div>
						<div className="user-stat"><div className="stat">{userData.following.length}</div>Following</div>
				  </div>
				  <div className="mdl-card__actions mdl-card--border">
						{!isCorrectUser && (isFollowing ?
							<button
								onClick={ async function(event){ await unFollowUser(); fetchUserData()}}
								id="follow_button"
								className="mdl-button mdl-button--raised	mdl-button--colored mdl-js-button mdl-js-ripple-effect follow-btn"
							>Following <i className="material-icons">done</i>
						</button>
						:
						<button
							onClick={ async function(event){ await followUser(); fetchUserData()}}
							id="follow_button"
							className="mdl-button mdl-button--raised	mdl-button--colored mdl-js-button mdl-js-ripple-effect follow-btn"
							>Follow
						</button>)}
						{isCorrectUser && (
						<div className="mdl-card__user-options">
							<div className="user-option">
								<button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
									<i className="material-icons">settings</i>
								</button>
							</div>
							<div className="user-option">
								<button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
									<i className="material-icons">forum</i>
								</button>
							</div>
							<div className="user-option">
								<button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
									<i className="material-icons">favorite</i>
								</button>
							</div>
							<div className="user-option">
								<button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
									<i className="material-icons">add</i>
								</button>
							</div>
						</div>
						)}

				  </div>
					{/* {isCorrectUser && (
						<div className="mdl-card__menu">
					    <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
					      <i className="material-icons">edit</i>
					    </button>
					  </div>
					)} */}
				</div>
			</aside>
		)
	}

}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    followers: state.followers,
    following: state.following,
	  userData: state.user.userData
  };
}

export default connect(mapStateToProps, { fetchMessages, removeMessage, followUser, unFollowUser, fetchFollowers, fetchFollowing, fetchUserData })(UserAside);
