import { Route, Routes, Navigate } from 'react-router-dom';

import Section from '../Section/Section';

import { Header } from 'components/Header/Header';
import { ContactsPage } from 'Pages/ContactsPage';

const App = () => {
  return (
    <>
      <Section>
        {/* {!contacts && <Header />} */}
        <Routes>
          <Route path="/" element={<Header />} />

          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
        {/* <h1 className={s.title}>Телефонна книга</h1>
        <div className={s.container}>
          <ContactForm />
          <div className={s.item}>
            <h2 className={s.contacts}>Контакти ({contacts})</h2>
            <Filter />
            <ContactsList />
          </div>
        </div>
        <h2 className={s.text}>русский военный корабль, иди НАХ*Й</h2> */}
      </Section>
    </>
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
