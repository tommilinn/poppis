"use client";

import Button from './button'

const NavBar = () =>  {

    return (
        <nav className="flex w-screen justify-center">
        <div>
          <a href="/" className="pl-10">POPOI</a>
          <a href="/scoreboard/" className="pl-10">Scoreboard</a>
        </div>
        <Button />
      </nav>
    )
}

export default NavBar;