import { useState } from 'react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  console.log('🚀 ~ email', email);
  const [password, setPassword] = useState('');
  //   const dispatch = useDispatch();
  //   const contacts = useSelector(state => state.contacts.items);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    }
    if (name === 'password') {
      setPassword(value);
    }

    const handleSubmit = e => {
      e.preventDefault();

      reset();
    };

    const reset = () => {
      setEmail('');
      setPassword('');
    };
  };

  return (
    <form>
      <label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleChange}
        />
      </label>

      <label>
        <input
          type="text"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">OK</button>
    </form>
  );
};
