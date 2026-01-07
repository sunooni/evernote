import NavBar from '@/widgets/navbar/ui/NavBar';
import React from 'react';
import { Outlet } from 'react-router';

export default function Layout(): React.JSX.Element {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}