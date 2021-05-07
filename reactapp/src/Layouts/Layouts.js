import React, { Component } from 'react';
import axios from "axios";

export default class Layouts extends Component {

    constructor()
    {
        super();
        this.state={
            categories:[]
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:4000/product/list')
        .then(response=>{
          console.log(response);
            this.setState({categories:response.data});
        });
    }   

    render() {
        return (
            <table className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>created_at</th>
                {/* <th>Action</th> */}
            </tr>
            </thead>
            <tbody>
            {
                this.state.categories.map((category,i)=>{
                    return (
                        <tr key={i.toString()}>
                        <td>{category.name}</td>
                        <td>{category.title}</td>
                        <td>{category.description}</td>
                        <td>{category.price}</td>
                        <td>{category.created_at}</td> 
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
        );
    }
}