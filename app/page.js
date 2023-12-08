 
 import Image from 'next/image'
 import profilePic from './neural-v-1.png'
 

 export default function Home() {
  return (
    <div class="container mx-auto   center  w-1/2  h-3/4">
    <div>
    <br></br>
    <br></br>
    <br></br>Welcome
     </div>
    <Image
      src= {profilePic} 
        
      alt="NTS"
    />
  </div>
  )
}
