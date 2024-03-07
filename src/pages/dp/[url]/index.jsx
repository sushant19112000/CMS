import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function DownloadPage({ data, error }){
    if (!data) return <div className='container text-center'>Loading...</div>;
    return (
           <div>
            {data.title}
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
