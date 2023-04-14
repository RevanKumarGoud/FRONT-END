import React from 'react'
import '../styles/Home.module.css'
// import { Link } from 'react-router-dom'
export default function Home({User}) {
  return (
    <div>
       <div className='row py-5 mt-4'>
          {User.map(User => (
          <div className="col-sm-5">
             <div className='card m-3'> 
           <div className='card-heder' key={User.id}>
             <div className='cad-tittle'><h5 className='text-center text-bg-success'>User Detailes</h5></div>
             <div className='card-body'>
            <img src="https://cdn-icons-png.flaticon.com/512/147/147133.png" alt=""  width={100} className='float-end'/>
              <p>Username :  <span>{User.name}</span></p>
              <p>UserMail : <a href="mailto:{post.mail}" target='-blanck' className='text-black'>{User.mail}</a></p>
              <p>mobile number : <span>{User.phone}</span></p>
              <div className='move'>
              <a href={User.GitHub} target='-blanck' className='nav-link'><i className='bi bi-github'></i></a>
              <a href={User.Linkdin} target='-blanck' className='icons'><i className='bi bi-linkedin'></i></a>
              <a href={User.Fb} target='-blanck' className='icons'><i className='bi bi-twitter'></i></a>
              </div>
             </div>
           </div>
           <a href={`/User/${User.id}`} className='nav-link m-2 offset-5'>Know more</a>
           </div>
          </div>
        ))}
       
      </div>
    </div>
  )
}
export async function getStaticProps() {
    
    const res = await fetch('http://localhost:8000/Users')
    const User = await res.json()
  
    return {
      props: {
        User,
      },
    }
  }
