import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Gtihub() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => {console.log(data)
    //         setData(data)
    // })
        
    // }, [])
  return (
    <div>
    <h1>Github Followers: {data.followers}</h1>
    <img src={data.avatar_url} alt="github image" width={300}/>
    </div>
  )
}

export default Gtihub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}