"use client";
import Link from "next/link";
import style from "@/styles/components/MainNavigation.module.css";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import { useAuthContext } from "@/hooks/useAuthContext";

export default function MainNavigation() {
  // for now use isAuthorized as temp solution for building menu logic. Later when I deside, what type of Authorization I will use, I change this logic!
  const { isAuthorized, setIsAuthorized } = useAuthContext();

  const handleLogout = () => {
    setIsAuthorized(false);
  };

  return (
    <section className={style.mainSection}>
      <nav className={style.navSection}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/signin"}>Sign In</Link>
        <ThemeToggler />
        {isAuthorized && (
          <button
            type="button"
            className="border rounded-3xl p-1 text-base hover:cursor-pointer "
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </nav>
    </section>
  );
}
