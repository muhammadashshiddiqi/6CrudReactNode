import productModel from "../models/productModel.js";

export const getAllProducts = async (request, response) => {

    try {
        const products = await productModel.findAll();
        response.json(products);
    } catch (error) {
        response.json({message: error.message});
    }
};

export const createProduct = async (request, response) => {

    try {
        await productModel.create(request.body);
        response.json({
            "message": "Product Created"
        });
    } catch (error) {
        response.json({ message: error.message });
    }
};

export const getProductById = async (request, response) => {

    try {
        const products = await productModel.findAll({
            where: {
                id: request.params.id
            }
        });
        response.json(products[0]);
    } catch (error) {
        response.json({ message: error.message });
    }
};

export const updateProduct = async (request, response) => {

    try {
        await productModel.update(request.body, {
            where: {
                id: request.params.id
            }
        });
        response.json({
            "message": "Product Updated"
        });
    } catch (error) {
        response.json({ message: error.message });
    }
};

export const deleteProduct = async (request, response) => {

    try {
        await productModel.destroy({
            where: {
                id: request.params.id
            }
        });
        response.json({
            "message": "Product Deleted"
        });
    } catch (error) {
        response.json({ message: error.message });
    }
};