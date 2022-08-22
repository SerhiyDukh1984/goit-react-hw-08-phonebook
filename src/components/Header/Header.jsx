import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from 'Redux/auth/authOperation';
import { getIsAuth } from 'Redux/auth/authSelector';

import s from './Header.module.css';

export const Header = () => {
  const isAuth = useSelector(getIsAuth);
  const dispatch = useDispatch();
  const email = useSelector(state => state.auth.user.email);
  console.log('🚀 ~ email', email);

  return (
    <div className={s.header}>
      <ul className={s.btnList}>
        {isAuth ? (
          <div className={s.nav}>
            <li className={s.email}>{email}</li>
            <li>
              <button
                className={s.button}
                type="button"
                onClick={() => {
                  dispatch(logoutUser());
                }}
              >
                Вихід
              </button>
            </li>
          </div>
        ) : (
          <div className={s.auth}>
            <li>
              <Link to="login">
                <button className={s.button} type="button">
                  Авторизація
                </button>
              </Link>
            </li>
            <li>
              <Link to="auth">
                <button className={s.button} type="button">
                  Реєстрація
                </button>
              </Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};
