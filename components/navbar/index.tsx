"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { LoginButton } from './LoginButton'
import useUserLogin from './hooks';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LoginModal from '../ui/loginModal';

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLogged, checkIsLogged } = useUserLogin();

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

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
      <LoginButton isLogged={isLogged} checkIsLogged={checkIsLogged} onClick={handleLoginClick} />

      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

export default NavBar;