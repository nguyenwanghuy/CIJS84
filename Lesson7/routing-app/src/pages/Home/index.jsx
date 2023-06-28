import React, {  useEffect, useState } from 'react'
import Blog from './components/Blog';

const Home = () => {
    const [listBlog, setListBlog] = useState([])
    const [page, setPage] = useState(1)
    const handleSelectPage = (pg) => {
        console.log("pg" + pg)
        setPage(pg)
    }

   useEffect(() => {
    fetch(`https://648833fa0e2469c038fd37c5.mockapi.io/api/v1/blogs?page=${page}&limit=10`)
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
        setListBlog(data);
        
    })
}, [page])
  return (
    <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                {listBlog.map((blog) => (
						<Blog
							key={blog.id}
                            id={blog.id}
							title={blog.title}
							description={blog.description}
							author={blog.author}
							createdAt={blog.createdAt}
						/>
					))}
                    {/* <!-- Pager--> */}
        <ul className="pagination">
        <li className="page-item disabled">
            <a className="page-link">Previous</a>
        </li>
       {
         [1,2,3].map((pg) => 
            <li className={`page-item ${pg===page ? 'active' : ''}`} onClick={()=> handleSelectPage(pg)}>
            <a className="page-link" href="#">
                {pg}
        </a>
        </li> 
         )
       }
        <li className="page-item">
            <a className="page-link" href="#">Next</a>
        </li>
        </ul>
                </div>
            </div>
        </div>
  )
}
export default Home