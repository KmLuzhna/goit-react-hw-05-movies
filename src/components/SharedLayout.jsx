import { Outlet } from "react-router-dom";
import React, { Suspense } from 'react';
import { Container, Header,  Link } from "./SharedLayout.styled";

export default function SharedLayout () {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};