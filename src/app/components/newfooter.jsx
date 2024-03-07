import React from 'react'
import Link from 'next/link'
export const Newfooter = () => {
    return (

        <div>
            <footer className="text-center text-lg-start  text-muted" style={{ fontFamily: "Roboto Mono", backgroundColor: '#42454a' }}>
                <section className="pt-4">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3" style={{ margin: 0 }}>
                            <h2 className="text-uppercase fw-bold mb-4 ms-md-2" style={{ color: 'white', margin: '0px', padding: '0px' }}>
                                Digitaltechnologi
                            </h2>
                            <div className="col-md-4 col-lg-5 col-xl-4  mb-4 " >

                                <p style={{ color: 'white', fontSize: '18px' }}>
                                    We are located:
                                </p>
                                <p style={{ color: 'white', fontSize: '18px' }}>
                                    The One Tower, Floor 24, Sheikh Zayed Rd,
                                    Dubai, United Arab Emirates
                                </p>
                                <p style={{ color: 'white', fontSize: '18px' }}>
                                    561 7th Ave, 4th floor, New York,
                                    10018, United States
                                </p>
                            </div>

                            <div className="col-md-3    mb-4 " >
                                <div className="d-flex">
                                    <div className='mx-auto'>


                                        <p style={{ color: 'white' }}>
                                            <Link href="/blogs" style={{ textDecoration: 'none', color: 'white',fontSize: '18px'  }}>Blogs</Link>
                                        </p>
                                        <p style={{ color: 'white' }}>
                                            <Link href="/whitepapers" className="text-reset" style={{ textDecoration: 'none', color: 'white',fontSize: '18px'  }}>Whitepapers</Link>
                                        </p>
                                        <p style={{ color: 'white' }}>
                                            <Link href="/casestudies" className="text-reset" style={{ textDecoration: 'none', color: 'white',fontSize: '18px' }}>Casestudies</Link>
                                        </p>
                                        <p style={{ color: 'white' }}>
                                            <Link href="/insights" className="text-reset" style={{ textDecoration: 'none', color: 'white',fontSize: '18px'  }}>Insights</Link>
                                        </p>
                                        <p style={{ color: 'white' }}>
                                            <Link href="/research" className="text-reset" style={{ textDecoration: 'none', color: 'white',fontSize: '18px'  }}>Research</Link>
                                        </p>
                                    </div>

                                </div>

                            </div>
                            <div className="col-md-3  mb-4"  >
                                <div className="d-flex">
                                    <div className="mx-auto">
                                        <p className="" style={{ color: 'white' }}>
                                            <Link href="/privacy-policy" className="text-reset" style={{ textDecoration: 'none', color: 'white',fontSize: '18px'  }}>Privacy Policy</Link>
                                        </p>
                                        <p style={{ color: 'white' }}>
                                            <Link href="/compliance" className="text-reset" style={{ textDecoration: 'none', color: 'white',fontSize: '18px'  }}>Compliance</Link>
                                        </p>
                                        <p style={{ color: 'white' }}>
                                            <Link href="/contact" className="text-reset" style={{ textDecoration: 'none', color: 'white',fontSize: '18px'  }}>Contact Us</Link>
                                        </p>
                                        <p style={{ color: 'white' }}>
                                            <Link href="/ctr-calculator" className="text-reset" style={{ textDecoration: 'none', color: 'white',fontSize: '18px'  }}>Ctr Calculator</Link>
                                        </p>
                                        <p style={{ color: 'white' }}>
                                            <Link href="/open-rate-calculator" className="text-reset" style={{ textDecoration: 'none', color: 'white',fontSize: '18px'  }}>Open Rate Calculator</Link>
                                        </p>
                                        <p style={{ color: 'white' }}>
                                            <Link href="/ctor-calculator-click-to-open-rate" className="text-reset" style={{ textDecoration: 'none', color: 'white',fontSize: '18px'  }}>Ctor Calculator</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 mb-4" style={{color:'white'}}>
                                <p style={{fontWeight:'500',fontSize:'18px'}}>Contact Us</p>

                                <p style={{fontSize: '18px'}}>
                                info@digitaltechnologi.com
                                </p>

                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)', color: 'white',fontSize:'20px' }}>
                    © 2023  | Digitaltechnologi A Revvknew Media Brand
                    
                </div>
            </footer>
        </div>
    )
}
