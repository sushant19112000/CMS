import React from 'react';
import { useState } from 'react';
import NextLink from 'next/link';
import { convertToJson } from '@/app/middleware/convertToJson';
import {useWindowSize} from "rooks/dist/esm/hooks/useWindowSize"

export const CaseStudiesPagination = ({ data }) => {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = data.slice(indexOfFirstBlog, indexOfLastBlog);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="">
        <div className="row justify-content-center justify-content-lg-start">
          {currentBlogs.map((blog) => (
            <div className="col-11 col-md-6 col-lg-4 mb-3" key={blog.id}>
              <div className="card rounded ms-2 ms-md-0" style={{ margin: 0, border: "0", padding: 0, backgroundColor: 'transparent' }}>

               <picture className="blogimg rounded" style={{ objectFit: 'contain'}}>
                  <img className="rounded" src={`/resources/casestudies/${blog.img}`} alt="Card image cap" style={{ width: '100%', height: '95%' }} />
                </picture>

                {/* <div className='mt-2 mb-1'>
                  <p style={{ fontSize: "12px", color: 'Navy Blue', fontWeight: '600' }}>{blog.author}</p>
                </div> */}
                <div className="mt-2">
                  <NextLink href={`/casestudies/${blog.id}`} passHref style={{ textDecoration: "none", color: 'black' }}>
                    <p style={{ fontSize: '15px', fontWeight: 600 }}>{blog.title}</p>
                  </NextLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='d-flex mt-4 justify-content-center'>
        <div className="pagination">
          <ul className="pagination me-2">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <button
                onClick={() => {
                  if (currentPage > 1) {
                    paginate(currentPage - 1);
                  }
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }}
                className="page-link"
                style={{ color: 'black', fontWeight: '600' }}
              >
                Previous
              </button>
            </li>
            {innerWidth > 700 && Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
              <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                <button
                  onClick={() => {
                    paginate(index + 1)  
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }}
                  className={`page-link ${index + 1 === currentPage ? 'bg-dark text-white' : 'text-black fw-500'}`}
                >
                  {index + 1}
                  
                </button>
              </li>
            ))}
            <li className={`page-item ${currentPage === Math.ceil(data.length / itemsPerPage) ? 'disabled' : ''}`}>
              <button
                onClick={() => {
                  if (currentPage < Math.ceil(data.length / itemsPerPage)) {
                    paginate(currentPage + 1);
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                  }
                }}
                style={{ color: 'black', fontWeight: '600' }}
                className="page-link"
              >
                Next
              </button>
            </li>
          </ul>
        </div>




      </div>
    </div>
  );
}

