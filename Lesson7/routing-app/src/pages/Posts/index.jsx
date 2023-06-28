import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

 const Posts = () => {
    const params = useParams();
    const [blog,setBlog] = useState({});

    useEffect(() => {
        const id = params.blogId;
        fetch('https://648833fa0e2469c038fd37c5.mockapi.io/api/v1/blogs/'+ id)
        .then((response) => {
            return response.json()
        }).then((data) => {
            console.log(data);
            setBlog(data);
            
        })
    }, [])
   
  return (
    <article class='mb-4'>
			<div class='container px-4 px-lg-5'>
				<h1>{blog.author}</h1>
				<div class='row gx-4 gx-lg-5 justify-content-center'>
					<div class='col-md-10 col-lg-8 col-xl-7'>{blog.content}</div>
				</div>
			</div>
		</article>
  )
}
export default Posts