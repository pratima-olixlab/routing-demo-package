import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import User from './routs/user'
import Visit from './routs/visit'
import Notfound from './routs/notfound'
import Apps from './routs/Apps';

function NavBar() {
  return (
    <div className="App">
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">MovieMagic</Navbar.Brand>
          <Navbar.Brand as={Link} to="/user">User</Navbar.Brand>
          <Navbar.Brand as={Link} to="/visit">Visit</Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
      <Route path="/" element={<Apps />} />
        <Route path="/user" element={<User />} />
        <Route path="/visit" element={<Visit />} />
        <Route path="*" element={<Notfound />} /> {/* Use path="*" to catch all unmatched routes */}
      </Routes>
    </div>
  );
}

export default NavBar;
