import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../App";
import Post from "./Post";

function PostView(){
    const context = useContext(AppContext)
    const { id } = useParams();
    console.log(id)
    const thisPost = context.posts?.find( (x) =>  x.id == id)
    console.log(thisPost)

    return(
        <Post post={thisPost}></Post>
    );
}

export default PostView