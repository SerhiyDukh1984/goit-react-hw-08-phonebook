import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Section from '../Section/Section';
import { Header } from 'components/Header/Header';
import { RegisterPage } from 'Pages/RegisterPage';
import { LoginPage } from 'Pages/LoginPage';
import { ContactsPage } from 'Pages/ContactsPage';
import { HomePage } from 'Pages/HomePage';
import { getIsAuth } from 'Redux/auth/authSelector';

const App = () => {
  const isAuth = useSelector(getIsAuth);

  return (
    <Section>
      <Header />
      {isAuth ? (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="auth" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="login" />} />
        </Routes>
      )}
    </Section>
  );
};

export default App;

// import { React, lazy, Suspense } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// const Container = lazy(() => import('./Container/Container'));
// const Navigation = lazy(() => import('./Navigation/Navigation'));
// const Home = lazy(() => import('../pages/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetails = lazy(() => import('../pages/MovieDetails'));

// export default function App() {
//   return (
//     <Container>
//       <Navigation />
//       <Suspense fallback={<h2>Loading...</h2>}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/movies/:movieId/*" element={<MovieDetails />} />
//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>
//       </Suspense>
//     </Container>
//   );
// }