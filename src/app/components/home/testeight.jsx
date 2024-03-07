import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export const TestEight = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent',border:'0',  height: '620px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/b2b-customer-feedback-as-a-driver.jpg' style={{ height: '565px', width: '100%',backgroundColor:'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/insights/15" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            B2B customer feedback as a driver of innovation
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent',border:0, height: '300px' }}>
                            <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/brexit-data-across-borders.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/blogs/12" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    Brexit Impacts UK Enterprises' Ability to Transfer Data Across Borders
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent',border:0, height: '300px' }}>
                            <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/experts-in-the-upcoming-year.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/blogs/61" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    Experts in the field engage in dialogues concerning the focal points of CIO for the upcoming year
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="card" style={{ backgroundColor: 'transparent',border:0, height: '300px' }}>
                            <div>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/evaluating-and-the-ugly.jpg' style={{ height: '240px', width: '100%',backgroundColor:'gray' }} />
                                    </picture>
                                </div>
                                <div className="text-start mt-3">
                                    <Link href="/blogs/53" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                                    Evaluating data centre certification: the good, the bad, and the ugly.
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}