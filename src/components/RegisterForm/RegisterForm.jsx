import { useForm } from 'hooks/useForm';
import { useDispatch } from 'react-redux';
import { registerUser } from 'Redux/auth/authOperation';
import s from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const { form, handleChange, handleSubmit } = useForm({
    initialsValues: { name: '', email: '', password: '' },
    onSubmit: values => dispatch(registerUser(values)),
  });

  const { name, email, password } = form;

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.label}>
          <label>
            <input
              className={s.input}
              type="text"
              name="name"
              placeholder="Name"
              required
              value={name}
              onChange={handleChange}
            />
          </label>

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
        </div>
        <button type="submit" className={s.button}>
          OK
        </button>
      </form>
    </>
  );
};
