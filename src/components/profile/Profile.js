import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ avatar, name }) => (
  <div className="profile">
    <p className="name">{name}</p>
    <img className="avatar" src={avatar} alt="avatar" />
  </div>
);

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
};

Profile.defaultProps = {
  avatar: '',
  name: '',
};

export default Profile;
