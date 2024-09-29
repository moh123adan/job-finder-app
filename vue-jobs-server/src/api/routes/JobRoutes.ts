import { Router } from 'express';
import { getAllJobs, getJob, createJob, updateJob, deleteJob } from '../controllers/jobController';

const router = Router();

router.get('/jobs', getAllJobs);
router.get('/job/:id', getJob);
router.post('/job', createJob);
router.put('/job/:id', updateJob);
router.delete('/job/:id', deleteJob);

export default router;
