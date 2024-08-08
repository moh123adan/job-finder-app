import { Router } from 'express';
import { getAllJobs, getJob, createJob, updateJob, deleteJob } from '../controllers/jobController';

const router = Router();

router.get('/jobs', getAllJobs);
router.get('/jobs/:id', getJob);
router.post('/jobs', createJob);
router.put('/jobs/:id', updateJob);
router.delete('/jobs/:id', deleteJob);

export default router;
