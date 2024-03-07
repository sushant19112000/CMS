"use client";
import Link from 'next/link';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { BlogSkeltonPage } from '@/app/components/loadingSkeltons/blogSkeltonPage';
import NextLink from 'next/link';
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Search() {
    const router = useRouter();
    const [pageNumber, setPageNumber] = useState(0)
    const { searchTerm } = router.query;
    const { data, error } = useSWR(`/api/search/${searchTerm}/${pageNumber}`, fetcher);
    const [blogs, setBlogs] = useState([])
    const [whitepapers, setWhitepapers] = useState([])
    const [insights, setInsights] = useState([])
    const [casestudies, setCasestudies] = useState([])
    const [research, setResearch] = useState([])

    useEffect(() => {
        if (data) {
            setBlogs(data.blogs)
            setInsights(data.insights)
            setCasestudies(data.caseStudies)
            setWhitepapers(data.whitepapers)
            setResearch(data.research)
        }
    }, [data])

    if (error) return <div>Error loading data.</div>;
    if (!data) return <div className=''><BlogSkeltonPage /></div>;

    console.log(data)
    return (
        <div className="container mt-4 mb-4">
            <h4 className='mb-4 '>Search Results for "{searchTerm}"</h4>
            <div className="row justify-content-center justify-content-lg-start">
                {
                    blogs.length > 0 && (
                        <h4 className='text-center text-md-start mb-2'>Blogs</h4>
                    )
                }
                {blogs.length > 0 && blogs.map((blog) => (
                    <div className="col-9 col-md-6 col-lg-3 mb-3" key={blog.id}>
                        <div className="card rounded ms-2 ms-md-0" style={{ margin: 0, border: "0", padding: 0, backgroundColor: 'transparent' }}>
                            <picture className="blogimg rounded" style={{ objectFit: 'contain', height: '180px' }}>
                                <img className="rounded" src={`/resources/blogs/${blog.img}`} alt="Card image cap" style={{ width: '100%', height: '100%' }} />
                             
                            </picture>
                            <div className="mt-1">
                                    <NextLink href={`/blogs/${blog.id}`} passHref style={{ textDecoration: "none", color: 'black' }}>
                                        <p style={{ fontSize: '15px', fontWeight: 600 }}>{blog.title}</p>
                                    </NextLink>
                            </div>
                            {/* <div className='mt-2 mb-1'>
                <p style={{ fontSize: "12px", color: 'Navy Blue', fontWeight: '600' }}>{blog.author}</p>
              </div> */}

                        </div>
                    </div>

                ))}

                {
                    insights.length > 0 && (
                        <h4 className='text-center text-md-start mb-2'>Insights</h4>
                    )
                }

                {insights.length > 0 && insights.map((blog) => (
                    <div className="col-9 col-md-6 col-lg-3 mb-3" key={blog.id}>
                        <div className="card rounded ms-2 ms-md-0" style={{ margin: 0, border: "0", padding: 0, backgroundColor: 'transparent' }}>
                            <picture className="blogimg rounded" style={{ objectFit: 'contain', height: '180px' }}>
                                <img className="rounded" src={`/resources/insights/${blog.img}`} alt="Card image cap" style={{ width: '100%', height: '100%' }} />
                                
                            </picture>
                            <div className="mt-1">
                                    <NextLink href={`/blogs/${blog.id}`} passHref style={{ textDecoration: "none", color: 'black' }}>
                                        <p style={{ fontSize: '15px', fontWeight: 600 }}>{blog.title}</p>
                                    </NextLink>
                            </div>
                            {/* <div className='mt-2 mb-1'>
                <p style={{ fontSize: "12px", color: 'Navy Blue', fontWeight: '600' }}>{blog.author}</p>
              </div> */}

                        </div>
                    </div>
                ))}

                {
                    whitepapers.length > 0 && (
                        <h4 className='text-center text-md-start mb-2'>Whitepapers</h4>
                    )
                }
                
                {whitepapers.length > 0 && whitepapers.map((blog) => (
                    <div className="col-9 col-md-6 col-lg-3 mb-3" key={blog.id}>
                        <div className="card rounded ms-2 ms-md-0" style={{ margin: 0, border: "0", padding: 0, backgroundColor: 'transparent' }}>
                            <picture className="blogimg rounded" style={{ objectFit: 'contain', height: '180px' }}>
                                <img className="rounded" src={`/resources/whitepaper/${blog.img}`} alt="Card image cap" style={{ width: '100%', height: '100%' }} />
                              
                            </picture>
                            <div className="mt-1">
                                    <NextLink href={`/blogs/${blog.id}`} passHref style={{ textDecoration: "none", color: 'black' }}>
                                        <p style={{ fontSize: '15px', fontWeight: 600 }}>{blog.title}</p>
                                    </NextLink>
                            </div>
                            {/* <div className='mt-2 mb-1'>
                <p style={{ fontSize: "12px", color: 'Navy Blue', fontWeight: '600' }}>{blog.author}</p>
              </div> */}

                        </div>
                    </div>
                ))}


                {
                    casestudies.length > 0 && (
                        <h4 className='text-center text-md-start mb-2'>Casestudies</h4>
                    )
                }

                {casestudies.length > 0 && casestudies.map((blog) => (
                    <div className="col-9 col-md-6 col-lg-3 mb-3" key={blog.id}>
                        <div className="card rounded ms-2 ms-md-0" style={{ margin: 0, border: "0", padding: 0, backgroundColor: 'transparent' }}>
                            <picture className="blogimg rounded" style={{ objectFit: 'contain', height: '180px' }}>
                                <img className="rounded" src={`/resources/casestudies/${blog.img}`} alt="Card image cap" style={{ width: '100%', height: '100%' }} />
                            </picture>
                            <div className="">
                                <NextLink href={`/blogs/${blog.id}`} passHref style={{ textDecoration: "none", color: 'black' }}>
                                    <p style={{ fontSize: '15px', fontWeight: 600 }}>{blog.title}</p>
                                </NextLink>
                            </div>
                            {/* <div className='mt-2 mb-1'>
                <p style={{ fontSize: "12px", color: 'Navy Blue', fontWeight: '600' }}>{blog.author}</p>
              </div> */}

                        </div>
                    </div>
                ))}


                {
                    research.length > 0 && (
                        <h4 className='text-center text-md-start mb-2'>Research</h4>
                    )
                }

                {research.length > 0 && research.map((blog) => (
                    <div className="col-9 col-md-6 col-lg-3 mb-3" key={blog.id}>
                        <div className="card rounded ms-2 ms-md-0" style={{ margin: 0, border: "0", padding: 0, backgroundColor: 'transparent' }}>
                            <picture className="blogimg rounded" style={{ objectFit: 'contain', height: '180px' }}>
                                <img className="rounded" src={`/resources/research/${blog.img}`} alt="Card image cap" style={{ width: '100%', height: '100%' }} />
                            </picture>
                            <div className="">
                                <NextLink href={`/blogs/${blog.id}`} passHref style={{ textDecoration: "none", color: 'black' }}>
                                    <p style={{ fontSize: '15px', fontWeight: 600 }}>{blog.title}</p>
                                </NextLink>
                            </div>
                            {/* <div className='mt-2 mb-1'>
                <p style={{ fontSize: "12px", color: 'Navy Blue', fontWeight: '600' }}>{blog.author}</p>
              </div> */}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}










