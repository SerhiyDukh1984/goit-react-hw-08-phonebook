import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from 'Redux/auth/authOperation';
import { getIsAuth } from 'Redux/auth/authSelector';

import s from './Header.module.css';

export const Header = () => {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);

  return (
    <div className={s.header}>
      <ul className={s.btnList}>
        {isAuth ? (
          <>
            {/* <li>
              <Link to="nav">
                <button className={s.button} type="button">
                  User Nav
                </button>
              </Link>
            </li> */}
            {/* <li>
              <Link to="menu">
                <button className={s.button} type="button">
                  User Menu
                </button>
              </Link>
            </li> */}
            <li>
              <Link to="contacts">
                <button className={s.button} type="button">
                  Contacts
                </button>
              </Link>
            </li>
            <li>{email}</li>
            <li>
              <button
                className={s.button}
                type="button"
                onClick={() => {
                  dispatch(logoutUser());
                }}
              >
                Log out
              </button>
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
