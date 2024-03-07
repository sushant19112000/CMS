import Link from 'next/link';
import Card from 'react-bootstrap/Card';

export const TestHero = () => {
    return (
        <div className="container mt-4">
            <div id="carouselExampleControls" className="carousel slide mb-4" data-ride="carousel">
                <div className="carousel-inner rounded">
                    <div className="carousel-item active">
                        <picture style={{objectFit:'contain'}}>
                        <img className="d-block w-100 img-fluid" src='/homepage/securing-company-wide-success.jpg' alt="First slide" style={{ backgroundColor: 'gray', height: 'cover' }} />
                        </picture>
                        <div className="carousel-caption d-none d-md-block">
                            <h2><Link href="/blogs/111" style={{textDecoration:'none',color:'inherit'}}>Securing DevOps: How Cultivating a Strong Culture Drives Company-Wide Success</Link></h2>
                        </div>
                    </div>
                    ;
                    <div className="carousel-item" >
                    <picture style={{objectFit:'contain'}}>
                        <img className="d-block w-100 img-fluid" src='/homepage/cios-as-a-strategic-imperative.jpg' alt="First slide" style={{ backgroundColor: 'gray', height: 'cover' }} />
                        </picture>
                        <div className="carousel-caption d-none d-md-block">
                          
                            <h2><Link href="/blogs/15" style={{textDecoration:'none',color:'inherit'}}>CIOs Embrace Operational Resilience as a Strategic Imperative</Link></h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <picture style={{objectFit:'contain'}}>
                        <img className="d-block w-100 img-fluid" src='/homepage/b2b-sales-enablement-technology.jpg' alt="First slide" style={{ backgroundColor: 'gray', height: 'cover' }} />
                        </picture>
                        <div className="carousel-caption d-none d-md-block">
                       <h2> <Link href="/blogs/80" style={{textDecoration:'none',color:'inherit'}}>B2B sales enablement through technology</Link> </h2>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}