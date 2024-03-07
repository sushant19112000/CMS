import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export const TestTen = () => {
    return (
        <div className="container mt-5 mb-4">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/93-of-attempted-mobile.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/insights/103" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            93% of attempted mobile transactions were found to be fraudulent, according to research
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }}>
                                <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/the-rise-of-b2b-webinar-technology-platform.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/insights/102" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                        The Rise of B2B Webinar Technology Platform
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }}>
                                <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/one-third-of-younger-british.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/insights/78" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    One-third of younger British workers would quit if compelled to return to office, survey reveals
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }} >
                                <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/empowering-b2b-marketing-stack-platforms.jpg' style={{ height: '240px', width: '100%', backgroundColor:'gray'}} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/insights/57" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    Empowering B2B Marketing: The Emergence of B2B Marketing Data Platforms
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }}>
                                <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/a-logical-transition.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/insights/2" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    A logical transition from 'I' to 'E' proves more practical than expected
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/by-2021-cios.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/insights/32" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            By 2021, CIOs will share responsibility for culture change alongside CHROs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


