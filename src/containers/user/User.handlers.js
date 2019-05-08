const stateHandlers = {
  showMessage: () => () => ({ showMessage: true }),
  hideMessage: () => () => ({ showMessage: false }),
};

const handlers = {
  showMessage: ({ showMessage }) => () => showMessage,
  hideMessage: ({ hideMessage }) => () => hideMessage,

  changeAvatar: ({ setUser }) => avatar => setUser({ avatar }),
};

export { stateHandlers, handlers };
