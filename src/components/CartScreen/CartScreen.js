import React, { useContext, useState, useEffect } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useHistory } from 'react-router'
import { ItemCount } from '../ItemCount/ItemCount'
 
export const CartScreen = () => {
    const {goBack, push} = useHistory()
    const {carrito, vaciarCarrito, removeItem, calcularTotal, setCarrito} = useContext(CartContext)
   const [counter, setCounter] = useState(carrito)
    const [initialValues, setValues]= useState(carrito)
    



 
    return (
        <div className="container my-5">
 
            {
                carrito.length === 0
                ? <>
                    <h2>No hay productos agregados</h2>
                    <Link to="/" className="btn btn-success">Comprar</Link>
                 </>
                :
                    <>
                        <h2>Resumen de compra</h2>
                        <Link to="/cart" className="btn btn-success">Terminar mi compra</Link> {/*solo ejemplo no hace nada por ahora*/}
                        <hr/>
 
            {
            carrito.map( (prod) => (
             <div>         
                                   
            <div className="table-responsive">
            <table className="table table-bordered" Style="text-align: center">
                <thead>
                <tr>
                    <th><h5>Nombre</h5></th>
                    <th><h5>Código</h5></th>
                    <th><h5>Precio</h5></th>
                    <th><h5>Cantidad</h5></th>
                    <th><h5>Total</h5></th>
                    <th><h5>Quitar</h5></th>
                </tr>
                </thead>
                
                
               
                <tr>
                    <td><h6>{prod.name}</h6></td>
                    <td><h6>{prod.id}</h6></td>
                    <td><h6>{prod.price}</h6></td>
                    <td>
                    <button className="btn btn-success" Style="color: black" sonClick={() => {if(counter !== 1) {setCounter(counter - 1)} }}>-</button> 
                    <span className="mx-3">{prod.cantidad}</span>
                    <button className="btn btn-success" Style="color: black" onClick={() => { if(counter !== prod.stock){ setCounter(counter+1)}}}>+</button></td>
                    <td><h5>{prod.price * prod.cantidad}</h5></td>
                    <td>
                        <form >
                        <button className="btn btn-danger" onClick={() => removeItem(prod.id)}>
                                        <BsFillTrashFill/>
                                    </button>
                        </form>
                    </td>
                </tr>    
            </table>
        </div>
       
        </div>
                            ))
 
       
                        }
 
                        <hr/>
                        <h4 className="my-3" Style="text-align: right">Total:${calcularTotal()}</h4>
                        <hr/>
                        <button
                        className="btn btn-outline-primary mx-4"
                        onClick={()=>push("/")}
                        >Seguir Comprando
                        </button> {/*vuelve al inicio*/}
                        <button
                            className="btn btn-danger"
                            onClick={vaciarCarrito}
                        >
                            Vaciar carrito
                        </button>
                    </>
            }
 
        </div>
    )
}
