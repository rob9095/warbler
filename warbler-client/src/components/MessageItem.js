import React, { Component } from 'react';
import Moment from 'react-moment';
import DefaultProfileImg from '../images/default-profile-image.jpg';

class MessageItem extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    const {isFollowing, date, profileImageUrl, text, username, removeMessage, followUser, unFollowUser, isCorrectUser, fetchUserData, currentUser } = this.props;
    return(
      <div>
        <li className="list-group-item">
          <img src={profileImageUrl || DefaultProfileImg} alt={username} height="100" width="100" className="timeline-image" />
          <div className="message-area">
            <a href={`/users/${username}/profile`}>@{username}</a>&nbsp;
            <span className="text-muted">
              <Moment className='text-muted' format='Do MMM YYYY'>
                {date}
              </Moment>
            </span>
            <p>{text}</p>
        <div className="">
          {isCorrectUser && (<a className="btn btn-danger" onClick={removeMessage}>Delete</a>)}
          {!isCorrectUser && (isFollowing ? <a className="btn btn-success" onClick={async function(event){ await unFollowUser(); fetchUserData()}}>Un-Follow</a> : <a className="btn btn-success" onClick={async function(event){ await followUser(); fetchUserData()}}>Follow</a>)}
        </div>
        </div>
        </li>
      </div>
    )
  }


}

export default MessageItem;
