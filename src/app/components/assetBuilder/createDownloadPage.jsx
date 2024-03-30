import { campaignState } from '@/app/atoms/campaign';
import { downloadPageState } from '@/app/atoms/downloadpage';
import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil'
import { DownloadPreview } from './previews/downloadPagePreview';
export const CreateDownloadPage = ({ nextTab, clear }) => {
  const [download, setDownload] = useRecoilState(downloadPageState)
  const [title, setTitle] = useState("");
  const [bannerSrc, setBannerSrc] = useState("");
  const [banner, setBanner] = useState(null);
  const [pdfFile, setPdfFile] = useState(null)
  const [pdfSrc, setPdfSrc] = useState("");
  const [link, setLink] = useState("");
  const [bannerPreview, setBannerPreview] = useState("")
  const [imageHeight, setImageHeight] = useState('auto')
  const [imageWidth, setImageWidth] = useState('auto')
  const [url, setUrl] = useState("")
  const [showDownloadPreview, setShowDownloadPreview] = useState(false)



  const [previewTitle, setPreviewTitle] = useState("")
  const [previewImage, setPreviewImage] = useState("")
  const [previewPdf, setPreviewPdf] = useState("")

  const closeModal = () => {
    setShowDownloadPreview(false)
  }

  const showModal = () => {
    if (download.title) {
      setShowDownloadPreview(true)
    }
  }


  useEffect(() => {
    setPreviewTitle(download.title)
    setPreviewImage(download.imageUrl)
    setPreviewPdf(download.pdfSrc)
  }, [download])


  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBanner(file);
      setBannerSrc(file.name)
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePdfChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setPdfFile(file)
      setPdfSrc(file.name)

    }
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    setDownload({
      title: title,
      url: url,
      campaignCode: "",
      banner: new Blob([banner], { type: `${banner.type}` }),
      imageUrl: bannerSrc,
      imageHeight: imageHeight,
      imageWidth: imageWidth,
      pdfSrc: pdfSrc,
      link: link,
      pdf: pdfFile!=null?new Blob([pdfFile], { type: pdfFile.type }):"",
    })
    // Perform submission logic here
  };

  const handleNext = () => {
    nextTab('landingpage')
  }

  const handleClearSelection = () => {
    setDownload({
      title: "",
      url: "",
      campaignCode: "",
      imageUrl: "",
      imageHeight: "",
      imageWidth: "",
    })
    clear('downloadpage')
  }

  return (
    <div className="container">
      <div className="row mb-3 justify-content-center">
        <div className="col-md-12">
          <div className="text-center mb-1">
            <h3 style={{ fontWeight: '900' }}>Create Download Page</h3>
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

                      <button className='btn btn-danger' onClick={handleClearSelection}> Clear Data</button>

                    </div>

                  </div>
               


                  <hr></hr>
                </div>
              )
            }
            {
              showDownloadPreview && previewTitle && (
                <>
                  <DownloadPreview temp={{ banner: download.banner, pdf: download.pdf, imageWidth: imageWidth, imageHeight: imageHeight }} closeModal={closeModal} />
                </>
              )
            }
          </div>
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-3">
                Url
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
                Banner:
              </div>
              <div className="col">
                <input type="file" className="form-control" accept="image/*" onChange={handleBannerChange} required />
                {bannerPreview && <img src={bannerPreview} alt="Banner Preview" style={{ maxWidth: '100%', marginTop: '10px', width: `${imageWidth}`, height: `${imageHeight}` }} />}

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
                PDF
              </div>
              <div className="col">
                <input type="file" className="form-control" accept='*' onChange={handlePdfChange} />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-3">
                Link:
              </div>
              <div className="col">
                <input type="text" className="form-control" value={link} onChange={e => setLink(e.target.value)} />
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
