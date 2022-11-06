import { Outlet } from "react-router-dom";
import React, { Suspense } from 'react';
import { Container, Header, Logo, Link } from "./SharedLayout.styled";

export default function SharedLayout () {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
          GoMerch Store
        </Logo>
        <nav>
          <Link to="" end>
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