import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../constants/util';
import { Link  } from "react-router-dom";

const ProductList = () => {

    const [produk, setProduk] = useState([]);
    const getList = async () => {
        const res = await axios.get(API_URL+'products');
        setProduk(res.data);
    };

    useEffect(() => {
        getList();

    }, []);

    const setDeleteProduct = async (id) => {
        await axios.delete(API_URL+'products/'+id);
        getList();
    };

    return (
        <div>
            <Link to="/add" className='button is-primary mb-3'> + Tambah</Link>
            <table className='table is-striped is-fullwidth'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {produk.map((prd, index) => (
                        <tr key={prd.id}>
                            <td>{index+1}</td>
                            <td>{prd.title}</td>
                            <td>{prd.price}</td>
                            <td>
                                <Link to={`/edit/${prd.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={() => setDeleteProduct(prd.id) } className="button is-small is-danger">Hapus</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
