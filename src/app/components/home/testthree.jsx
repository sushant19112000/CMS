import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export const TestThree = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '320px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/how-to-use-social-selling-platforms-results.jpg' style={{ height: '240px', width: '100%', backgroundColor: 'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/research/73" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            How to use social selling platforms to improve results
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '320px' }}>
                    <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/how-to-use-b2b-customer-success-satisfaction.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/research/18" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    How to use B2B customer success to improve customer satisfaction
                                    </Link>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '320px' }}>
                    <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/how-to-use-sales-technology-software.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/research/26" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    How to use sales technology software platforms to improve results
                                    </Link>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '320px' }}>
                    <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/resources/insights/cloud-is-deemed-critical-for-innovation.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/insights/39" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    Cloud is deemed critical for innovation by European enterprises.
                                    </Link>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}