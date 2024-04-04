import React, { use, useEffect } from 'react'
import { Navigation } from '../../navigation';
import { Newfooter } from '../../newfooter';
import Link from 'next/link';
import { useState } from 'react';

export const DownloadPageTemplate_1 = ({ temp }) => {
    const [data, setData] = useState(temp)
    const [pdfSrc, setPdfSrc] = useState("")
    const [link, setLink] = useState("")

    useEffect(() => {
        setData(temp)
        if (data.pdfSrc != "") {
            setPdfSrc(data.pdfSrc)
        }
        else {
            setLink(data.link)
        }

    }, [temp, data])

    return (
        <>
            <div>

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
                                    <center>
                                        <a href={pdfSrc != "" ? `/campaign/whitepapers/${pdfSrc}` : link} ><img src={`/campaign/downloadbanners/${imgUrl}`} style={{ maxWidth: '100%', marginTop: '10px', width: `${data.imageWidth}`, height: `${data.imageHeight}` }} /></a>
                                        </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Newfooter />

            </div >

        </>
    );
}

