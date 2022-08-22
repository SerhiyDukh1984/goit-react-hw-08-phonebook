import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Section from '../Section/Section';
import { Header } from 'components/Header/Header';
import { RegisterPage } from 'Pages/RegisterPage';
import { LoginPage } from 'Pages/LoginPage';
import { ContactsPage } from 'Pages/ContactsPage';
import { getIsAuth, getMustCurUser } from 'Redux/auth/authSelector';
import { getCurUser } from 'Redux/auth/authOperation';

const PrivateRoute = ({ component: Component }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth ? <Component /> : <Navigate to="/login" />;
};

const PublicRoute = ({ restricted, component: Component }) => {
  const isAuth = useSelector(getIsAuth);

  return isAuth && restricted ? <Navigate to="/contacts" /> : <Component />;
};

const App = () => {
  console.log('app');
  const dispatch = useDispatch();
  const mustCurUser = useSelector(getMustCurUser);

  useEffect(() => {
    mustCurUser && dispatch(getCurUser());
  }, [dispatch, mustCurUser]);

  return (
    <Section>
      <Header />
      <Routes>
        <Route
          path="contacts"
          element={<PrivateRoute component={ContactsPage} />}
        />
        <Route
          path="login"
          element={<PublicRoute component={LoginPage} restricted />}
        />
        <Route
          path="auth"
          element={<PublicRoute component={RegisterPage} restricted />}
        />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </Section>
  );
};

export default App;
