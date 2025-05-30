import React from 'react'

const Education = () => {

  return (
    <>
    <div id='edu' className="m-4 p-5 rounded bg-light h-75 d-flex flex-column justify-content-center">
      <h2 className='text-bg-dark p-2 rounded'>Education</h2>
        <ul>
            <li><strong>Masters of Computer Applications</strong> <br /> <i> Maulana Azad National Institute of Technology, Bhopal </i>
            <br/>
            <i>CGPA: 8.2, Ongoing</i>
            </li>
            <li><strong>Bachelors of Computer Applications</strong> <br /> <i> Mandsaur University</i>
            <br/>
            <i>CGPA: 8.51, 2024</i>
            </li>
            <li><strong>Class 12 (CBSE)</strong> <br /> <i> Kendriya Vidyalaya, Mandsaur</i>
            <br/>
            <i>94%, 2021</i>
            </li>
        </ul>
    </div>
    </>
  )
}

export default Education