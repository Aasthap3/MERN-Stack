import React from 'react'

const UploadCV = () => {
  return (
    <>
    <div className='bg-[rgba(110,120,185,0.8)] bg-[url("../cv_bg.jpg")] bg-center bg-cover bg-no-repeat bg-blend-multiply my-50 px-90'>
        <div className="headings text-center text-white grid gap-6 pt-35">
          <h5 className="text-[1.1rem]">
            FEATURED TOUR PACKAGES
          </h5>
          <h1 className="font-mulish text-5xl">Make a Difference with Your Online Resume!</h1>
        </div>
        <div className="btn flex pt-10 pb-35 justify-center">
            <button className="border border-white rounded-sm text-white py-5 px-15">Upload your cv</button>
        </div>
    </div>
    </>
  )
}

export default UploadCV