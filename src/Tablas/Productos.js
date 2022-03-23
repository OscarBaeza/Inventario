import React from 'react';
import {Table} from 'react-bootstrap';

export default class Products extends React.Component(){
    render(){
        return(
            <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Clave</th>
                    <th>Producto</th>
                    <th>Categoria</th>
                    <th>Existencia</th>
                    <th>Nivel Reorden</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>Chai</td>
                    <td>Beverages</td>
                    <td bgcolor="red">39</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>17</td>
                    <td>Alice Mutton</td>
                    <td>Meat/Poultry</td>
                    <td bgcolor="red">0</td>
                    </tr>
                    
                </tbody>
            </Table>
            </div>
        );
    }
}