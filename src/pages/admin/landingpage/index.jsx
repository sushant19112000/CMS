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

    const storeImage = async (fileName) => {
        // Store the file in the public/landingpage directory
        try {
            await fetch(`/landingpage/${fileName}`, {
                method: 'PUT',
                body: headerLogoFile,
            });

        }
        catch (e) {
            console.log(error)
        }
    }

    const checkImageExists = async (fileName) => {
        const imageExistsResponse = await fetch(`/api/landingpage/image/${fileName}`, {
            method: "GET"
        })

        return imageExistsResponse.ok ? imageExistsResponse.image : false;
    }

    const postData = async (fileName) => {
        const response = await fetch('/api/storeHeaderLogo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                url: url,
                assetId: assetId,
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



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!headerLogoFile) {
            console.log('No header logo selected');
            return;
        }


        try {
            const fileName = headerLogoFile.name;
            //search if the image is already in the landing page directory if does setLogo exists true else storeImage 
            const imageExists = await checkImageExists(fileName);
            if (imageExists) {
                await storeImage(fileName);
            } else {
                setLogoExits(true);
            }
            await postData(fileName);
        } catch (error) {
            console.error('Error storing header logo:', error);
        }
    };
    return (

        <>
            <div className="container">
                <div className="row justify-content-center">

                    <div className="col-md-10">
                        <form onSubmit={handleSubmit}>
                            <label>
                                URL:
                                <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
                            </label><br />

                            <label>
                                Title:
                                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                            </label><br />

                            <label>
                                Header Logo:
                                <input type="file" accept="image/*" onChange={handleHeaderLogoChange} />
                            </label><br />

                            <label>
                                Logo Height:
                                <input type="text" value={imageHeight} onChange={e => setImageHeight(e.target.value)} />
                            </label><br />

                            <label>
                                Logo Width:
                                <input type="text" value={imageWidth} onChange={e => setImageWidth(e.target.value)} />
                            </label><br />

                            <label>
                                Asset ID:
                                <input type="text" value={assetId} onChange={e => setAssetId(e.target.value)} />
                            </label><br />

                            <label>
                                Form Data:
                                <input type="text" value={formData} onChange={e => setFormData(e.target.value)} />
                            </label><br />

                            <label>
                                Download Page URL:
                                <input type="text" value={downloadPageUrl} onChange={e => setDownloadPageUrl(e.target.value)} />
                            </label><br />

                            <label>
                                Content:
                                <textarea value={content} onChange={e => setContent(e.target.value)} />
                            </label><br />




                            <input type="submit" value="Submit" />
                        </form>






                    </div>
                </div>



            </div>










        </>



    )
}