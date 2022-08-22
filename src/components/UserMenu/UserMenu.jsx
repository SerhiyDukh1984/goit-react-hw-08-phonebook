import { useDispatch } from 'react-redux';
import { logoutUser } from 'Redux/auth/authOperation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  return (
    <ul>
      <li>email</li>
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
    </ul>
  );
};
