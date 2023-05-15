import React from "react";
import { Link } from "react-router-dom";
import DisplayAvatar from "../Components/DisplayAvatar";
import Tweeting from "../Components/Tweeting";
import { useState } from "react";
import LoginPage from "./LoginPage";

function Homepage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  function closeDialog() {
    setIsDialogOpen(false);
  }

  function handleLogin() {
    setIsDialogOpen(true);
  }

  return (
    <>
      <header>
        Like Twitter but Better
        <div>
          <button onClick={handleLogin}>
            <span role="img" aria-label="Login">
              🚪
            </span>
            <span>Login</span>
          </button>
        </div>
      </header>
      <div id="main">
        <div id="left-container">
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
          </form>
          <div>{<DisplayAvatar />}</div>
          <form method="post">
            <Link to={"/avatar-creator"}>
              <button type="submit">New Avatar</button>
            </Link>
          </form>
        </div>
        <div id="right-container">{<Tweeting />}</div>
      </div>
      <footer>@Toheeb Antoine 2023</footer>
      {/* Antoine : now with this part we know if the dialog is open or not */}
      {isDialogOpen && <LoginPage onClose={closeDialog} />}
    </>
  );
}

export default Homepage;
