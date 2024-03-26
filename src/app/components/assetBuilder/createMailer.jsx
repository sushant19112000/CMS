import { campaignState } from '@/app/atoms/campaign';
import { landingPageState } from '@/app/atoms/landingpage';
import { mailerState } from '@/app/atoms/mailer';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { MailerPreview } from './previews/mailerPreview';
export const CreateMailer = ({ nextTab, clear }) => {
    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("");
    const [banner, setBanner] = useState("");
    const [bannerUrl, setBannerUrl] = useState("");
    const [bannerPreview, setBannerPreview] = useState("")
    const [imageHeight, setImageHeight] = useState('auto')
    const [imageWidth, setImageWidth] = useState('auto')
    const [mailer, setMailer] = useRecoilState(mailerState)

    const [previewTitle, setPreviewTitle] = useState("")
    const [previewImage, setPreviewImage] = useState("")
    const [previewUrl, setPreviewUrl] = useState("")
    const [showMailerPreview, setShowMailerPreview] = useState(false)

    const closeModal = () => {
        setShowMailerPreview(false)
    }

    const showModal = () => {
        if (mailer.title) {
            setShowMailerPreview(true)
        }
    }

    useEffect(() => {
        setPreviewTitle(mailer.title)
        setPreviewImage(mailer.imageUrl)
        setPreviewUrl(mailer.url)
    }, [mailer])



    const handleBannerChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setBanner(file);
            setBannerUrl(file.name);
            const reader = new FileReader();
            reader.onloadend = () => {
                setBannerPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMailer({
            title: title,
            url: url,
            campaignCode: "",
            landingPageUrl: "",
            content: content,
            imageUrl: bannerUrl,
            imageHeight: imageHeight,
            imageWidth: imageWidth,
            banner: new Blob([banner], { type: `${banner.type}` }),
        })

        // Perform submission logic here
    };
    const handleNext = () => {
        nextTab('upload')
    }

    const handleClear = () => {
        setMailer({
            title: "",
            url: "",
            campaignCode: "",
            landingPageUrl: "",
            content: "",
            imageUrl: "",
            imageHeight: "",
            imageWidth: "",
            banner: "",
        })
        clear('mailer')
        // Perform submission logic here
    };


    return (
        <div className="container">
            <div className="row mb-3 justify-content-center">


                <div className="col-md-12">
                    <div className="text-center mb-4">
                        <h3 style={{ fontWeight: '900' }}>Create Mailer</h3>
                    </div>
                    <div>
                        {
                            previewTitle && (
                                <div>

                                    <div className="d-flex">
                                        <div>
                                            <button className='btn btn-primary' onClick={showModal}>
                                                Preview
                                            </button>

                                        </div>
                                        <div className='ms-auto'>

                                            <button className='btn btn-danger' onClick={handleClear}> Clear Data</button>

                                        </div>

                                    </div>



                                    <hr></hr>
                                </div>
                            )
                        }
                        {
                            showMailerPreview && previewTitle && (
                                <>
                                    <MailerPreview temp={mailer} closeModal={closeModal} />
                                </>
                            )
                        }
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-3">
                                Url:
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={url} onChange={e => setUrl(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-3">
                                Title:
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-3">
                                Content:
                            </div>
                            <div className="col">
                                <textarea rows={5} className="form-control" value={content} onChange={e => setContent(e.target.value)} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-3">
                                Banner:
                            </div>
                            <div className="col">
                                <input type="file" className="form-control" accept="image/*" onChange={handleBannerChange} />
                                {bannerPreview && <img src={bannerPreview} alt="Banner Preview" style={{ maxWidth: '100%', marginTop: '10px', width: `${imageWidth}`, height: `${imageHeight}` }} required />}

                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-3">
                                Banner Width
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={imageWidth} onChange={((e) => setImageWidth(e.target.value))} required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-3">
                                Banner Height
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={imageHeight} onChange={((e) => setImageHeight(e.target.value))} required />
                            </div>
                        </div>

                        <div className="d-flex">
                            <div >
                                <button className="btn btn-primary" style={{ width: '120px' }} type="submit">Save</button>
                            </div>
                            <div className='ms-auto'>
                                <button className="btn " style={{ width: '120px', backgroundColor: 'orangered', color: 'white' }} onClick={handleNext}>Next</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
