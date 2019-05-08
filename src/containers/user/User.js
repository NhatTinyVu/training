import React from 'react';
import PropTypes from 'prop-types';
import Feed from '../../components/feed';
import Profile from '../../components/profile';

const User = ({ theme, avatar, name, feeds }) => (
  <div className={theme}>
    <Profile avatar={avatar} name={name} />
    {feeds.map(feed => (
      <Feed key={feed.id} />
    ))}
  </div>
);

User.propTypes = {
  theme: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  feeds: PropTypes.array.isRequired,
};

export default User;
