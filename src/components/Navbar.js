import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      

        <div className=' flex justify-between m-2'>
          <div className='flex gap-2'>
          <svg width="50px" height="50px" viewBox="0 0 61.7998 61.7998" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g data-name="Layer 2" id="Layer_2"> <g data-name="—ÎÓÈ 1" id="_ÎÓÈ_1"> <circle cx="30.8999" cy="30.8999" fill="#cfd1d3" r="30.8999"></circle> <path d="M23.242 38.592l15.92.209v12.918l-15.907-.121-.013-13.006z" fill="#d1b47a" fill-rule="evenodd"></path> <path d="M53.478 51.993A30.814 30.814 0 0 1 30.9 61.8a31.225 31.225 0 0 1-3.837-.237A30.699 30.699 0 0 1 15.9 57.919a31.033 31.033 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 4.535 1.84 6.152 7.97 6.244 7.57.113 7.94-1.606 7.94-6.28l12.79 6.281z" fill="#d1c000" fill-rule="evenodd"></path> <path d="M39.165 38.778v3.404c-2.75 4.914-14 4.998-15.923-3.59z" fill-rule="evenodd" opacity="0.11"></path> <path d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z" fill="#d3b273" fill-rule="evenodd"></path> <path d="M18.365 24.045c-3.07 1.34-.46 7.687 1.472 7.658a31.973 31.973 0 0 1-1.472-7.658z" fill="#d1b47a" fill-rule="evenodd"></path> <path d="M44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.992 31.992 0 0 0 1.471-7.658z" fill="#d1b47a" fill-rule="evenodd"></path> <path d="M43.409 29.584s1.066-8.716-2.015-11.752c-1.34 3.528-7.502 4.733-7.502 4.733a16.62 16.62 0 0 0 3.215-2.947c-1.652.715-6.876 2.858-11.61 1.161a23.715 23.715 0 0 0 3.617-2.679s-4.287 2.322-8.44 1.742c-2.991 2.232-1.66 9.162-1.66 9.162C15 18.417 18.697 6.296 31.39 6.226c12.358-.069 16.17 11.847 12.018 23.358z" fill="#0c0b08" fill-rule="evenodd"></path> <path d="M23.255 42.179a17.39 17.39 0 0 0 7.958 6.446l-5.182 5.349L19.44 43.87z" fill="#ffffff" fill-rule="evenodd"></path> <path d="M39.16 42.179a17.391 17.391 0 0 1-7.958 6.446l5.181 5.349 6.592-10.103z" fill="#ffffff" fill-rule="evenodd"></path> <path d="M33.366 61.7q-1.239.097-2.504.098-.954 0-1.895-.056l1.031-8.757h2.41z" fill="#3dbc93" fill-rule="evenodd"></path> <path d="M28.472 51.456l2.737-2.817 2.736 2.817-2.736 2.817-2.737-2.817z" fill="#3dbc93" fill-rule="evenodd"></path> </g> </g> </g></svg>
<div>
<p className='capitalize'>hello isdore</p>
<svg  width="50px" height="40px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Flat"> <g id="Color"> <polygon fill="#e6d4a3" points="45 17 32 25 19 17 19 3 45 3 45 17"></polygon> <polygon fill="#dd051d" points="40 3 40 20.08 32 25 24 20.08 24 3 40 3"></polygon> <path d="M32,25l6.49-4a21.36,21.36,0,0,0-13,0Z" fill="#a60416"></path> <circle cx="32" cy="41.5" fill="#e1d093" r="19.5"></circle> <circle cx="32" cy="41.5" fill="#dcb679" r="14.5"></circle> <path d="M34.13,43.63V33H29.88a3.19,3.19,0,0,1-3.19,3.19H25.63v4.25h4.25v3.19a2.13,2.13,0,0,1-2.13,2.12H25.63V50H38.38V45.75H36.25A2.12,2.12,0,0,1,34.13,43.63Z" fill="#e1d093"></path> </g> </g> </g></svg>
</div>

     </div>
       


     
     <div className='pro-svg flex gap-4 '>
     <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-hr" viewBox="0 0 16 16">
  <path d="M12 3H4a1 1 0 0 0-1 1v2.5H2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2.5h-1V4a1 1 0 0 0-1-1zM2 9.5h1V12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.5h1V12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5zm-1.5-2a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1H.5z"/>
</svg>

      <svg  xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg>
     </div>

     
      </div>

      <nav className="p-5 bg-green shadow md:flex md:items-center md:justify-between border-2 border-green-500 rounded w-full ">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-[poppings] cursor-pointer">
            <h1>
              <span className="text-green-500 text-5xl font-bold text-shadow">P</span> Opay
            </h1>
          </span>

          <span className="text-3xl cursor-pointer mx-2 md:hidden block" onClick={toggleMenu}>
            <ion-icon name={menuOpen ? "close" : "menu"}></ion-icon>
          </span>
        </div>

        <ul className={`md:flex md:items-center z-${menuOpen ? 1 : -1} md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${menuOpen ? 'opacity-100 top-[200px]' : 'opacity-0 top-[-400px]'} transition-all ease-in duration-500`}>
          <li className="mx-4 my-6 md:my-0">
            <a href="index.html" className="text-xl hover:text-green-500 duration-500">HOME</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="index.html" className="text-xl hover:text-green-500 duration-500">SERVICE</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="index.html" className="text-xl hover:text-green-500 duration-500">ABOUT</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="index.html" className="text-xl hover:text-green-500 duration-500">CONTACT</a>
          </li>
          <li className="mx-4 my-6 md:my-0">
            <a href="index.html" className="text-xl hover:text-green-500 duration-500">BLOGS</a>
          </li>
          <button className="bg-green-600 text-white font-[poppins] duration-500 px-6 py-2 mx-4 hover:bg-green-700 rounded">
            Get started
          </button>
        </ul>
      </nav>

    </div>
  );
}

export default Navbar;
