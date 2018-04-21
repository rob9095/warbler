import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteComment } from '../store/actions/comments';
import Moment from 'react-moment';
import DefaultProfileImg from '../images/default-profile-image.jpg';
import MessageDeleteButton from '../containers/MessageDeleteButton';

class CommentItem extends Component {
  constructor(props){
    super(props);
    this.state={};
  }


  render(){
    const { commentId, date, text, username, profileImageUrl, isCorrectUser } = this.props;
    return(
        <li>
          <span className="comment-item">
            <Link to={`/users/${username}/profile`}>
    					<span className="user-image">
                <img className="mdl-chip__contact" src={profileImageUrl || DefaultProfileImg} alt={username} />
              </span>
            </Link>
            <span className="username">
              @{username}:
            </span>
            <span className="comment-text">
              {text}
            </span>
          </span>
          {isCorrectUser && (
            <span class="comment-delete">
              <i class="material-icons">cancel</i>
            </span>
          )}
        </li>
    )
  }

}

export default CommentItem;
