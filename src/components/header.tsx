"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/create-post",
    label: "Create post",
  },
];
export default function Header() {
	const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4 px-7 border-b">
      <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          alt="Logo"
          className="w-[35px] h-[35px]"
          width="50"
          height="50"
        />
      </Link>
      <nav>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
						<Link className={` ${pathname === link.href ? "text-zinc-900" : "text-zinc-400"}`} href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
