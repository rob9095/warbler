import React from 'react';
import MessageList from '../containers/MessageList'
import UserAside from './UserAside';

const MessageTimeline = props => {
	return (
		<div className='row'>
			<UserAside
				profileImageUrl={props.profileImageUrl}
				username={props.username}
				messages={props.messages}
				followers={props.followers}
				following={props.following}
				currentUser={props.currentUser}
				profileUser={props.profileUser}
				profileMessages={props.profileMessages}
				userData={props.userData}
			/>
			<MessageList
				currentUser={props.currentUser}
				userData={props.userData}
				 />
		</div>
	);
};

export default MessageTimeline;
