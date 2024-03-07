import Link from "next/link"

function Compliance() {
  return (
    <>

      <div className="container pt-4 pb-4">
        <div className="row justify-content-center">
        <div className="col-md-12 pt-2">
          <div className="row justify-content-center">
            <div className="col-8 col-md-3 mb-2">
              <div className="card" width="18rem" style={{ border: '0', backgroundColor: 'transparent' }} >
                <picture>
                  <img src="/compliance/canspam.png" className="img-fluid rounded" style={{height:'180px',width:'21rem'}} />
                </picture>
                <div className="mt-2 text-center">
                  <Link href="/canspam" style={{ color: 'black', fontWeight: '600', textDecoration: 'none' }}>CAN-SPAM Act</Link>
                </div>
              </div>
            </div>
            <div className="col-8 col-md-3 mb-2">
              <div className="card" width="18rem" style={{ border: '0', backgroundColor: 'transparent' }}>
                <picture>
                  <img src="/casl.jpg" className="img-fluid rounded" style={{height:'180px'}} />
                </picture>
                <div className="mt-2 text-center">
                  <Link href="/casl" style={{ color: 'black', fontWeight: '600', textDecoration: 'none' }}>Canadian Anti-Spam Legislation</Link>
                </div>
              </div>
            </div>
            <div className="col-8 col-md-3 mb-2">
              <div className="card" width="18rem" style={{ border: '0', backgroundColor: 'transparent' }}>
                <picture>
                  <img src="/ccpa.jpg" className="img-fluid rounded" style={{height:'180px',width:'20.8rem'}}/>
                </picture>
                <div className="mt-2 text-center">
                  <Link href="/ccpa" style={{ color: 'black', fontWeight: '600', textDecoration: 'none' }}>California Consumer Privacy Act</Link>
                </div>
              </div>
            </div>
            <div className="col-8 col-md-3 mb-2">
              <div className="card" style={{ border: '0', backgroundColor: 'transparent' }}>
                <picture>
                  <img src="/cpa.png" className="img-fluid rounded" style={{height:'180px'}} />
                </picture>
                <div className="mt-2 text-center">
                  <Link href="/cpa" style={{ color: 'black', fontWeight: '600', textDecoration: 'none' }}>Colorado Privacy Act</Link>
                </div>
              </div>
            </div>
            <div className="col-8 col-md-3 mb-2">
              <div className="card" style={{ border: '0', backgroundColor: 'transparent' }}>
                <picture>
                  <img src="/cpra.jpg" className="img-fluid rounded" style={{height:'180px',width:'20.8rem'}}/>
                </picture>
                <div className="mt-2 text-center">
                  <Link href="/cpra" style={{ color: 'black', fontWeight: '600', textDecoration: 'none' }}>California Privacy Rights Act</Link>
                </div>
              </div>
            </div>
            <div className="col-8 col-md-3 mb-2">
              <div className="card" style={{ border: '0', backgroundColor: 'transparent' }}>
                <picture>
                  <img src="/gdpr.png" className="img-fluid rounded" style={{height:'180px',width:'20.8rem'}}/>
                </picture>
                <div className="mt-2 text-center">
                  <Link href="/gdpr" style={{ color: 'black', fontWeight: '600', textDecoration: 'none' }}>General Data Protection Regulation</Link>
                </div>
              </div>
            </div>
            <div className="col-8 col-md-3 mb-2">
              <div className="card" style={{ border: '0', backgroundColor: 'transparent' }}>
                <picture>
                  <img src="/lgpd.png" className="img-fluid rounded"  style={{height:'180px',width:'20.8rem'}} />
                </picture>
                <div className="mt-2 text-center">
                  <Link href="/lgpd" style={{ color: 'black', fontWeight: '600', textDecoration: 'none' }}>LGPD</Link>
                </div>
              </div>
            </div>
            <div className="col-8 col-md-3 mb-2">
              <div className="card" style={{ border: '0', backgroundColor: 'transparent' }}>
                <picture>
                  <img src="/vcdpa.png" className="img-fluid rounded" style={{height:'180px',width:'20.8rem'}} />
                </picture>
                <div className="mt-2 text-center">
                  <Link href="/vcdpa" style={{ color: 'black', fontWeight: '600', textDecoration: 'none' }}>Virginia Consumer Data Protection Act</Link>
                </div>
              </div>
            </div>


          </div>

        </div>
        </div>
      </div>


    </>
  )
}
export default Compliance