import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navindicator = () => {
    const router = useRouter();
    const [uniqueUrls, setUniqueUrls] = useState([]);

    useEffect(() => {
        if (router.pathname === '/') {
            setUniqueUrls(['/']);
        } else {
            if (!uniqueUrls.includes(router.pathname)) {
                setUniqueUrls((oldArray) => [...oldArray,router.pathname.slice(1).replace(/\/?\[.*\]$/, '')]);
            }
        }
    }, [router.pathname]);

    return (
        <div className="container  mt-2">
            <nav aria-label=" ms-2 breadcrumb">
                <ol className="breadcrumb">
                    {router.pathname !== '/' &&
                        uniqueUrls.map((url) => (
                            <li className=" me-1" key={url}>
                                {
                                    url == '/' && (
                                        <Link href={url} className='me-2' style={{ textDecoration: 'none', color: 'grey' }}>home  &gt;</Link>
                                    )
                                }
                                {
                                    url != '/' && (
                                        <Link href={url} className="me-2" style={{ textDecoration: 'none', color: 'grey' }}>{url}
                                            
                                            {Object.keys(router.query).map((param) => (
                                                    <span style={{ color: 'black' }}>{`${router.query[param]}`}</span>
                                            ))}
                                            &gt; </Link>
                                    )
                                }







                                

                            </li>
                        ))}
                </ol>
            </nav>
        </div>
    );
};
