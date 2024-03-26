import { useState } from "react"


export default function LandingPagePost() {
    const [url, setUrl] = useState("")
    const [title, setTitle] = useState("")
    const [headerLogo, setHeaderLogo] = useState("")
    const [headerLogoFile, setHeaderLogoFile] = useState(null);
    const [assetId, setAssetId] = useState("")
    const [formdata, setFormData] = useState("")
    const [downloadPageUrl, setDownloadPageUrl] = useState("")
    const [content, setContent] = useState("")
    const [logoExists, setLogoExits] = useState(false)
    const [imageUploaded, setImageUploaded] = useState(false)
    const [imageHeight, setImageHeight] = useState('auto')
    const [imageWidth, setImageWidth] = useState('auto')


    const handleHeaderLogoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setHeaderLogoFile(file);
        }
    };

    const uploadFunction =async () => {
        if (!headerLogoFile) return;
        const formData = new FormData();
        formData.append('file', headerLogoFile);
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });
        return response;
    }

  

    const postData = async (fileName) => {
        try{
            const uploadResponse=await uploadFunction()
            if (uploadResponse.ok){
                const response = await fetch('/api/landingpage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        title: title,
                        url: url,
                        assetId: parseInt(assetId),
                        data: "",
                        formdata: formdata,
                        downloadpageurl: downloadPageUrl,
                        content: content,
                        imageUrl: fileName,
                        imageHeight: imageHeight,
                        imageWidth: imageWidth
                    }),
                });
                if (response.ok) {
                    console.log('Header logo name sent to API successfully');
                    // Reset form or perform other actions as needed
                } else {
                    console.error('Failed to send header logo name to API');
                }

            }
            else{
                console.log('Failed to post landing page');
            }

        }
        catch(e){
             console.log(e,'error posting landing page')
        }
    }



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!headerLogoFile) {
            console.log('No header logo selected');
            return;
        }
        try {
            const fileName = headerLogoFile.name;
            // //search if the image is already in the landing page directory if does setLogo exists true else storeImage 
            // const imageExists = await checkImageExists(fileName);
            await postData(fileName);
        } catch (error) {
            console.error('Error storing header logo:', error);
        }
    };
    return (

        <>
            <div className="container">
                <div className="row  mb-3 justify-content-center" >
                    <div className="col-md-10">
                        <div>
                            <h3 style={{ fontWeight: '900' }}>Create landing Page</h3>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="row  mb-3">
                                <div className="col-md-3">
                                    URL:
                                </div>
                                <div className="col" >
                                    <input className="form-control" type="text" value={url} onChange={e => setUrl(e.target.value)} />
                                </div>
                            </div>
                            {/* <label>
                                URL:
                                <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
                            </label><br /> */}

                            <div className="row  mb-3">
                                <div className="col-md-3">
                                    Title:
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />

                                </div>
                            </div>

                            {/* <label>
                                Title:
                                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                            </label><br /> */}

                            <div className="row  mb-3">
                                <div className="col-md-3">
                                    Header Logo:
                                </div>
                                <div className="col">
                                    <input type="file" className="form-control" accept="image/*" onChange={handleHeaderLogoChange} />
                                </div>
                            </div>

                            {/* <label>
                                Header Logo:
                                <input type="file" accept="image/*" onChange={handleHeaderLogoChange} />
                            </label><br /> */}
                            {/* 
                            <label>
                                Logo Height:
                                <input type="text" value={imageHeight} onChange={e => setImageHeight(e.target.value)} />
                            </label><br /> */}

                            <div className="row  mb-3">
                                <div className="col-md-3">
                                    Logo Height:
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" value={imageWidth} onChange={e => setImageWidth(e.target.value)} />
                                </div>
                            </div>

                            <div className="row  mb-3">
                                <div className="col-md-3">
                                    Logo Width:
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" value={imageWidth} onChange={e => setImageWidth(e.target.value)} />
                                </div>
                            </div>

                            {/* <label>
                                Logo Width:
                                <input type="text" value={imageWidth} onChange={e => setImageWidth(e.target.value)} />
                            </label><br /> */}

                            <div className="row  mb-3">
                                <div className="col-md-3">
                                    Asset ID:
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" value={assetId} onChange={e => setAssetId(e.target.value)} />

                                </div>
                            </div>

                            {/* <label>
                                Asset ID:
                                <input type="text" value={assetId} onChange={e => setAssetId(e.target.value)} />
                            </label><br /> */}

                            <div className="row  mb-3">
                                <div className="col-md-3">
                                    Form Data:

                                </div>
                                <div className="col">
                                    <textarea rows={15} value={formdata} className="form-control" onChange={e => setFormData(e.target.value)} />

                                </div>
                            </div>



                            {/* <label>
                                Form Data:
                                <textarea value={formdata} onChange={e => setFormData(e.target.value)} />
                            </label><br /> */}

                            <div className="row  mb-3">
                                <div className="col-md-3">
                                    Download Page URL:
                                </div>
                                <div className="col">
                                    <input type="text" value={downloadPageUrl} className="form-control" onChange={e => setDownloadPageUrl(e.target.value)} />

                                </div>

                            </div>
                            {/* <label>
                                Download Page URL:
                                <input type="text" value={downloadPageUrl} onChange={e => setDownloadPageUrl(e.target.value)} />
                            </label><br /> */}

                            <div className="row  mb-3">
                                <div className="col-md-3">
                                    Content:

                                </div>
                                <div className="col">
                                    <textarea rows={10} value={content} className="form-control" onChange={e => setContent(e.target.value)} />

                                </div>
                            </div>

                            {/* <label>
                                Content:
                                <textarea value={content} onChange={e => setContent(e.target.value)} />
                            </label><br /> */}



                            <button className="btn btn-primary" type="submit">Submit</button>

                        </form>






                    </div>
                </div>



            </div>










        </>



    )
}