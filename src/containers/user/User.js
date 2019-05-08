import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Feed from '../../components/feed';
import Profile from '../../components/profile';
import { setUser } from '../../store/user';

class User extends React.PureComponent {
  state = {
    show: false,
    feeds: [{ comment: 'comment1' }, { comment: 'comment2' }],
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 2000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  changeAvatar = () => {
    this.props.setUser({
      name: 'Boss',
      avatar:
        'https://www.chotot.com/kinhnghiem/wp-content/uploads/2018/09/cho-husky3.jpg',
    });
  };

  render() {
    const { feeds, show } = this.state;
    const { theme, avatar, name } = this.props;

    return (
      <div className={theme}>
        {show && 'show'}
        <button onClick={this.changeAvatar}>Change Avatar</button>
        <Profile avatar={avatar} name={name} />
        {feeds.map(({ comment }) => (
          <Feed key={comment} avatar={avatar} name={name} comment={comment} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  theme: state.app.theme,
  avatar: state.user.avatar,
  name: state.user.name,
});

const mapDispatchToProps = {
  setUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);

User.propTypes = {
  theme: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  setUser: PropTypes.func.isRequired,
};
