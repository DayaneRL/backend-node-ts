/** source/routes/posts.ts */
import express from 'express';
import postController from '../controllers/posts';
import commentController from '../controllers/comments';
import profileController from '../controllers/profiles';

const router = express.Router();

router.get('/posts', postController.getPosts);
router.get('/posts/:id', postController.getPost);
router.post('/posts', postController.addPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

router.get('/comments', commentController.getComments);
router.get('/comments/:id', commentController.getComment);
router.post('/comments', commentController.addComment);
router.put('/comments/:id', commentController.updateComment);
router.delete('/comments/:id', commentController.deleteComment);

router.get('/profiles', profileController.getProfiles);
router.get('/profiles/:id', profileController.getProfile);
router.post('/profiles', profileController.addProfile);
router.put('/profiles/:id', profileController.updateProfile);
router.delete('/profiles/:id', profileController.deleteProfile);


export = router;