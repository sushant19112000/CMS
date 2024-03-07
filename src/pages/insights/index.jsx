"use client";
import Link from 'next/link';
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());
import { useState, useEffect } from 'react'
import { BsSearch, BsX } from 'react-icons/bs'
import { BlogSkeltonPage } from '@/app/components/loadingSkeltons/blogSkeltonPage';
import { InsightsPagination } from '@/app/components/insights/insightsPagination';



export default function Insightspage() {
    const { newdata, newdataerror } = useSWR('/api/insightsCategories', fetcher);
    const { data, error } = useSWR('/api/insights', fetcher);
    const [searchTerm, setsearchTerm] = useState("")
    const [filteredData, setFilteredData] = useState([]);
    const [inputWidth, setInputWidth] = useState(0);

    const handleSearchIconClick = () => {
        setInputWidth(inputWidth === 0 ? 250 : 0);
    };

    useEffect(() => {
        if (data) {
            const filteredData = data.filter(
                (blog) =>
                    blog.title.includes(searchTerm)
            );
            setFilteredData(filteredData);
        }
    }, [data, searchTerm]);
    const handleSearchChange = (e) => {
        setsearchTerm(e.target.value);
    };
    if (error) return <div>Error loading data.</div>;
    if (!data) return <div  className=''><BlogSkeltonPage/></div>;


    return (
        <main>
            <div style={{ backgroundColor: '#f8f9fA' }}>
                <div className="container pt-2">
                    <div className='container pt-4'>

                        <InsightsPagination data={filteredData} />
                    </div>
                </div>
            </div>
        </main>
    )
}


  