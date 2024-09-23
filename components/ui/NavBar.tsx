/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/system/about", label: "About us" },
    { href: "/system/services", label: "Services" },
    { href: "/system/careers", label: "Careers" },
  ];

  return (
    <header className="bg-background/[0.2] backdrop-blur dark:bg-black-200 fixed inset-x-0 top-0 z-[5000] text-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="/"
          title="brand-logo"
          className="relative flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-auto h-[40px]"
          >
            <rect width="7" height="7" x="14" y="3" rx="1"></rect>
            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
          </svg>

          {/* <img src="/logo.png" alt="logo" width={40} height={40} /> */}
          <span className="font-bold text-xl text-center">SANGEETA</span>
          <span className="hidden sm:inline">System</span>
        </Link>

        {/* Navigation for larger screens */}
        <nav className="hidden lg:flex items-center mx-8 space-x-10 text-black">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <span className="text-sm font-medium hover:text-primary transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
          <Link href="/system/contact">
            <span className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Contact
            </span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black-200 shadow-md">
          <nav className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <span className="block py-2 text-sm font-medium hover:text-primary transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/system/contact">
              <span className="block bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors text-center">
                Contact
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;




// import Link from "next/link";
// import React from "react";
// // import { Link } from "react-router-dom";

// const Navbar: React.FC = () => {
//   return (
//     <header className=" bg-background/[0.2] backdrop-blur   dark:bg-black-200 fixed inset-x-0 top-0 z-[5000] text-black flex items-center justify-between px-5 py-5 shadow-md">
//       <div className="flex justify-between items-center container">
//         {/* Brand Logo */}
//         <Link
//           href="/"
//           title="brand-logo"
//           className="relative mr-6 flex items-center space-x-2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="w-auto h-[40px]"
//           >
//             <rect width="7" height="7" x="14" y="3" rx="1"></rect>
//             <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
//           </svg>
//           <span className="font-bold text-xl text-center">SANGEETA</span>
//           <span>System</span>
//         </Link>

//         {/* Navigation and Actions */}
//         <div className="hidden lg:block">
//           <div className="flex items-center">
//             <nav className="mr-10">
//               <nav
//                 aria-label="Main"
//                 data-orientation="horizontal"
//                 dir="ltr"
//                 className="relative z-10 flex max-w-max flex-1 items-center justify-center"
//               >
//                 <div className="relative">
//                   <ul
//                     data-orientation="horizontal"
//                     className="group flex flex-1 list-none items-center justify-center space-x-1"
//                     dir="ltr"
//                   >
//                     {/* Navigation Items */}
//                     <li>
//                       <Link href="/">
//                         <button
//                           id="radix-:Rp37pja:-trigger-radix-:Rmp37pja:"
//                           data-state="closed"
//                           aria-expanded="false"
//                           aria-controls="radix-:Rp37pja:-content-radix-:Rmp37pja:"
//                           className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/10 data-[state=open]:bg-primary/10"
//                           data-radix-collection-item=""
//                         >
//                           Home
//                         </button>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/system/about">
//                         <button
//                           id="radix-:Rp37pja:-trigger-radix-:Rmp37pja:"
//                           data-state="closed"
//                           aria-expanded="false"
//                           aria-controls="radix-:Rp37pja:-content-radix-:Rmp37pja:"
//                           className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/10 data-[state=open]:bg-primary/10"
//                           data-radix-collection-item=""
//                         >
//                           About us
//                         </button>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link href="/system/services" legacyBehavior>
//                         <button
//                           id="radix-:Rp37pja:-trigger-radix-:Rmp37pja:"
//                           data-state="closed"
//                           aria-expanded="false"
//                           aria-controls="radix-:Rp37pja:-content-radix-:Rmp37pja:"
//                           className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/10 data-[state=open]:bg-primary/10"
//                           data-radix-collection-item=""
//                         >
//                           Services
//                         </button>
//                       </Link>
//                     </li>

//                     <li>
//                       <Link href="/system/careers" legacyBehavior>
//                         <button
//                           id="radix-:Rp37pja:-trigger-radix-:Rmp37pja:"
//                           data-state="closed"
//                           aria-expanded="false"
//                           aria-controls="radix-:Rp37pja:-content-radix-:Rmp37pja:"
//                           className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-primary/10 data-[state=open]:bg-primary/10"
//                           data-radix-collection-item=""
//                         >
//                           Careers
//                         </button>
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="absolute left-0 top-full flex justify-center"></div>
//               </nav>
//             </nav>
//             <div className="gap-2 flex">
//               <Link href="/login">
//                 <li className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="h-6 w-6"
//                   >
//                     <rect width="7" height="7" x="14" y="3" rx="1"></rect>
//                     <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
//                   </svg>
//                   Contact
//                 </li>
//               </Link>
//               <Link href="/system/contact">
//                 <li className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 py-2 w-full sm:w-auto text-background flex gap-2">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="h-6 w-6"
//                   >
//                     <rect width="7" height="7" x="14" y="3" rx="1"></rect>
//                     <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
//                   </svg>
//                   Contact
//                 </li>
//               </Link>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="mt-2 cursor-pointer block lg:hidden">
//           <button
//             type="button"
//             aria-haspopup="dialog"
//             aria-expanded="false"
//             aria-controls="radix-:Rd37pja:"
//             data-state="closed"
//           >
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               strokeWidth="0"
//               viewBox="0 0 512 512"
//               className="text-2xl"
//               height="1em"
//               width="1em"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z"></path>
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Bottom Separator */}
//       <hr className="absolute w-full bottom-0 transition-opacity duration-300 ease-in-out opacity-100" />
//     </header>
//   );
// };

// export default Navbar;
