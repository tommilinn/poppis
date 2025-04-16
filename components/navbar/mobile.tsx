"use client";

import Link from "next/link";
import { LoginButton } from "./LoginButton";
import LogoutButton from "./LogoutButton";

interface MobileMenuProps {
    isOpen: boolean;
    isLoggedIn: boolean;
    profileDetails: any | null;
    onClose: () => void;
    onLoginClick: () => void;
}

export function MobileMenu({
    isOpen,
    isLoggedIn,
    profileDetails,
    onClose,
    onLoginClick
}: MobileMenuProps) {
    if (!isOpen) return null;

    return (
        <div
            className="md:hidden px-4 py-2 space-y-2 bg-background border-t"
            aria-label="Mobile navigation"
        >
            <Link
                href="/"
                className="block px-3 py-2 rounded-md hover:bg-accent"
                onClick={onClose}
            >
                Etusivu
            </Link>
            <Link
                href="/scoreboard"
                className="block px-3 py-2 rounded-md hover:bg-accent"
                onClick={onClose}
            >
                Menestyjät
            </Link>
            <Link
                href="/achievements"
                className="block px-3 py-2 rounded-md hover:bg-accent"
                onClick={onClose}
            >
                Saavutukset
            </Link>
            {isLoggedIn && (
                <>
                    <Link
                        href="/achievements/hunter"
                        className="block px-3 py-2 rounded-md hover:bg-accent"
                        onClick={onClose}
                    >
                        🏆 Metsästys 🏆
                    </Link>
                    <Link
                        href="/profile"
                        className="block px-3 py-2 rounded-md hover:bg-accent"
                        onClick={onClose}
                    >
                        Sinä
                    </Link>
                </>
            )}
            <div className="pt-2 border-t border-border">
                {profileDetails ? (
                    <LogoutButton />
                ) : (
                    <LoginButton onClick={onLoginClick} />
                )}
            </div>
        </div>
    );
}