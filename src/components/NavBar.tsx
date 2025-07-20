// src/components/Navbar.tsx

import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #0d47a1;
  text-decoration: none;

  img {
    height: 24px;
    margin-right: 8px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const NavLink = styled(Link)`
  color: #444;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    color: #0d47a1;
  }
`;

const Button = styled.button`
  background-color: #0d47a1;
  color: white;
  border: none;
  padding: 8px 16px;
  font-size: 0.9rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1565c0;
  }
`;

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <NavbarContainer>
      <Logo to="/">
        <img src="/leaf-icon.png" alt="Logo" />
        UK Carbon Guide
      </Logo>

      {user ? (
        <NavLinks>
          <NavLink to="/calculator">Calculator</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/hotspots">Hotspots</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <Button onClick={handleLogout}>Logout</Button>
        </NavLinks>
      ) : (
        <Button onClick={() => navigate("/login")}>Login</Button>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
