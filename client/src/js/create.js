import React, {Component} from 'react';
import axios from 'axios';
import {SERVER_URL} from "../config";

export default class Create extends Component {

    constructor(props) {
        super(props);
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeNickname = this.onChangeNickname.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            text: '',
            nickname: ''
        }
    }

    onChangeNickname(e){
        this.setState({
           nickname: e.target.value 
        });
    };

    onChangeText(e) {
        this.setState({
            text: e.target.value
        });
    };

    onSubmit(e) {
        e.preventDefault();
        const post = {
            nickname: this.state.nickname,
            text: this.state.text
        };
        axios.post(SERVER_URL, post)
            .then(res => console.log(res.data));
        this.setState({
            nickname: '',
            text: ''
        });
    }
    
    render(){
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Post</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Type your nickname here </label>
                        <input className="form-control" value={this.onChangeNickname}/>
                    </div>
                    <div className="form-group">
                        <label>Type your text here </label>
                        <textarea rows={5} className="form-control" value={this.onChangeText}/>
                    </div>
                    <div className="form-group">    
                        <input type="submit" value="Add new post" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}
