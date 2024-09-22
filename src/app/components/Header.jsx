"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/navigation'

function Header() {

  const router = useRouter();

  const [pokeName, setPokeName] = useState("");

  const headleInput = (e) => {
    setPokeName(e.target.value);
  }

  const headleForm = (e) => {
    e.preventDefault();

    router.push(`/pokesearch/${pokeName}`)
  }
  
  return (
    <header
      className="bg-gradient-to-r from-indigo-500 via-purple-500
    to-pink-500 h-[300px] flex justify-center items-center"
    >
      <div className="text-center">
        <h1 className="text-white text-5xl">NextJS Pokemon Finder App</h1>
        <p className="text-white text-2xl">Find your favourite Pokemon</p>
        <form onSubmit={headleForm} className="flex mt-2">
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 px-3 py-2 
          text-gray-700 shadow-mb"
            placeholder="Find Pokemon ..."
            onChange={headleInput}
          />
          <button
            className="inline-flex item-center mx-2 px-4 py-2 rounded-mb 
          bg-green-500 text-white shadow-mb"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
