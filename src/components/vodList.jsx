import React from 'react'

const VodList = (props) => {
    let item = props.item
    return (
       
                <div className='vod-list mt-4 col-lg-3 col-md-4 col-12'>
                    <img src={item.Poster} className="imageList " alt="" />
                    </div>
         
    )
}

export default VodList