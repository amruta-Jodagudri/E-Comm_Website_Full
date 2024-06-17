'use client'

import Banner from "@/components/frontend/Banner";
import Cart from "@/components/frontend/Cart";
import Features from "@/components/frontend/Features";
import Footer from "@/components/frontend/Footer";
import Hero from "@/components/frontend/Hero";
import Navbar from "@/components/frontend/Navbar";
import TrendingProduct from "@/components/frontend/TrendingProduct";
import { useState } from "react";

export default function Home() {

  const [showCart,setShowcart]=useState(false);

  return (
    <main>
      <Navbar setShowcart={setShowcart} />
      {showCart && <Cart setShowcart={setShowcart} />}
      <Hero/>
      <Features/>
      <TrendingProduct/>
      <Banner/>
      <Footer/>
    </main>
  );
}
