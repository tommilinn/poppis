"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { LoginButton } from './LoginButton'
import useUserLogin from './hooks';
import Link from 'next/link';

const NavBar = () => {

  const { isLogged, checkIsLogged } = useUserLogin();

  return (
    <div className='flex w-full justify-between items-center'>
      <div className='p-5'>POPPIS</div>
      <NavigationMenu className='w-full'>


        <NavigationMenuList className=''>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/scoreboard" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Scoreboard
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <LoginButton isLogged={isLogged} checkIsLogged={checkIsLogged} />
    </div>
  )
}

export default NavBar;