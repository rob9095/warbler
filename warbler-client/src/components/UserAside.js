import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DefaultProfileImg from '../images/default-profile-image.jpg';

class UserAside extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: {}
		}
	}

	componentDidMount() {
	}
	
	render(){
		const { profileMessages, profileImageUrl, username, messages, following, followers, userMessages, currentUser, profileUser, userData }= this.props;
		{if(!userData){
			return <div />
		}}
		return(
			<aside className="col-sm-3">
					<div className="user-box">
					  <div className="user">
						<div className="user-image-wrapper">
						  <img src={profileImageUrl || DefaultProfileImg}
							   alt={username}
							   className="user-image"
							   width="200px"
							   height="200px"
						  />
						</div>
						<div className="user-info">
						  <div className="user-name">{userData.username}</div>
						  <div className="user-username"><Link to={`/users/${userData.username}/profile`}>@{userData.username}</Link></div>
						</div>
					  </div>
					  <div className="blocks">
						<div className="user-messages">
						  <span>Messages</span>
								<span className="user-stat">{userData.messages.length}</span>
						</div>
						<div className="user-following">
						  <span>Followers</span>
								<span className="user-stat">{userData.followers.length}</span>
						</div>
						<div className="user-followers">
								<span>Following</span>
								<span className="user-stat">{userData.following.length}</span>
						</div>
					  </div>
					</div>
			  </aside>			
		)
	}
	
}

// const UserAside = ({ profileMessages, profileImageUrl, username, messages, following, followers, userMessages, currentUser, profileUser, userData }) => (
  // <aside className="col-sm-3">
        // <div className="user-box">
          // <div className="user">
            // <div className="user-image-wrapper">
              // <img src={profileImageUrl || DefaultProfileImg}
                   // alt={username}
                   // className="user-image"
                   // width="200px"
                   // height="200px"
              // />
            // </div>
            // <div className="user-info">
              // <div className="user-name">{console.log(userData)}</div>
              // <div className="user-username"><Link to={`/users/${username}/profile`}>@{username}</Link></div>
            // </div>
          // </div>
          // <div className="blocks">
            // <div className="user-messages">
              // <span>Messages</span>
        			// <span className="user-stat">{userMessages.length}</span>
            // </div>
            // <div className="user-following">
              // <span>Followers</span>
        			// <span className="user-stat">{followers.length}</span>
            // </div>
            // <div className="user-followers">
        			// <span>Following</span>
        			// <span className="user-stat">{following.length}</span>
            // </div>
          // </div>
        // </div>
  // </aside>

// );

export default UserAside;
