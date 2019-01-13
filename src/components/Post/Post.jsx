import React,{ Component } from 'react';
import axios from 'axios';
class Post extends Component {
    componentDidMount() {
        let id = this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then((response)=>{
            this.setState({
                post: response.data
            })
        })  
    }
    
    state = { 
        post: null
    }
   
    render() { 
        const post = this.state.post;
        const postList = this.state.post ? (
            <>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </>
        ): (
            <p>Oops?</p>
        );
        console.log(post);
        return ( 
            <div>{postList}</div>
        );
    }
}

export default Post;