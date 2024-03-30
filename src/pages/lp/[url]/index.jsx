import Link from "next/link";
import { formData } from "@/app/data/formdata";
import { formData2 } from "@/app/data/fromdata2";
import DynamicForm from "@/app/components/dynamicForm/dynamicForm";
import DynamicForm2 from "@/app/components/dynamicForm/dynamicForm2";
import { DynamicForm3 } from "@/app/components/dynamicForm/dynamicForm3";



const fetcher = (url) => fetch(url).then((res) => res.json());
export default function LandingPage({ data, error }) {
    if (!data) return <div className='container text-center'>Loading...</div>;
    if (error) return <div className='container text-center'>Page Not Found</div>;
    return (
        <div className="row justify-content-center mt-5 mb-5">


            <div className="col-md-10">
                <div className="text-center" >
                    <img src={`/campaign/logos/${data.logoSrc}`} style={{ marginBottom: '15px',height:`${data.imageHeight}`,width:`${data.imageWidth}` }} alt={data.title} />
                </div>

                <div className="row">
                    <div className="col-md-5">
                        <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    </div>

                    <DynamicForm3 data={JSON.parse(data.formdata)} landingpageurl={data.url} downloadpageurl={data.downloadpageurl} optin={data.optin} privacy={JSON.parse(data.privacy)} />

                </div>
            </div>
        </div>

    )
}

export async function getServerSideProps(context) {
    try {
        const { url } = context.query;
        const apiUrl = `http://localhost:5000/api/landingpage/${url}`;
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
