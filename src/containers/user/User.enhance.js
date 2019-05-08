import {
  compose,
  lifecycle,
  withHandlers,
  setDisplayName,
  withStateHandlers,
} from 'recompose';
import { connect } from 'react-redux';
import { stateHandlers, handlers } from './User.handlers';

const enhanceLifecycle = lifecycle({
  async componentDidMount() {
    this.props.showMessage();
  },
});

export const initialState = {
  feeds: [],
  showMessage: false,
  message: 'Cấm hiếp dâm',
};

const mapStateToProps = state => ({
  theme: state.app.theme,
  avatar: state.user.avatar,
  name: state.user.name,
});

export default compose(
  setDisplayName('User'),
  connect(mapStateToProps),
  withStateHandlers(initialState, stateHandlers),
  withHandlers(handlers),
  enhanceLifecycle,
);
