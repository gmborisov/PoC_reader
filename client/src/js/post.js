import React, {Component} from 'react';

export default class Post extends Component{
    render(){
        const post = props.post;
        return (
            <li>
                <span>Published at: {post.createdAt}</span>
                <div>
                    {post.text}
                </div>
            </li>
        );        
    }
}
