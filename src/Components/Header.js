import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
  setUserLoginCredentials,
  setSignOut,
  selectUser,
} from "../app/features/user/userSlice";

function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(selectUser);
  console.log(user);
  const displayName = user.displayName;
  const handleAuth = async () => {
    if (!displayName) {
      try {
        const userAuth = await auth.signInWithPopup(provider);
        setUser(userAuth.user);
        history.push("./home");
        // console.log(userAuth.user);
      } catch (e) {
        alert(e.messagge);
      }
    } else if (displayName) {
      try {
        await auth.signOut();
        dispatch(setSignOut());
        history.push("/");
      } catch (e) {
        alert(e.message);
      }
    }
  };

  const setUser = ({ displayName, email, photoURL }) => {
    dispatch(
      setUserLoginCredentials({
        displayName,
        email,
        photoURL,
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [displayName]);

  return (
    <Nav>
      <Logo>
        <img src="/assets/images/logo.svg" alt="Disney+" />
      </Logo>
      {displayName ? (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/assets/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/assets/images/search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a href="/original">
              <img src="/assets/images/original-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="/watchlist">
              <img src="/assets/images/watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="/series">
              <img src="/assets/images/series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
            <a href="/movie">
              <img src="/assets/images/movie-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
          </NavMenu>
          <SignOut>
            <UserImg src={user.photoURL} alt={user.displayName} />
            <span onClick={handleAuth}>Sign Out</span>
          </SignOut>
        </>
      ) : (
        <Login onClick={handleAuth}>LOGIN</Login>
      )}
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  height: 70px;
  background-color: #090b13;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  letter-spacing: 10px;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  font-size: 0;
  display: inline-block;
  max-height: 70px;

  img {
    display: block;
    width: 100%;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  padding: 0;
  margin: 0;
  margin-right: auto;
  margin-left: 25px;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    z-index: auto;
    img {
      max-width: 20px;
      width: 20px;
      height: 20px;
    }
    span {
      color: rgba(249, 249, 249);
      line-height: 1.08;
      white-space: nowrap;

      letter-spacing: 1.4px;
      position: relative;

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        bottom: -6px;
        border-radius: 0px 0px 4px 4px;
        height: 2px;
        left: 0px;
        right: 0px;
        position: absolute;
        transform-origin: left center;
        transform: scaleX(0);
        opacity: 1;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        width: auto;
      }
    }

    &:hover {
      span:before {
        opacity: 1;
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
`;

const Login = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  padding: 10px;
  letter-spacing: 3px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: rgba(0, 0, 0, 0.6);
    border-color: transparent;
  }
`;

const SignOut = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  span {
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid #f9f9f9;
    font-size: 12px;
    position: absolute;
    padding: 8px;
    letter-spacing: 1px;
    border-radius: 4px;
    opacity: 0;
    right: 40px;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #f9f9f9;
      color: rgba(0, 0, 0, 0.6);
      border-color: transparent;
    }
  }
  &:hover {
    span {
      opacity: 1;
      transform: translateX(-20px);
    }
  }
`;

const UserImg = styled.img`
  height: 75%;
  border-radius: 50%;
  cursor: pointer;
`;

export default Header;
