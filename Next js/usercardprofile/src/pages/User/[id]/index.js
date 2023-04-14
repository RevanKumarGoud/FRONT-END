import React from 'react'

const index = ({User}) => {
  return (
    <div>
       {User && 
       <div className='row py-5 mt-4'>
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
           <a to={User.GitHub} target='-blanck' className='nav-link'><i className='bi bi-github'></i></a>
           <a to={User.Linkdin} target='-blanck' className='icons'><i className='bi bi-linkedin'></i></a>
           <a to={User.Fb} target='-blanck' className='icons'><i className='bi bi-twitter'></i></a>
           </div>
          </div>
        </div>
        </div>
       </div>
   </div>
       }
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://localhost:8000/Users/${context.params.id}`)
  const User = await res.json()

  return { props: { User } }
}


export async function getStaticPaths() {
  const res = await fetch(`http://localhost:8000/Users`)
  const Users = await res.json()
  const paths = Users.map(User => ({params : {id: User.id.toString()}}))

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}
export default index
