import { useForm } from 'hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginUser } from 'Redux/auth/authOperation';
import s from './LogimForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { form, handleChange, handleSubmit } = useForm({
    initialsValues: { email: '', password: '' },
    onSubmit: values => dispatch(loginUser(values)),
  });

  const { email, password } = form;

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <label>
          <input
            className={s.input}
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
            className={s.input}
            type="text"
            name="password"
            placeholder="Password"
            required
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.button}>
          OK
        </button>
      </form>
    </>
  );
};
