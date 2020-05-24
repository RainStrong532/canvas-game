import React from 'react'

class HomePage extends React.Component{
    render(){
        return(
            <div className='home_page d-flex justify-content-center flex-column align-items-center mt-5'>
                <div className='btn btn-primary'>This is home page</div>
                <a href="http://localhost:1380" target="blank" className="d-block mt-3">Server</a>
            </div>
        )
    }
}
export default HomePage;