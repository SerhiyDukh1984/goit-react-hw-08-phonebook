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

// https://connections-api.herokuapp.com/authorization
export const registerUserApi = async userData => {
  console.log(userData);
  await axios
    .post('https://connections-api.herokuapp.com/users/signup', {
      ...userData,
    })
    .then(({ data }) => {
      console.log('🚀 ~ data', data);
      const { ...postedUserData } = data;
      console.log('🚀 ~ postedUserData', postedUserData);
      return postedUserData;
    });
};
