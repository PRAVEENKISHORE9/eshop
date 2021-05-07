import React, { Component } from 'react';
import axios from "axios";

export default class Listing extends Component {

    constructor()
    {
        super();
        this.state={
            categories:''
        }
    }
    componentDidMount()
    {
        axios.get('http://localhost:4000/product/list')
        .then(response=>{
          // console.log(response.data)
            this.setState({categories:response.data});
        })
        .catch(err => console.log(err))
    }   

    render() {
      const categories = this.state
      console.log(categories.categories.length)
      let Displaydata;
      if((categories.categories.length) > 0){
        Displaydata=(
          categories.categories.map((item , i)=>{
            return (
                <tr >
                <td key={i}>{item.name}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.created_at}</td> 
                </tr>
            )
        })
        )
      }
      else {
        Displaydata=(
          alert("No data")
        )
      }
        return (
            <table className="table" style = {{ width : 150, height : 150, marginLeft : 370,padding:100 }}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>created_at</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {
               Displaydata
            }
            </tbody>
        </table>
        );
    }
}