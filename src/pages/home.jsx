import PostForm from "../components/postForm";
import Retrieve from "../components/retrieve";
import style from "./home.css";

function Home() {
     return <>
         <h1>Plan My Trip!</h1>
         <h2>Post Data</h2>
         <PostForm />
         <h2>Retrieve Data</h2>
         <Retrieve />
     </>
}

export default Home;