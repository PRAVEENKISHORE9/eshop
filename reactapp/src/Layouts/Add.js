import React, { Component } from 'react';
import axios from "axios";

export default class Add extends Component {

    constructor()
    {
        super();
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.onChangeDescription=this.onChangeDescription.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.state={
            title:'',
            description:''
        }
    }

    onChangeTitle(e)
    {
        this.setState({
            title:e.target.value
        });
    }
    onChangeDescription(e)
    {
        this.setState({
            description:e.target.value
        });
    }

    onSubmit(e)
    {
        e.preventDefault();
        const title = {
            title : this.state.title,
            description : this.state.description
        }
        axios.post('http://localhost:4000/products',title)
        .then(res=>console.log(res.data));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text"
                     className="form-control"
                     id="title" 
                    //  value={this.state.title}
                     onChange={this.onChangeTitle}
                     placeholder="Enter Tilte" />
                      <input type="text"
                     className="form-control"
                     id="title" 
                    //  value={this.state.title}
                     onChange={this.onChangeTitle}
                     placeholder="Enter Tilte" />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text"
                        className="form-control"
                        id="description"
                        value={this.state.description}
                        onChange={this.onChangeTitle}
                        placeholder="Enter Description" />
                </div> */}
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}