'use client'

import Cart from "@/components/frontend/Cart";
import Hero from "@/components/frontend/Hero";
import Navbar from "@/components/frontend/Navbar";
import { useState } from "react";

export default function Home() {

  const [showCart,setShowcart]=useState(false);

  return (
    <main>
      <Navbar setShowcart={setShowcart} />
      {showCart && <Cart setShowcart={setShowcart} />}
      <Hero/>
    </main>
  );
}
