import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../constants/util';

function CreateProduct() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const setSaveProduct = async (e) => {
        e.preventDefault();

        await axios.post(API_URL+'products', {
            price: price,
            title: title
        });

        navigate("/");
    };

    return (
        <div className='container'>
            <form onSubmit={(e) => setSaveProduct(e) }>
                <div className="field">
                    <label className="label">Name Tile</label>
                    <div className="control">
                        <input className="input" value={title} onChange={(e) => setTitle(e.target.value) } type="text" placeholder="Title ...." />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input className="input" value={price} onChange={(e) => setPrice(e.target.value) } type="text" placeholder="Price ...." />
                    </div>
                </div>

                <button className="button is-primary" type='submit'> Save</button>
            </form>
        </div>
    )
}

export default CreateProduct
