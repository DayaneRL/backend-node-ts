import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import Comment from '../interface/Comment';

//GET ALL
const getComments = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`http://localhost:3000/comments`);
    let comments: [Comment] = result.data;

    return res.status(200).json({
        message: comments
    });
};

//GET BY ID
const getComment = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let result: AxiosResponse = await axios.get(`http://localhost:3000/comments/${id}`);
    let comment: Comment = result.data;

    return res.status(200).json({
        message: comment
    });
};

//POST
const addComment = async (req: Request, res: Response, next: NextFunction) => {
    let postId: string = req.body.postId;
    let body: string = req.body.body;
    let response: AxiosResponse = await axios.post(`http://localhost:3000/comments`, {
        postId,
        body
    });
    
    return res.status(200).json({
        message: response.data
    });
};


//PUT
const updateComment = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let postId: string = req.body.postId ?? null;
    let body: string = req.body.body ?? null;

    let response: AxiosResponse = await axios.put(`http://localhost:3000/comments/${id}`, {
        ...(postId && { postId }),
        ...(body && { body })
    });
    return res.status(200).json({
        message: response.data
    });
};

// DELETE
const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let response: AxiosResponse = await axios.delete(`http://localhost:3000/comments/${id}`);

    return res.status(200).json({
        message: `Comment ${id} deleted successfully`
    });
};

export default { getComments, getComment, addComment, updateComment, deleteComment };