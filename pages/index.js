import firebase from '../firebase'

import NavBar from '../components/navbar'
import Brand from './../components/branding'

import Button from './../components/ui/button'

export default Home

export default function Home() {
   console.log(firebase)
  return (
     <div>
       <NavBar/>
       <Brand title="Home Page" tagline="directory app start"/>

       <Button bgcolor="tomato" color="white">sign up with firebase</Button>
          <Button bgcolor="blue" color="white">sign up with something</Button>
          <Button bgcolor="orange" color="white">sign up with something</Button>
      {/* comment */}
     </div>
     
       
    
  )
}
