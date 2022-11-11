import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import Post from '../interface/Post';

//GET ALL
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`http://localhost:3000/posts`);
    let posts: [Post] = result.data;

    return res.status(200).json({
        message: posts
    });
};

//GET BY ID
const getPost = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let result: AxiosResponse = await axios.get(`http://localhost:3000/posts/${id}`);
    let post: Post = result.data;

    return res.status(200).json({
        message: post
    });
};

//POST
const addPost = async (req: Request, res: Response, next: NextFunction) => {
    let title: string = req.body.title;
    let author: string = req.body.author;
    let response: AxiosResponse = await axios.post(`http://localhost:3000/posts`, {
        title,
        author
    });
    
    return res.status(200).json({
        message: response.data
    });
};


//PUT
const updatePost = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let title: string = req.body.title ?? null;
    let author: string = req.body.author ?? null;

    let response: AxiosResponse = await axios.put(`http://localhost:3000/posts/${id}`, {
        ...(title && { title }),
        ...(author && { author })
    });
    return res.status(200).json({
        message: response.data
    });
};

// DELETE
const deletePost = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let response: AxiosResponse = await axios.delete(`http://localhost:3000/posts/${id}`);

    return res.status(200).json({
        message: `Post ${id} deleted successfully`
    });
};

export default { getPosts, getPost, updatePost, deletePost, addPost };