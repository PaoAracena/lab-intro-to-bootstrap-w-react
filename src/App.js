import postData from "./data/posts.json";
import Hero from "./Hero";
import Nav from "./Nav";
import Searchbar from "./Searchbar";

function App() {
  
  return <main>
     <Nav />
      <Hero />
      <Searchbar/>
    <div className="App">

  {
    // postData.map((post) => {
    //   return (
    //     <li className = 'card' key = {post.id}>
    //       <span>{post.title}</span>             
    //       <button>Go to Post</button>
    //     </li>
    //   )
    // })
  }

    </div>

  </main>;
}

export default App;
