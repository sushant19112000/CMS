import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function DownloadPage({ data, error }) {
    if (!data) return <div className='container text-center'>Loading...</div>;
    return (
        <div className=''>
            <div className="row justify-content-center mt-4 mb-5">
                <div className="col">
                    <div className=''>


                        <center><img src={`/campaign/downloadbanners/${data.imageUrl}`} style={{ maxWidth: '100%', marginTop: '10px', width: `${data.imageWidth}`, height: `${data.imageHeight}` }} /></center>
                    </div>

                </div>

            </div>
        </div>



 
    )
}

export async function getServerSideProps(context) {
    try {
        const { url } = context.query;
        const apiUrl = `http://localhost:5000/api/downloadpage/${url}`;
        const data = await fetcher(apiUrl);
        return {
            props: { data },
        };
    } catch (error) {
        return {
            props: { error: true },
        };
    }
}
