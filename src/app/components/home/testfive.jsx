import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export const TestFive = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '320px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/expert-insights-on-safeguarding.jpg' style={{ height: '240px', width: '100%', backgroundColor: 'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/casestudies/104" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            Expert Insights on Safeguarding Cybersecurity as the University Term Begins
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '320px' }}>
                    <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/how-to-fight-back-against.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/casestudies/27" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    How to fight back against the rise of ransomware
                                    </Link>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '320px' }}>
                    <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='resources/blogs/couchbase-research-digital-transformation-projects.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/blogs/28" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    Couchbase research reveals ongoing risks faced by digital transformation projects
                                    </Link>
                                </div>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '320px' }}>
                    <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/market-for-data-centers.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/casestudies/76" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    Market for data centers continues to thrive at Knight Frank
                                    </Link>
                                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}