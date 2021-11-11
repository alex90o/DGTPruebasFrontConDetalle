import React from 'react';
import axios from 'axios'

const urlApi = 'http://localhost:8080/api/productos'

class UsarAPI {
    getProductos(){
        
        return axios.get(urlApi); //no olvidase de intallar axios 
        //console.log(urlApi);
        
    }
}
export default new UsarAPI();


/*
export default function UsarAPI( ){

return (


)


}
*////