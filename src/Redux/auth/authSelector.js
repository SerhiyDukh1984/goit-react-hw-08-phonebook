export const getIsAuth = state => Boolean(state.auth.token);

export const getMustCurUser = state =>
  state.auth.token && !state.auth.user.email;

export const getMustContacts = state =>
  state.auth.user.email && !state.contacts.items;
