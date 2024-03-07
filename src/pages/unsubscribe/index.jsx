import { useState } from 'react';

export default function Unsubscribe() {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, comment }),
      });

      if (response.ok) {
        console.log('Unsubscribed successfully');
        // Handle success: Redirect or show a success message
      } else {
        console.error('Failed to unsubscribe');
        // Handle error: Show an error message
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle error: Show an error message
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <main>
      <div className="container pt-4">
        <div className="" style={{ marginTop: '40px', marginBottom: '40px' }}>
          <div className="ms-md-4 row justify-content-center">
            <div className="col-12 col-md-10 col-lg-6 rounded" >
              <div className="mt-lg-3">&nbsp;</div>
              <div className="text-center text-lg-start">
                <p className="display-6" style={{ fontWeight: 600, color: 'rgb(82, 77, 77)' }}>CLICK HERE <br /> TO UNSUBSCRIBE</p>
                <hr width="140px" style={{ border: '2.5px solid rgb(255, 79, 16)' }} />
              </div>
              <div className="text-center text-lg-start">
                <p style={{ fontSize: '18px', color: 'rgb(41, 0, 0)' }}>The given address will be<br /> unsubscribed from Digiteltechnologi</p>
              </div>
              <div className="mt-2">
                <form className="text-center text-lg-start" onSubmit={handleSubmit}>
                  <div className="mb-3 col-lg-6 text-center text-lg-start ">
                    <input
                      className="form-control small-placeholder"
                      placeholder="Email Address"
                      name="email"
                      type="email"
                      style={{ border: '1px solid rgb(177, 86, 52)' }}
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </div>
                  <div className="mb-3 col-lg-6 text-center text-lg-start ">
                    <input
                      className="form-control small-placeholder"
                      placeholder="Comment"
                      name="comment"
                      type="text"
                      style={{ border: '1px solid rgb(105, 96, 96)' }}
                      value={comment}
                      onChange={handleCommentChange}
                    />
                  </div>
                  <div className="mb-3 text-center text-lg-start">
                    <button type="submit" className="btn" style={{ backgroundColor: 'red', color: '#ffffff', fontWeight: 600 }}>
                      UNSUBSCRIBE
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-10 col-lg-6 order-first order-md-first order-lg-last">
              <img className="img-fluid" src="unsubscribe.png" alt="Unsubscribe" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
