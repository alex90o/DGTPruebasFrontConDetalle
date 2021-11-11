import React from 'react'
import { Item } from './Item'
import {Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const ItemList = ( {productos = []} ) => {


    return (
        <div className="container">
            <h2>Nuestros productos</h2>
            <Link to={"/pructoapi"}>
                    <Button variant="primary">Productos API</Button>
            </Link>
            <hr/>

            <div className="row">
                { productos.map((item) => <Item {...item} key={item.id}/> )}
                {/* { productos.map((item) => <Item item={item}/> )} */}
            </div>
        </div>
    )
}
