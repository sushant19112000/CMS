import React, { useState } from 'react'
import useSWR from 'swr';
import NextLink from 'next/link';


const fetcher = (url) => fetch(url).then((res) => res.json()); 


export const Recommandation = ({category,type,Id}) => {
  const { data, error } = useSWR(`/api/${type}/category/${category.name}`, fetcher);
  if (error) return <div>Error loading data.</div>;
  if (!data) return <div>Loading...</div>;
  
  data.blogs = data.blogs.filter(blog => blog.id !== Id);
  const recommendedBlogs = data.blogs.slice(0, 3);
  return (
        <>
        {recommendedBlogs.map((blog)=>(
             <div className="col-md-12 mb-3" key={blog.id} style={{margin:0,padding:0}}>
                <div className="card rounded " style={{border: "0",margin:0,padding:0, backgroundColor: 'transparent'}}>
                <picture >
                <img className="img-fluid rounded" src={`/resources/${type}/${blog.img}`} alt="Card image cap" style={{width:'100%',height:'150px'}}  />
                </picture>
                <div>
                  <span style={{ fontSize: "small", color: 'Navy Blue', fontWeight: '600' }}>{blog.author}</span>
                </div>
                <div className="">
                  <NextLink href={`/${type}/${blog.id}`} passHref style={{textDecoration:"none",color:'black'}}>
                    <span style={{ fontSize: 'medium', fontWeight: 600 }}>{blog.title}</span>
                  </NextLink>
                </div>
              </div>
             </div>
        ))}
        </>
  )
  ;
}
