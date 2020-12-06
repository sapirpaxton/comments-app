import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001/api',
});

export const insertComment = payload => api.post(`/comment`, payload);
export const getAllComments = () => api.get(`/comments`);

const apis = {
    insertComment,
    getAllComments,
};

export default apis;