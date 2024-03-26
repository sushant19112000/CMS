import React, { useEffect } from 'react'
import { Navigation } from '../../navigation';
import { Newfooter } from '../../newfooter';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export const DownloadPreview = ({ temp, closeModal }) => {
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
          <Modal.Title>Download Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body> <div className="d-flex flex-column" style={{ minHeight: "100vh", backgroundColor: '#ffffff', boxShadow: '' }}>

          <div style={{ backgroundColor: '#ffffff' }} className='sticky-top'>
            <div className='container'>
              <Navigation />
            </div>
          </div>

          <main className="flex-grow-1" style={{ backgroundColor: '#f3f4f6' }}>
            <div className=''>
              <div className="row justify-content-center mt-4 mb-5">
                <div className="col">
                  <div className=''>


                    <center><img src={bannerPreview} style={{ maxWidth: '100%', marginTop: '10px', width: `${data.imageWidth}`, height: `${data.imageHeight}` }} /></center>

                  </div>

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

