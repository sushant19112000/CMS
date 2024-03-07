import Link from "next/link";



const fetcher = (url) => fetch(url).then((res) => res.json());
export default function LandingPage({ data, error }){
    if (!data) return <div className='container text-center'>Loading...</div>;
    console.log(data)
    return (
           <div>
            {data.title}

            <Link href={`/lp/${data.landingpageurl}`} passHref style={{ textDecoration: "none", color: 'black' }}>
               Landing Page
            </Link>
           </div>

    )
}

export async function getServerSideProps(context) {
    try {
        const { url } = context.query; 
        const apiUrl = `http://localhost:5000/api/mailer/${url}`;
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
