import { campaignState } from '@/app/atoms/campaign';
import { landingPageState } from '@/app/atoms/landingpage';
import { mailerState } from '@/app/atoms/mailer';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { LpmMailerPreview } from './previews/LPM/LpmMailerPreview';
import { JbwMailerPreview } from './previews/JBW/JbwMailerPreview';
import { MailerPreview } from './previews/mailerPreview';
import { Button } from 'react-bootstrap';
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
    const [landingpage, setLandingPage] = useRecoilState(landingPageState)
    const [previewTitle, setPreviewTitle] = useState("")
    const [previewImage, setPreviewImage] = useState("")
    const [previewUrl, setPreviewUrl] = useState("")
    const [logoWidth, setLogoWidth] = useState("auto")
    const [logoHeight, setLogoHeight] = useState("auto")
    const [showMailerPreview, setShowMailerPreview] = useState(false)
    const [unsubscribe, setUnsubscribe] = useState("https://martechavenue.com/unsubscribe-page")
    const [updateProfile, setUpdateProfile] = useState("https://martechavenue.com/update-your-profile-page")
    const [privacy, setPrivacy] = useState("https://martechavenue.com/privacy-policy")
    const [footer, setFooter] = useState("561 7th Ave 4th fl, New York NY 10018, United States")
    const [previewDisabled, setPreviewDisabled] = useState(true)
    const [selectedTemplate, setSelectedTemplate] = useState("")
    const [showJbwMailer, setShowJbwMailer] = useState(false)
    const [showLpmMailer, setShowLpmMailer] = useState(false)
    const [alert, setAlert] = useState(false)
   

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
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
            logo: landingpage.headerLogoFile,
            logoHeight: logoHeight,
            logoWidth: logoWidth,
            unsubscribe: unsubscribe,
            privacyLink: privacy,
            updateProfile: updateProfile,
            footer: footer

        })
        setPreviewDisabled(false)
        scrollToTop()

        // Perform submission logic here
    };
    const handleNext = () => {
        selectedTemplate != "" ? nextTab('upload') : setAlert(true) && scrollToTop();
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
            logoHeight: '',
            logoWidth: '',
            logoHeight: "auto",
            logoWidth: "auto",
            unsubscribe: "https://martechavenue.com/unsubscribe-page",
            privacyLink: "https://martechavenue.com/privacy-policy",
            updateProfile: "https://martechavenue.com/update-your-profile-page",
            footer: "561 7th Ave 4th fl, New York NY 10018, United States"

        })
        setPreviewDisabled(true)
        clear('mailer')
        // Perform submission logic here
    };

    const closeJbwModal = () => {
        setShowJbwMailer(false)
    }

    const closeLpmModal = () => {
        setShowLpmMailer(false)
    }
   
    

    return (
        <div className="container">
            <div className="row mb-3 justify-content-center">


                <div className="col-md-12">
                    <div className="text-center mb-4">
                        <h3 style={{ fontWeight: '900' }}>Create Mailer</h3>
                    </div>

                    <div className="d-flex mb-3" >

                        <div className="row " >
                            <div className="col-md-5" >
                                <div className="row" style={{ margin: 0, padding: 0, backgroundColor: 'white', border: '1px solid grey' }}>
                                    <h4>JBW</h4>
                                    <div className="col-md-6">
                                        <div className="row" >
                                            <div className="col-md-1 pt-1 " style={{ border: '0' }}>

                                                <input className="" onChange={((e) => setSelectedTemplate('jbw'))} type="checkbox" label="Checkbox Label" disabled={previewDisabled} />

                                            </div>
                                            <div className="col" style={{ paddingTop: '0.3rem' }}>
                                                <span > Select</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 text-start">
                                        <Button variant="light" onClick={(() => setShowJbwMailer(true))} disabled={previewDisabled}>
                                            Preview
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">

                                <div className="row" style={{ margin: 0, padding: 0, backgroundColor: 'white', border: '1px solid grey' }}>
                                    <h4>LPM </h4>
                                    <div className="col-md-6">
                                        <div className="row" >
                                            <div className="col-md-1 pt-1 " style={{ border: '0' }}>

                                                <input className="" onChange={((e) => setSelectedTemplate('lpm'))} type="checkbox" label="Checkbox Label" disabled={previewDisabled} />

                                            </div>
                                            <div className="col" style={{ paddingTop: '0.3rem' }}>
                                                <span > Select</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5 text-start">
                                        <Button variant="light" onClick={(() => (setShowLpmMailer(true)))} disabled={previewDisabled}>
                                            Preview
                                        </Button>
                                    </div>

                                </div>


                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-danger" disabled={previewDisabled} onClick={handleClear}>ClearData</button>

                            </div>


                        </div>

                    </div>
                    {/* <div>
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
                    </div> */}

                    {
                        showJbwMailer && !previewDisabled && (
                            <>
                                <JbwMailerPreview temp={mailer} closeModal={closeJbwModal} />
                            </>
                        )
                    }

                    {
                        showLpmMailer && !previewDisabled && (
                            <>
                                <LpmMailerPreview temp={mailer} closeModal={closeLpmModal} />
                            </>
                        )
                    }

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

                        <div className="row mb-3">
                            <div className="col-md-3">
                                Logo Height
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={logoHeight} onChange={((e) => setLogoHeight(e.target.value))} required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-3">
                                Logo Width
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={logoWidth} onChange={((e) => setLogoWidth(e.target.value))} required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-3">
                                Footer
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={footer} onChange={((e) => setFooter(e.target.value))} required />
                            </div>
                        </div>


                        <div className="row mb-3">
                            <div className="col-md-3">
                                Logo Width
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={logoWidth} onChange={((e) => setLogoWidth(e.target.value))} required />
                            </div>
                        </div>


                        <div className="row mb-3">
                            <div className="col-md-3">
                                Unsubscribe
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={unsubscribe} onChange={((e) => setUnsubscribe(e.target.value))} required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-3">
                                Privacy
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={privacy} onChange={((e) => setUnsubscribe(e.target.value))} required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-3">
                                Update Profile
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value={updateProfile} onChange={((e) => setUpdateProfile(e.target.value))} required />
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
