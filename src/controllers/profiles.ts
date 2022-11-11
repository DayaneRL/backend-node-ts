import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import Profile from '../interface/Profile';

//GET ALL
const getProfiles = async (req: Request, res: Response, next: NextFunction) => {
    let result: AxiosResponse = await axios.get(`http://localhost:3000/profiles`);
    let profiles: [Profile] = result.data;

    return res.status(200).json({
        message: profiles
    });
};

//GET BY ID
const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let result: AxiosResponse = await axios.get(`http://localhost:3000/profiles/${id}`);
    let profile: Profile = result.data;

    return res.status(200).json({
        message: profile
    });
};

//POST
const addProfile = async (req: Request, res: Response, next: NextFunction) => {
    let name: string = req.body.name;
    let login: string = req.body.login;
    let password: string = req.body.password;
    let response: AxiosResponse = await axios.post(`http://localhost:3000/profiles`, {
        name,
        login,
        password
    });
    
    return res.status(200).json({
        message: response.data
    });
};


//PUT
const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let name: string = req.body.name ?? null;
    let login: string = req.body.login ?? null;
    let password: string = req.body.password ?? null;

    let response: AxiosResponse = await axios.put(`http://localhost:3000/profiles/${id}`, {
        ...(name && { name }),
        ...(login && { login }),
        ...(password && { password })
    });
    return res.status(200).json({
        message: response.data
    });
};

// DELETE
const deleteProfile = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let response: AxiosResponse = await axios.delete(`http://localhost:3000/profiles/${id}`);

    return res.status(200).json({
        message: `Profile ${id} deleted successfully`
    });
};

export default { getProfiles, getProfile, addProfile, updateProfile, deleteProfile };