import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export const TestSix = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '360px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/tech-enabled-customer-service.jpg' style={{ height: '300px', width: '100%', backgroundColor: 'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/casestudies/98" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            Tech-Enabled Customer Service: UK Customers' Continuing Lack of Confidence
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '360px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/the-rise-of-b2b-thought-leadership-technology.jpg' style={{ height: '300px', width: '100%', backgroundColor: 'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/casestudies/63" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            The Rise of B2B Thought Leadership Technology Platforms: Transforming the Business Landscape
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '360px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/the-ciso-must-look-beyond.jpg' style={{ height: '300px', width: '100%', backgroundColor: 'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/casestudies/119" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            The CISO must look beyond the firewalls.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}