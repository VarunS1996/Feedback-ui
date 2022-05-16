import { Navigate, useNavigate , Routes , Route } from 'react-router-dom';

import React from 'react'

function Post() {
    const status = 404

    const navigate = useNavigate()
    const onClick = () =>
    {
        navigate('/about')
    }

    // if (status === 404)
    // {
    //     return <Navigate to='/notfound'/>
    // }

  return (
    <div>
        <h1>Post</h1>
        <button onClick={onClick}>Click</button>   
        <Routes>
            <Route path='/show' element={<h1>Hello</h1>}></Route>    
        </Routes>     
    </div>
  )
}

export default Post