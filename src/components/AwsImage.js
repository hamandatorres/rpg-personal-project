import React, { useState, useEffect } from 'react';
import { Storage } from 'aws-amplify'

export default function AwsImage() {
  const [images, setImages] = useState([])
  useEffect(() => {
    fetchImages()
  }, [])


async function fetchImages() {
 let imageKeys = await Storage.list('')
 console.log('imageKeys 1: ', imageKeys)

 imageKeys = await Promise.all(imageKeys.map(async k => {
   const signedUrl = await Storage.get(k.key);
   return signedUrl
 }))
//  console.log('imageKeys 2: ', imageKeys)
 setImages(imageKeys)
}
async function onChange(e) {
const file = e.target.files[0];
const result = await Storage.put(file.name, file);
console.log("result: ", result)
  fetchImages()
}
  return (
    <div className="aws-image-page">
      <p>Upload Your Character!</p>
      <input
      type="file"
      onChange={onChange}
      />
      {
        images.map(image => (
          <ul key={image} className="uploaded-images">
          <img className="reframe" alt='' src={image} key={image} />
          </ul>
        ))
      }
    </div>
  )
}