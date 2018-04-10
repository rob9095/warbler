import React from 'react';
import ProfileMessageList from '../containers/ProfileMessageList'
import UserAside from './UserAside';

const ProfileTimeline = props => {
	return (
		<div className='row'>
			<UserAside
				profileImageUrl={props.profileImageUrl}
				username={props.username}
				messages={props.messages}
				followers={props.followers}
				following={props.following}
				userMessages={props.userMessages}
				currentUser={props.currentUser}
				profileUser={props.profileUser}
				profileMessages={props.profileMessages}
				userData={props.userData}
			/>
			<ProfileMessageList
				profileUser={props.profileUser}
				profileMessages={props.profileMessages}
				userData={props.userData}
			/>
		</div>
	);
};

export default ProfileTimeline;
