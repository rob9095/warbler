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
				userMessages={props.userMessages}
				currentUser={props.currentUser}
			/>
			<MessageList />
		</div>
	);
};

export default MessageTimeline;
