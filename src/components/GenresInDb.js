import React, {Component} from 'react';
import Genre  from './Genre';
// import { Component } from 'react/cjs/react.development';


class GenresInDb extends Component {
    constructor(){
        super();
            this.state ={
            genresList : []
        }
    }

    componentDidMount(){
        fetch('/api/genres')
        .then(respuesta =>{
        return respuesta.json()
        })
        .then(genres =>{
        //console.log(genres)
        this.setState({genresList: genres.data})
        })
        .catch(error => console.log(error))
    }

    cambiarFondoGeneros(){
        
        document.querySelector('.generos').classList.toggle('bg-secondary');
        document.querySelector('.titulo').classList.toggle('bg-secondary');
        document.querySelector('h6').classList.toggle('text-gray-800')
        document.querySelector('h6').style.color='white';

    }
         
    render (){
        return (
            <React.Fragment>
                {/* <div className="card-body fondoCaja">
                    <div className="row">
                        {this.state.genresList.map((genre,index)=>{
                        return <Genre {...genre} key={index} />
                        })}
                    </div>
                </div> */}

                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="titulo card-header py-3">
                                <h6 onMouseOver={this.cambiarFondoGeneros} className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h6>
                            </div>
                            <div className="generos card-body">
                                <div className="row">
                                    {this.state.genresList.map((genre,index)=>{
                                    return <Genre {...genre} key={index} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div> 
            
            </React.Fragment>
        );
    };

}
export default GenresInDb;