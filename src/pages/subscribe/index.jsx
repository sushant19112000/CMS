import React, { useState } from 'react';

export default function Subscribe() {
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [subscriptionStatus, setSubscriptionStatus] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, comment }),
            });

            if (response.ok) {
                setSubscriptionStatus('success');
                // Reset form fields after successful submission
                setEmail('');
                setComment('');
              

            } else {
                setSubscriptionStatus('error');
            }
        } catch (error) {
            console.error('Error occurred:', error);
            setSubscriptionStatus('error');
        }
    };

    return (
        <main>
            <div className="container pt-4">
                <div className="" style={{ marginTop: '40px', marginBottom: '40px' }}>
                    <div className="ms-4 row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-6 text-center text-lg-start" >
                            <div className="mt-lg-3">&nbsp;</div>
                            <div>
                                <p className="display-6" style={{ fontWeight: 600, color: 'rgb(82, 77, 77)' }}>CLICK HERE <br /> TO SUBSCRIBE</p>
                            </div>
                            <div className="text-center text-lg-start">
                                <hr className="" width="140px" style={{ border: '2.5px solid rgb(22, 6, 0)' }} />
                            </div>
                            <div>
                                <p style={{ fontSize: '20px', color: 'rgb(41, 0, 0)' }}>The given address will be<br /> subscribed to Digiteltechnologi</p>
                            </div>
                            <div className="mt-2">
                                <form className="text-center text-lg-start" onSubmit={handleSubmit}>
                                    <div className="mb-3 col-lg-6 text-center text-lg-start">
                                        <input
                                            className="form-control small-placeholder"
                                            placeholder="Email Address"
                                            name="email"
                                            type="email"
                                            style={{ border: '1px solid rgb(177, 86, 52)' }}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3 col-lg-6 text-center text-lg-start">
                                        <input
                                            className="form-control small-placeholder"
                                            placeholder="Comment"
                                            name="comment"
                                            type="text"
                                            style={{ border: '1px solid rgb(105, 96, 96)' }}
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3 text-center text-lg-start">
                                        <button
                                            type="submit"
                                            className="btn"
                                            style={{ backgroundColor: 'rgb(177, 86, 52)', color: '#ffffff', fontWeight: 600 }}
                                        >
                                            SUBSCRIBE
                                        </button>
                                    </div>
                                </form>
                                {subscriptionStatus === 'success' && <p>Subscription successful!</p>}
                                {subscriptionStatus === 'error' && <p>Subscription failed. Please try again.</p>}
                            </div>
                        </div>
                        <div className="col-12 col-md-10 col-lg-6 order-first order-md-first order-lg-last">
                            <img className="img-fluid" src="subscribe.png" alt="Subscribe" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
