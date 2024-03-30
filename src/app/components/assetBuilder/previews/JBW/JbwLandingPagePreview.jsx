import React, { useEffect } from 'react'
import { Navigation } from '../../navigation';
import { Newfooter } from '../../newfooter';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { DynamicForm3 } from "@/app/components/dynamicForm/dynamicForm3";
export const JbwLandingPreview = ({ temp, closeModal }) => {
    const [data, setData] = useState(temp)
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(true);
    const [logoPreview, setLogoPreview] = useState(null)
    const [logo, setLogo] = useState(data.headerLogoFile)

    useEffect(() => {
        convertBlobToFile(logo)
    }, [data])


    const convertBlobToFile = (banner) => {
        console.log(banner)
        if (banner instanceof Blob) {
            const file = new File([banner], `${banner.type}`);
            console.log(file)
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setLogoPreview(reader.result);
                    
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
                    <Modal.Title>Landing Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body> <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: '#ffffff', boxShadow: '' }}>

                    <div style={{ backgroundColor: '#ffffff' }} className='sticky-top'>
                        <div className='container'>
                            <Navigation />
                        </div>
                    </div>

                    <main className="flex-grow-1" style={{ backgroundColor: '#f3f4f6' }}>
                        <div className="row justify-content-center mt-5 mb-5">


                            <div className="col-md-10">
                                <div className="text-center" >
                                    <img src={logoPreview}  style={{ marginBottom: '15px', height: `${data.imageHeight}`, width: `${data.imageWidth}` }} alt={data.title} />
                                </div>
                                <div className="text-center" style={{backgroundColor:'blue',color:'white'}}>
                                    <h3 className='p-3'>{data.title}</h3>
                                </div>

                                <div className="row">
                                    <div className="col-md-5">
                                        <div dangerouslySetInnerHTML={{ __html: data.content }} />
                                    </div>

                                    <DynamicForm3 data={JSON.parse(data.formdata)}  />

                                </div>
                            </div>
                        </div>
                    </main>
                    <Newfooter />

                </div>
                </Modal.Body>
            </Modal>
        </>
    );
}