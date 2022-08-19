import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

export const Form = () => {
  const [name, setName] = useState('');
  console.log('🚀 ~ name', name);
  const [email, setEmail] = useState('');
  console.log('🚀 ~ email', email);
  //   const dispatch = useDispatch();
  //   const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'email') {
      setEmail(value);
    }

    const handleSubmit = e => {
      e.preventDefault();

      reset();
    };

    const reset = () => {
      setName('');
      setEmail('');
    };
  };

  return (
    <form>
      <label>
        <input
          type="text"
          name="name"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <button type="submit">OK</button>
    </form>
  );
};
