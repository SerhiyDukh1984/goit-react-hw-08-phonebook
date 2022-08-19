import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIsAuth } from 'Redux/auth/authSelector';
import { authToggle } from 'Redux/auth/authSlice';
import s from './Header.module.css';

export const Header = () => {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();

  return (
    <div className={s.header}>
      <h1 className={s.logo}>Logo</h1>
      <button
        onClick={() => {
          dispatch(authToggle());
        }}
      >
        toggle
      </button>
      <ul>
        <li>
          <Link to="/">
            <button className={s.button} type="button">
              Home
            </button>
          </Link>
        </li>
        {isAuth ? (
          <>
            <li>
              <Link to="nav">
                <button className={s.button} type="button">
                  User Nav
                </button>
              </Link>
            </li>
            <li>
              <Link to="menu">
                <button className={s.button} type="button">
                  User Menu
                </button>
              </Link>
            </li>
            <li>
              <Link to="contacts">
                <button className={s.button} type="button">
                  Contacts
                </button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="login">
                <button className={s.button} type="button">
                  Log In
                </button>
              </Link>
            </li>
            <li>
              <Link to="auth">
                <button className={s.button} type="button">
                  Authorization
                </button>
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
