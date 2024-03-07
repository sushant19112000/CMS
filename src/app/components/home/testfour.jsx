import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export const TestFour = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '400px' }}>
                        <picture>
                            <img className='img-fluid rounded' src='/homepage/how-to-nurture-b2b-leads.jpg' style={{ height: '400px', width: '100%', backgroundColor: 'gray' }} />
                        </picture>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '300px' }}>
                        <div className="text-start mt-3">
                            <Link href="/research/3" style={{ textDecoration: 'none', color: '#242424', }}>
                                <h3>How to nurture B2B leads</h3>
                                <p>In the world of B2B (business-to-business) marketing, nurturing leads is a crucial process that involves building strong relationships with potential customers and guiding them through the sales funnel. </p>
                                <p>Benjamin Coleman</p>
                                <p>2nd january, 2023</p>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                                <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Lead Generation</h4>
                            </div>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                                <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Surveys</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Compliance</h4>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Artificial Intelligence</h4>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>B2B</h4>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Demand Generation</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}