import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/right-arrow-svgrepo-com.svg'

export const MyWork = () => {
  return (
   <div id='work' className='mywork'>
     <div className="mywork-tittle">
        <h1>Ultimos Trabalhos</h1>
     </div>
     <div className="mywork-container">
        {mywork_data.map((work,index)=> {
            return <img className='img-icon-work' key={index} src={work.w_img} alt=""/>
        })}
     </div>
     <div className="mywork-showmore">
        <p>Ver Mais</p>
        <img className='arrow-icon' src={arrow_icon} alt=""/>
     </div>
   </div>
  )
}

export default MyWork;
