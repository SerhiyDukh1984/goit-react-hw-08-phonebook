import { Form } from 'components/Login/Login';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

export const Header = () => {
  return (
    <div className={s.header}>
      <h1 className={s.logo}>Logo</h1>
      <Link to="login">
        <button className={s.button} type="button">
          Log In
        </button>
      </Link>
      <Link to="auth">
        <button className={s.button} type="button">
          Authorization
        </button>
      </Link>
      <Link to="nav">
        <button className={s.button} type="button">
          User Nav
        </button>
      </Link>
      <Link to="menu">
        <button className={s.button} type="button">
          User Menu
        </button>
      </Link>
      <Form />
    </div>
  );
};
