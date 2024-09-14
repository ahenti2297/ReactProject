import Navlog from './Navlog';
import CardPlease from './CardPlease';
import MiddleCard from './MiddleCard';
import RightCard from './RightCard';
import PostCard from './PostCard';
import { useContext, useEffect} from 'react';
import Paginate from './pageinate';
import noteContext from '../Context/noteContext';
import Nav from '../comp/navigation/Nav';
export default function HomePage(){
    const {posts, getPosts}=useContext(noteContext);

    useEffect(()=>{
        getPosts();
    },[]);
    

    
    return(
        <div>
            <Navlog/>
            <CardPlease/>
            <MiddleCard/>          
            {posts && posts.length > 0 ? (
                posts.map((post, index) => (
                    <PostCard getPost={post} key={index} />
                ))
            ) : (
                <div style={{'marginTop':'-500px'}}>No posts available</div>
            )}
            <RightCard/>
            <Paginate/>
        </div>
    )
}