import React from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";
import {PencilSquareIcon,AtSymbolIcon,WrenchIcon} from "@heroicons/react/24/outline"
import Link from "next/link";
const Header = () => {

const nav =[
    {
        name:"Blog",
        href:"/blog",
        Icon:PencilSquareIcon,
    },
    {
        name:"About Us",
        href:"/about",
        Icon:AtSymbolIcon,
    },
    {
        name:"Tools",
        href:"/tool",
        Icon:WrenchIcon,
    },
]

  return (
    <header className="max-w-screen-2xl h-20 items-center  w-full mx-auto flex bg-cyan-500">
      {/* logo */}
      <div>
        <Link href="/">
            Basic&apos;s School
        </Link>
        </div>

      {/* Nav */}
{nav.map(({name,href,Icon})=>(
    <div className= "flex max-w-md w-full" key={name}>
    <Link href={href}>
        <div className="flex" > <h1>{name}</h1>
        <Icon className="h-6 w-6" /></div>
       
    </Link>
    </div>
    
))}
      {/* User Profile || SignIN & ThemeSwitcher */}
      <div className=" flex">
        <Link href="/auth/signin" >
        <button >
        Sign In
      </button >
      </Link>
        <ThemeSwitcher/></div>
      
    </header>
  );
};

export default Header;
