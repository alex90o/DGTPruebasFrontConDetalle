import React from "react";
import UsarAPI from './UsarAPI/UsarAPI.js';
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
/*
const producto= {
    id,
    nombre,
    description,
    precio,
    cantidad,
    imagen
}
*/
class ProductosAPI extends React.Component {
    constructor(props){
        super(props)
        this.state={
        productos:[]
        }
        //producto.getProductos


    }


    componentDidMount(){
        UsarAPI.getProductos().then((response)=>{
                this.setState({
                    productos:response.data
                })
            }
        )
    }


    render(){
        return( 
        <div>
        <div className="container">
        <h2>Productos desde la API</h2>
        <div className="row">
        {this.state.productos.map(producto =>
                <Card style={{ width: '18rem' }} className="m-3">
                    <Card.Img variant="top" src={producto.imagen}  />
                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>{producto.descripcion}</Card.Text>
                        <Card.Text>Precio: ${producto.precio}</Card.Text>
                        <Card.Text>Categoria:{producto.categoria}</Card.Text>

                       
                    </Card.Body>
                </Card>
             )}   
            </div> 
            </div>
            <div>
                    {console.log(this.state.productos)}
                    <div class="table-responsive">
                        <table className="table table-bordered" Style="text-align: center">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>descripcion</th>
                                    <th>precio</th>
                                    <th>cantidad</th>
                                    <th>categoria</th>
                                    <th>imagen</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.productos.map(producto => <tr>
                                    <td><h4>{producto.id}</h4></td>
                                    <td><h4>{producto.nombre}</h4></td>
                                    <td><h4>{producto.descripcion}</h4></td>
                                    <td><h4>${producto.precio}</h4></td>
                                    <td><h4>{producto.cantidad}</h4></td>
                                    <td><h4>{producto.categoria}</h4></td>
                                    <td><img src={producto.imagen} width="100" height="100" align="right" Style="border-radius: 20px"></img></td>
                                </tr>
                                )}
                            </tbody>
                        </table>

                    </div>


                </div>
                </div>
        
        )
    }
}
export default ProductosAPI;