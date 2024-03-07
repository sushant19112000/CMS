import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export const TestSeven = () => {
    return (
        <div className="container mt-5">
             <div className="row mb-4">
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '360px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/concerns-50-of-keyless-technology-drivers.jpg' style={{ height: '300px', width: '100%', backgroundColor: 'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/blogs/24" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            Concerns about car hacking among 50% of keyless technology drivers
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '360px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/growing-concerns-by-mobile-apps.jpg' style={{ height: '300px', width: '100%', backgroundColor: 'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/blogs/96" style={{ textDecoration: 'none', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            Growing concerns surround the surveillance and tracking of users by mobile apps
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', border: '0', height: '360px' }}>
                        <div>
                            <picture>
                                <img className='img-fluid rounded' src='/homepage/exploring-the-imperative-for-cios.jpg' style={{ height: '300px', width: '100%', backgroundColor: 'gray' }} />
                            </picture>
                        </div>
                        <div className="text-start mt-3">
                            <Link href="/casestudies/105" style={{ textDecoration: 'none', border: '0', color: '#242424', fontSize:'18px', lineHeight:'1' }}>
                            Exploring the imperative for CIOs to engage in discussions surrounding the potential impact of technical debt
                            </Link>
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
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>B2B</h4>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Artificial Intelligence</h4>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Surveys</h4>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Lead Generation</h4>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Demand Generation</h4>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Intent Data</h4>
                    </div>
                </div>
                <div className="col-md-3 mb-4">
                    <div className="card" style={{ backgroundColor: 'transparent', height: '80px' }}>
                        <h4 style={{ textAlign: 'center', padding: '25px 0px' }}>Sales Insights</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}