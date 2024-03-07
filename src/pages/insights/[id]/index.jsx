import { useState, useEffect } from 'react';
import useSWR from 'swr';
import NextLink from 'next/link';
import { Recommandation } from '@/app/components/recommandation';
import { convertToJson } from '@/app/middleware/convertToJson';
import InsightSearchComponent from '@/app/components/insights/insightSearchComponent';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function BlogPage({ data, error }) {
    const [content,setContent]=useState([])
    useEffect(()=>{
        if (data.blog.content && data.blog.content.length > 0)
             setContent(convertToJson(data.blog.content))
      },[data])
    if (error) return <div>Error loading data.</div>;
    if (!data) return <div>Loading...</div>;
    
    return (
        <div>


            <div className="container" style={{ marginTop: '50px' }}>
                <div className="d-md-flex ">
                    <div className="me-md-5">
                        <div className=''>
                            <div className="">
                                <span className='' style={{ fontSize: '35px', fontWeight: '600' }}>
                                    {data.blog.title}
                                </span>
                            </div>
                            <div className="mb-4">
                                <span style={{ fontSize: '14px' }}>{data.blog.date} | {data.blog.category.name}</span>
                            </div>
                            <div className='mb-4'>
                                <p style={{textAlign:'justify' }} >
                                    {data.blog.paragraph !="" && data.blog.paragraph}
                                </p>
                            </div>

                            <div className='mb-4'>
                                <img src={`/resources/insights/${data.blog.img}`} className='img-fluid rounded' />
                            </div>

                            <div className='mt-3'>
                                {content.length>0 && content.map((item, index) => {
                                    const keys = Object.keys(item);
                                    const values = Object.values(item);
                                    return (
                                        <div key={index}>
                                            {keys.map((key, subIndex) => (
                                                <div key={subIndex}>
                                                    <h4>{key}</h4>
                                                    <p className='' style={{textAlign:'justify'}}>{values[subIndex]}</p>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>



                        </div>
                    </div>
                    <div className="col-12  col-md-3" style={{ marginTop: '15px', padding: 0 }} >

                        <div className="row justify-content-center" style={{ padding: 'none' }} >
                            <div className='col-8 col-md-12'>
                                <div className='mb-2'>
                                    <InsightSearchComponent />
                                </div>
                                <div className="mb-3">
                                    <span style={{ fontSize: '20px' }}>Recommeded</span>

                                </div>
                                <div className="col">
                                    <Recommandation type={"insights"} category={data.blog.category} Id={data.blog.id} />



                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    try {
        const { id } = context.query; 
        const apiUrl = `http://localhost:5000/api/insights/${id}`;
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
