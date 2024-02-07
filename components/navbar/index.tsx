"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { LoginButton } from './LoginButton'
import useUserLogin from './hooks';
import Link from 'next/link';

const NavBar = () => {

  const { isLogged, checkIsLogged } = useUserLogin();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>POPPIS  </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/scoreboard" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Scoreboard
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <LoginButton isLogged={isLogged} checkIsLogged={checkIsLogged} />
        </NavigationMenuItem>
      </NavigationMenuList>

    </NavigationMenu>
  )
}

export default NavBar;