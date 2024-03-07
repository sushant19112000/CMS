import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export const TestTwo = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4 ">
                    <picture>
                        <img className='img-fluid rounded' src="/homepage/enhancing-cloud-service-center.jpg" alt="" style={{ height: '240px', width: '100%' }} />
                    </picture>
                    <div className="col text-start mt-4">
                        <Link href="/blogs/109" style={{ textDecoration: 'none', color: '#242424' }}>
                            <h3>Enhancing cloud services for a world-class financial service center</h3>
                            <strong>Lorem Ipsen</strong>
                            <p>2nd January, 2023</p>
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 ">
                    <div className="card mb-4" style={{ backgroundColor: 'transparent', border: '0' }}>
                        <div className="row mb-4">
                            <div className='col-md-6'>
                                <picture>
                                    <img className='img-fluid rounded' src='/homepage/getting-data-ethics-in-ai.jpg' style={{ height: '240px', width: '100%' }} />
                                </picture>
                            </div>
                            <div className="col-md-6 text-start mt-3">
                                <Link href="/blogs/110" style={{ textDecoration: 'none', color: '#242424', fontSize: '18px', lineHeight: '1' }}>
                                    Getting down to business with data ethics in AI
                                </Link>
                            </div>
                        </div>
                        <div className="card mb-4" style={{ backgroundColor: 'transparent', border: '0' }}>
                            <div className="row ">
                                <div className='col-md-6'>
                                    <picture>
                                        <img className='img-fluid rounded' src='/homepage/protecting-businesses-and-organizations.jpg' style={{ height: '240px', width: '100%' }} />
                                    </picture>
                                </div>
                                <div className="col-md-6 text-start mt-3">
                                    <Link href="/blogs/74" style={{ textDecoration: 'none', color: '#242424', fontSize: '18px', lineHeight: '1' }}>
                                        Future plans to embrace outsourcing are in the cards for 89% of CTOs
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4" style={{ backgroundColor: 'transparent', border: '0'}}>
                        <div className="row">
                            <div className='col-md-6'>
                                <picture>
                                    <img className='img-fluid rounded' src='/homepage/biometric-security-predictions-for-the-year-2018.jpg' style={{ height: '152px', width: '100%' }} />
                                </picture>
                            </div>
                            <div className="col-md-6 text-start mt-3">
                                <Link href="/blogs/9" style={{ textDecoration: 'none', color: '#242424', fontSize: '18px', lineHeight: '1' }}>
                                    Biometric security predictions for the year 2018
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="card mb-4" style={{ backgroundColor: 'transparent', border: '0' }}>
                        <div className="row">
                            <div className='col-md-6'>
                                <picture>
                                    <img className='img-fluid rounded' src='/homepage/enhanced-job-digital-transformation.jpg' style={{ height: '152px', width: '100%' }} />
                                </picture>
                            </div>
                            <div className="col-md-6 text-start mt-3">
                                <Link href="/blogs/108" style={{ textDecoration: 'none', color: '#242424', fontSize: '18px', lineHeight: '1' }}>
                                    Enhanced Job Satisfaction among Employees in Organizations
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4" style={{ backgroundColor: 'transparent', border: '0'}}>
                        <div className="row">
                            <div className='col-md-6'>
                                <picture>
                                    <img className='img-fluid rounded' src='/homepage/fines-regulators-under-gdpr.jpg' style={{ height: '152px', width: '100%', backgroundColor: 'gray' }} />
                                </picture>
                            </div>
                            <div className="col-md-6 text-start mt-3">
                                <Link href="/casestudies/13" style={{ textDecoration: 'none', color: '#242424', fontSize: '18px', lineHeight: '1' }}>
                                GDPR's Impact on Consumer Trust and Data Security in Europe.
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}