import React from 'react';
import PropTypes from 'prop-types';
import './Feed.css';

const Feed = ({ avatar, name, comment }) => (
  <div className="feed">
    <p className="name">{name}</p>
    <img className="avatar" src={avatar} alt="avatar" />
    <p className="comment">{comment}</p>
  </div>
);

Feed.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  comment: PropTypes.string,
};

Feed.defaultProps = {
  avatar: '',
  name: '',
  comment: '',
};

export default Feed;
