import React from 'react'

const ImageGrid = ({images, grid}) => {
  return (
    <div className="image-cont" style={{display: "grid",gridTemplateColumns: `repeat(${grid}, 1fr)`}} >
    {
      images.map(image => (
      <div key={image.name} className="img-div">
        <img src={image.url} alt="" />
        <span>{image.name}</span>
      </div>

      ))
    }
  </div>
  )
}

export default ImageGrid