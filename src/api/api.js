import axios from 'axios';

const savedToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getContactsApi = async () => {
  const response = await axios.get(
    'https://connections-api.herokuapp.com/contacts'
  );
  return response.data;
};

export const addContactsApi = async contact => {
  const response = await axios.post(
    'https://connections-api.herokuapp.com/contacts',
    contact
  );
  return response.data;
};

export const removeContactsApi = async id => {
  await axios.delete(`https://connections-api.herokuapp.com/contacts/${id}`);
  return id;
};

export const registerUserApi = async userData => {
  const response = await axios.post(
    'https://connections-api.herokuapp.com/users/signup',
    {
      ...userData,
    }
  );
  return response.data;
};

export const loginUserApi = async userData => {
  const response = await axios.post(
    'https://connections-api.herokuapp.com/users/login',
    {
      ...userData,
    }
  );
  return response.data;
};

export const getCurUserApi = async token => {
  savedToken.set(token);
  const response = await axios.get(
    'https://connections-api.herokuapp.com/users/current',
    { token }
  );
  return response.data;
};
