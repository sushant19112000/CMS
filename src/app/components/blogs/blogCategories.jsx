import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const BlogCategoriesLg = () => {
    const { data, error } = useSWR('/api/blogCategories', fetcher);
    console.log(data,"lg")
    if (error) return <div>Error loading data.</div>;
    return (
        <div className='col-2 d-none d-md-none d-lg-block'>
            <ul className="list-unstyled">
                {data && data.blogCategories.map((category) => (
                    <li key={category.id}><Link href={`/blogs/category/${category.name}`} style={{ textDecoration: 'none', color: "black" }}>{category.name}</Link></li>
                ))}
            </ul>
        </div>
    );
};

export const BlogCategoriesSm = () => {
    const { data, error } = useSWR('/api/blogCategories', fetcher);

    if (error) return <div>Error loading data.</div>;

    return (
        <>
            <div className="position-relative d-lg-none">
                <button
                    className="btn btn-light"
                    style={{border:0}}
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#categoryOffcanvas"
                    aria-controls="categoryOffcanvas"
                >
                    Categories
                </button>

                <div
                    className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="categoryOffcanvas"
                >
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">Categories</h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="list-unstyled">
                            {data &&
                                data.blogCategories.map((category) => (
                                    <li key={category.id}>
                                        <Link href={`/blogs/category/${category.name}`} style={{ textDecoration: 'none', color: "black" }} className="dropdown-item">
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};
