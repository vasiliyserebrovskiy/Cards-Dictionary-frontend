import Link from "next/link";
import style from "@/styles/components/MainNavigation.module.css";
import ThemeToggler from "../ThemeToggler/ThemeToggler";

export default function MainNavigation() {
  return (
    <section className={style.mainSection}>
      <nav className={style.navSection}>
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/signin"}>Sign In</Link>
        <ThemeToggler />
      </nav>
    </section>
  );
}
