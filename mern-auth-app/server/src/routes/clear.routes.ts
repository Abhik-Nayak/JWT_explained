import express from 'express';
import { deleteAllExistUser } from '../controllers/clear.controller';

const router = express.Router();

router.post('/delete-all-user', deleteAllExistUser);
export default router;
