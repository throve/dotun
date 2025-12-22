import React from 'react'

const ImageGrid = ({images, grid}) => {
  return (
    <div className="image-cont" style={{display: "grid",gridTemplateColumns: `repeat(${grid}, 1fr)`}} >
    {
      images.map(image => (
      <div key={image.name || image.url} className="img-div">
        <img src={image.url} alt="" />
        {image.name && <span>{image.name}</span>}
      </div>

      ))
    }
  </div>
  )
}

export default ImageGrid