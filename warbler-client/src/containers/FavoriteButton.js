import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
  like: {
    color: '',
    transition: theme.transitions.create('color', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  isLiked: {
    color: '#EC407A'
  }
});

class FavoriteButton extends Component {
  state = {
    liked: false
   };

  handleLikeClick = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
            <IconButton
              className={classnames(classes.like, {
                [classes.isLiked]: this.state.liked,
              })}
              onClick={this.handleLikeClick}
            >
            {this.state.liked ?  <FavoriteIcon />  : <FavoriteBorderIcon /> }
            </IconButton>
      </div>
    );
  }
}

FavoriteButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FavoriteButton);
