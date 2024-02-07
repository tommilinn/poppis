"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '@/components/ui/navigation-menu';
import Button, { LoginButton } from './button'
import Link from 'next/link';
import useUserLogin from '../hooks';

const NavBar = () =>{

  const { isLogged, checkIsLogged } = useUserLogin();

  return (
    <NavigationMenu>
      <NavigationMenuItem>POPPIS  </NavigationMenuItem>
      
      <NavigationMenuItem>
      <LoginButton isLogged={isLogged} checkIsLogged={checkIsLogged}/>
      </NavigationMenuItem>
      
    </NavigationMenu>
    
  )
}

export default NavBar;