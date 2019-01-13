import React,{ Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Home extends Component {
    state = {
      posts: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            this.setState({
                posts: response.data.slice(0,10)
            })
        })
    }
    render() {
				const posts = this.state.posts;
        const postList = posts.length ? (
           posts.map((post) => {
               return (
                   <Link to	={'/' +post.id} key={post.id}>
											<div className='post' >
												<span>Title: {post.title}</span>
												<p>Desc: {post.body}</p>
											</div>
                   </Link>
               )
           })
        ) : (
            <p>No posts!!!!</p>
        )
        return (
            <div>
                <h1>Home component</h1>
                {postList}
            </div>
        )
    }
    }

export default Home;
