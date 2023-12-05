

export default async function PostPage(){

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next :{
      revalidate: 1,
    },
  });

      const posts =await response.json();
       
      const postJSX= posts.map((post) =>{
        return(
          <div key={post.id}
          style={{width:"70%", background:"white",
          margin:"5px"}}>
          <h2>{post.title}s</h2>
          </div>)
      })
    return(

        <div>
          <h1> Posts Page  </h1>
          <div style={{ display:"flex", alignItems:"center" , flexDirection:"column"}}>
           {postJSX}
           </div>
        </div>

    )
}