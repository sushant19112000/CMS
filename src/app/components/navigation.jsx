// 'use client';
// import './navgiation.module.css'
// import Link from 'next/link';
// import React from 'react';
// import { useRouter } from 'next/router';
// import "@fontsource/roboto-mono"; // Defaults to weight 400
// import "@fontsource/roboto-mono/400.css"; // Specify weight
// import "@fontsource/roboto-mono/400-italic.css"; // Specify weight and style

// export const Navigation = () => {
//   const currentUrl=useRouter()
//   console.log(currentUrl)
//   return (
//     <nav className="navbar navbar-expand-lg sticky-top   pt-3 pb-3" style={{backgroundColor:"#ffffff",fontFamily:'Roboto Mono'}}  >
//       <div className="container-fluid" >
//         <Link className="" href="/" style={{marginLeft:'-15px',fontWeight:'600',fontSize:'24px',textDecoration:'none',color:'grey'}}>Datacenterallianz</Link>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav ms-auto "  style={{marginRight:'-24px'}}>
//             <li className="nav-item me-4 d-flex">
//               <Link className="nav-link " href="/" style={{color:"black",fontWeight:"400",fontStyle:''}}>Home</Link>
//             </li>

//             <li className="nav-item me-4 d-flex">
//               <Link className="nav-link" href="/contact" style={{color:"black",fontWeight:"400"}}>Contact Us</Link>
//             </li>

//             <li className="nav-item dropdown me-4 d-flex">
//               <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"black",fontWeight:"400"}}>
//                 Tools
//               </Link>
//               <ul className="dropdown-menu" style={{fontWeight:'600'}}>
//                 <li><Link className="dropdown-item" href="/ctor-calculator-click-to-open-rate">CTOR Calculator</Link></li>
//                 <li><Link className="dropdown-item" href="/ctr-calculator">CTR Calculator</Link></li>
//                 <li><Link className="dropdown-item" href="/open-rate-calculator">OPEN RATE Calculator</Link></li>
//               </ul>
//             </li> 
//             <li className="nav-item dropdown   d-flex">
//               <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"black",fontWeight:"400"}}>
//                 Resources
//               </Link>
//               <ul className="dropdown-menu">
//                 <li><Link className="dropdown-item" href="/blogs">Blogs</Link></li>
//                 <li><Link className="dropdown-item" href="/whitepapers">Whitepapers</Link></li>
//                 <li><Link className="dropdown-item" href="/casestudies">Casestudies</Link></li>
//                 <li><Link className="dropdown-item" href="/insights">Insights</Link></li>
//                 <li><Link className="dropdown-item" href="/research">Research</Link></li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>

//   )
// }





'use client';
import './navgiation.module.css'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { BsSearch, BsX } from 'react-icons/bs';
import "@fontsource/roboto-mono"; // Defaults to weight 400
import "@fontsource/roboto-mono/400.css"; // Specify weight
import "@fontsource/roboto-mono/400-italic.css"; // Specify weight and style


export const Navigation = () => {
  const currentUrl = useRouter()

  const [urls,seturls]=useState([])
  useEffect (()=>{
    seturls(oldArray => [...oldArray, currentUrl])
  },[currentUrl])


  const [searchTerm,setsearchTerm]=useState("")
  const handleSearchTermchange=(e)=>{
    setsearchTerm(e.target.value)
  }
 
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bp-3 tp-3" style={{ backgroundColor: '#ffffff', fontFamily: 'Roboto Mono' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" style={{ marginLeft: '-15px' }} href="/"><picture><img src="/logos/digitaltechnologi-logo-SVH.svg" style={{height:'45px'}} /></picture></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown" >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Tools
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" href="/ctr-calculator">CTR Calculator</Link></li>
                  <li><Link className="dropdown-item" href="/ctor-calculator-click-to-open-rate">CTOR Calculator</Link></li>
                  <li><Link className="dropdown-item" href="/open-rate-calculator">Open Rate Calculator</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Resources
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><Link className="dropdown-item" href="/blogs">Blogs</Link></li>
                  <li><Link className="dropdown-item" href="/casestudies">Casestudies</Link></li>
                  <li><Link className="dropdown-item" href="/insights">Insights</Link></li>
                  <li><Link className="dropdown-item" href="/research">Research</Link></li>
                  <li><Link className="dropdown-item" href="/whitepapers">Whitepaper</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact Us</Link>
              </li>
            </ul>
            <div className='ms-auto' style={{marginRight:'-18px'}}>
              <form className="d-flex">
                <input className="form-control me-2" value={searchTerm} onChange={handleSearchTermchange} placeholder="Search" aria-label="Search" />
                <Link href={`/search/${searchTerm}`} style={{textDecoration:'none'}}>
                <button className="btn btn-outline-success" type="">
                  <BsSearch style={{ border: '0' }} />
                </button>
                </Link>
              </form>

            </div>
          </div>
        </div>
      </nav>
    </div>
  )
} 