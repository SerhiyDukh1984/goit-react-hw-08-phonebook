import axios from 'axios';

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
  await axios
    .post('https://connections-api.herokuapp.com/users/signup', {
      ...userData,
    })
    .then(({ data }) => {
      return data;
    });
};

export const loginUserApi = async userData => {
  await axios
    .post('https://connections-api.herokuapp.com/users/login', {
      ...userData,
    })
    .then(({ data }) => {
      return data;
    });
};
