import { Request, Response } from 'express';
import Job from '../models/jobModel';

export const getAllJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getJob = async (req: Request, res: Response) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const createJob = async (req: Request, res: Response) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const updateJob = async (req: Request, res: Response) => {
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const deleteJob = async (req: Request, res: Response) => {
    try {
        const job = await Job.findByIdAndDelete(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
