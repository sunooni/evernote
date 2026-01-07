import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from '../Layout';
import MainPage from '@/pages/main/ui/MainPage';
import NewNotePage from '@/pages/new-note/ui/NewNotePage';

function Router(): React.JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/new-note" element={<NewNotePage/>}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
