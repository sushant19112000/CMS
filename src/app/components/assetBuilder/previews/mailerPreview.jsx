import React, { useEffect } from 'react'
import { Navigation } from '../../navigation';
import { Newfooter } from '../../newfooter';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export const MailerPreview = ({ temp, closeModal }) => {
    const [data, setData] = useState(temp)
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(true);
    const [bannerPreview, setBannerPreview] = useState(null)
    const [banner, setBanner] = useState(data.banner)

    useEffect(() => {
        convertBlobToFile(data.banner)
        console.log('use Effect ')
    }, [data])

    useEffect(() => {
        console.log(data)
    }, [bannerPreview, data])


    const convertBlobToFile = (banner) => {
        console.log(banner)
        if (banner instanceof Blob) {
            const file = new File([banner], `${banner.type}`);
            console.log(file)
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setBannerPreview(reader.result);
                    console.log(bannerPreview, 'banner preview')
                };
                reader.readAsDataURL(file);
            }

            // Verify the File object
        }

    }
    const handleClose = () => { setShow(false); closeModal() }

    const handleShow = () => { setShow(true); }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

            <Modal show={show} onHide={handleClose} fullscreen={fullscreen}>
                <Modal.Header closeButton>
                   <Modal.Title>
                    Mailer Preview
                   </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#f3f4f6' }}>
                    <div className="" style={{ minHeight: "100vh", backgroundColor: '#f3f4f6', boxShadow: '' }}>
                        <main className="row justify-content-center" style={{ backgroundColor: '#f3f4f6', margin: '0px', padding: '0' }}>
                            <div className='col-md-7' style={{ width: data.imageWidth, minHeight: "100vh", backgroundColor: 'white', padding: '0', margin: '0' }}>
                                <div style={{ width: data.imageWidth }}>
                                    <div>
                                        <img src={bannerPreview} style={{ maxWidth: '100%', width: `${data.imageWidth}`, height: `${data.imageHeight}` }} />

                                    </div>

                                    <div className='p-3'>
                                        <div style={{fontSize:'12px',color:'black'}} dangerouslySetInnerHTML={{ __html: data.content }} />

                                    </div>

                                    <div className="pt-2 pb-3 ps-3 pe-3">
                                        <button className='btn btn-primary' style={{ width: '130px' }}>Download</button>

                                    </div>

                                    <div className="text-center" style={{ fontSize: '11px',color:'black' }}>
                                        <div className='mb-2'>
                                            <span  >This email was sent by Martech Avenue </span>
                                        </div>
                                        <div className='mb-2'>
                                            <span  >561 7th Ave 4th fl, New York NY 10018, United States</span>
                                        </div>
                                        <div className='mb-2'>
                                            <span >Click here to unsubscribe | Update your profile | Privacy Policy</span>
                                        </div>
                                    </div>





                                </div>






                            </div>
                        </main>


                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}