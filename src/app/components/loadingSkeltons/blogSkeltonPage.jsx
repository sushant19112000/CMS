import React from 'react'
import { BlogCardSkeleton } from './blogCardSkelton'

export const BlogSkeltonPage = () => {
  return (

    <div className="container mt-4 mb-4">
         <div className="row justify-content-center justify-content-lg-start">
         {[...Array(9)].map((_, index) => (
        <BlogCardSkeleton     key={index} />
        ))}
      </div>
    </div>
    
   
    
  )
}
