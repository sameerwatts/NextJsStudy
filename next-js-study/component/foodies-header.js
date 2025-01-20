import Link from "next/link";
import React from "react";
import logoImg from "@/assets/logo.png";

const FoodiesHeader = () => {
  return (
    <header>
      <Link href="/">
        <img src={logoImg.src} atl="A Plate with Food on it" />
        Next Level Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Browse Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default FoodiesHeader;
