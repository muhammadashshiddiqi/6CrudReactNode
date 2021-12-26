import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../constants/util';

function EditProduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const setUpdateProduct = async (e) => {
        e.preventDefault();

        await axios.patch(API_URL + `products/${id}`, {
            price: price,
            title: title
        });

        navigate("/");
    };

    const getListProductById = async (e) => {
        const res = await axios.get(API_URL+`products/${id}`);
        setTitle(res.data.title);
        setPrice(res.data.price);
    };

    useEffect(() => {
        getListProductById();
    }, []);

    return (
        <div className='container'>
            <form onSubmit={(e) => setUpdateProduct(e)}>
                <div className="field">
                    <label className="label">Name Tile</label>
                    <div className="control">
                        <input className="input" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title ...." />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input className="input" value={price} onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price ...." />
                    </div>
                </div>

                <button className="button is-primary" type='submit'> Update</button>
            </form>
        </div>
    )
}

export default EditProduct
