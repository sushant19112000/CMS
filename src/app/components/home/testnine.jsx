import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export const TestNine = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }}>
                                <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/a-reslient-hyperautomation.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/insights/3" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    A resilient hyperautomation strategy creates value in the workplace
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }}>
                                <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/an-overview-of-the-benefits.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/blogs/98" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    An overview of the benefits of a digitally enabled NHS
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }}>
                                <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/cisos-on-the-front-line.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/blogs/17" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    CISOs on the front line: What’s ahead for cybersecurity in 2022
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }}>
                                <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/best-practices-marketing-distribution.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/blogs/68" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    Best Practices for B2B Content Marketing Distribution
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '620px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/cios-prioritize-innovation.jpg' style={{ height: '565px', width: '100%',backgroundColor:'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/insights/35" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            CIOs prioritize innovation to enhance digital customer connections
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}