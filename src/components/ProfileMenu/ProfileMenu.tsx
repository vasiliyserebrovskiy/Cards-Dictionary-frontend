"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ProfileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-4 py-2  rounded hover:cursor-pointer"
      >
        Profile
      </button>

      {isOpen && (
        <div //className="absolute mt-2 bg-gray-400 w-42 border rounded shadow-lg text-base"
          className={`absolute mt-2 w-42 text-base bg-gray-400 border rounded shadow-lg transition-all duration-200 origin-top ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <ul>
            <li className="hover:bg-gray-500 cursor-pointer">
              <Link
                href="/profile"
                className="px-4 py-2 block w-full h-full"
                onClick={handleMenuClick}
              >
                Profile
              </Link>
            </li>
            <li className="hover:bg-gray-500 cursor-pointer">
              <Link
                href="/change-password"
                className="px-4 py-2 block w-full h-full"
                onClick={handleMenuClick}
              >
                Change password
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
