import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import DefaultProfileImg from '../images/default-profile-image.jpg';

class MessageItem extends Component {
  constructor(props){
    super(props);
    this.state={};

    this.handleLike = this.handleLike.bind(this);
  }

  handleLike(e) {
    console.log('you liked msg id '+ this.props.messageKey)
  }


  render(){
    const { messageKey, isFollowing, date, profileImageUrl, text, username, removeMessage, followUser, unFollowUser, isCorrectUser, fetchUserData, currentUser } = this.props;
    return(
      <div>
        <li className="mdl-shadow--2dp message-item">
          <div className="message-area">
            <Link to={`/users/${username}/profile`}>
              <span className="mdl-chip mdl-chip--contact">
                <img className="mdl-chip__contact" src={profileImageUrl || DefaultProfileImg} alt={username}></img>
                <span className="mdl-chip__text">@{username}</span>
              </span>
            </Link>
            <span className="text-muted">
              <Moment className='text-muted' format='Do MMM YYYY'>
                {date}
              </Moment>
            </span>
            <span className="message-text">
              {text}
            </span>
            {!isCorrectUser && (
              <div className="mdl-card__actions mdl-card--border message-options">
                <div className="message-option">
                  <button onClick={this.handleLike} className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i className="material-icons">favorite</i>
                  </button>
                </div>
              <div className="message-option">
                <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                  <i className="material-icons">textsms</i>
                </button>
              </div>
            </div>
            )}
            {isCorrectUser && (
              <div className="mdl-card__actions mdl-card--border message-options current-user">
                <div className="message-option">
                  <button onClick={removeMessage} className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i className="material-icons delete-message">delete</i>
                  </button>
                </div>
              </div>
            )}
          </div>
        </li>
      </div>
    )
  }

}

// <div>
//   <li className="list-group-item">
//     <img src={profileImageUrl || DefaultProfileImg} alt={username} height="100" width="100" className="timeline-image" />
//     <div className="message-area">
//       <Link to={`/users/${username}/profile`}>@{username}</Link>&nbsp;
//       <span className="text-muted">
//         <Moment className='text-muted' format='Do MMM YYYY'>
//           {date}
//         </Moment>
//       </span>
//       <p>{text}</p>
//       <div className="">
//         {isCorrectUser && (<a className="btn btn-danger" onClick={removeMessage}>Delete</a>)}
//         {!isCorrectUser && (isFollowing ?
//           <a className="btn btn-success" onClick={async function(event){ await unFollowUser(); fetchUserData()}}>Un-Follow</a>
//           :
//           <a className="btn btn-success" onClick={async function(event){ await followUser(); fetchUserData()}}>Follow</a>)
//         }
//       </div>
//     </div>
//   </li>
// </div>


export default MessageItem;
