"use client";
import Link from 'next/link';
import useSWR from 'swr';
import { BlogsPagination } from '@/app/components/blogs/blogsPagination';
const fetcher = (url) => fetch(url).then((res) => res.json());
import { useState, useEffect } from 'react'
import { BsSearch, BsX } from 'react-icons/bs'
import { BlogSkeltonPage } from '@/app/components/loadingSkeltons/blogSkeltonPage';


export default function Blogspage() {
    const { newdata, newdataerror } = useSWR('/api/blogCategories', fetcher);
    const { data, error } = useSWR('/api/blogs', fetcher);
    const [searchTerm, setsearchTerm] = useState("")
    const [filteredData, setFilteredData] = useState([]);
    const [inputWidth, setInputWidth] = useState(0);

    const handleSearchIconClick = () => {
        setInputWidth(inputWidth === 0 ? 250 : 0);
    };

    useEffect(() => {
        if (data) {
            const tempData = data.filter(
                (blog) =>
                    blog.title.includes(searchTerm)
            );
            console.log(tempData, 'filter data')
            setFilteredData(tempData);
        }

    }, [data, searchTerm]);
    const handleSearchChange = (e) => {
        setsearchTerm(e.target.value);
    };
    if (error) return <div>Error loading data.</div>;
    if (!data) return <div className=''><BlogSkeltonPage /></div>;
    return (
        <main>
            <div style={{ backgroundColor: '#f8f9fA' }}>
                <div className="container pt-2 " style={{}}>
                    <div className='container pt-4'>
                        
                        <BlogsPagination data={filteredData} />
                    </div>
                </div>
            </div>
        </main>
    )
}

