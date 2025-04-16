"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { LoginButton } from "./LoginButton";
import LogoutButton from "./LogoutButton";

interface DesktopNavigationProps {
    isLoggedIn: boolean;
    profileDetails: any | null;
    onLoginClick: () => void;
}

export function DesktopNavigation({
    isLoggedIn,
    profileDetails,
    onLoginClick
}: DesktopNavigationProps) {
    return (
        <div className="hidden md:flex md:w-full md:justify-between md:items-center">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" className={navigationMenuTriggerStyle()}>
                            Etusivu
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/scoreboard" className={navigationMenuTriggerStyle()}>
                            Menestyjät
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/achievements" className={navigationMenuTriggerStyle()}>
                            Saavutukset
                        </Link>
                    </NavigationMenuItem>

                    {isLoggedIn && (
                        <NavigationMenuItem>
                            <Link href="/achievements/hunter" className={navigationMenuTriggerStyle()}>
                                🏆 Metsästys 🏆
                            </Link>
                        </NavigationMenuItem>
                    )}

                    {isLoggedIn && (
                        <NavigationMenuItem>
                            <Link href="/profile" className={navigationMenuTriggerStyle()}>
                                Sinä
                            </Link>
                        </NavigationMenuItem>
                    )}
                </NavigationMenuList>
            </NavigationMenu>

            <div>
                {profileDetails ? (
                    <LogoutButton />
                ) : (
                    <LoginButton onClick={onLoginClick} />
                )}
            </div>
        </div>
    );
}