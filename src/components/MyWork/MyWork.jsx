import React from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';

export const MyWork = () => {

  const handleRedirect = (url) => {
    window.open(url, '_blank'); 
  };

  return (
    <div id='work' className='mywork'>
      <div className="mywork-tittle">
        <h1>Ultimos Trabalhos</h1>
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <img
              className='img-icon-work'
              key={index}
              src={work.w_img}
              alt={work.w_name}
              onClick={() => handleRedirect(work.link)} 
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
