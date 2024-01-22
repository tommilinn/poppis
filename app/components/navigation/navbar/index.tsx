"use client";

import useUserLogin from '../hooks';
import Button from './button'

const NavBar = () => {

  const { isLogged, checkIsLogged } = useUserLogin();

  return (
    <nav>
      <div className="flex">
        <div className="flex w-screen justify-center">
          <a href="/" className="p-2">POPOI</a>
          <a href="/scoreboard/" className="p-2">Scoreboard</a>
        </div>
        <Button isLogged={isLogged} checkIsLogged={checkIsLogged} />
      </div>
    </nav>

  )
}

export default NavBar;