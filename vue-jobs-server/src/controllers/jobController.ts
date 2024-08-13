import { Request, Response } from 'express';
import Job from '../models/jobModel';

// Get all jobs
export const getAllJobs = async (req: Request, res: Response) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// Get a single job by ID
export const getJob = async (req: Request, res: Response) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json(job);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// Create a new job
export const createJob = async (req: Request, res: Response) => {
    try {
        const job = new Job({
            title: req.body.title,
            type: req.body.type,
            description: req.body.description,
            location: req.body.location,
            salary: req.body.salary,
            company: {
                name: req.body.company.name,
                description: req.body.company.description,
                contactEmail: req.body.company.contactEmail,
                contactPhone: req.body.company.contactPhone,
            }
        });
        await job.save();
        res.status(201).json(job);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// Update an existing job
export const updateJob = async (req: Request, res: Response) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                type: req.body.type,
                description: req.body.description,
                location: req.body.location,
                salary: req.body.salary,
                company: {
                    name: req.body.company.name,
                    description: req.body.company.description,
                    contactEmail: req.body.company.contactEmail,
                    contactPhone: req.body.company.contactPhone,
                }
            },
            { new: true }
        );

        if (!updatedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }

        res.status(200).json(updatedJob);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};

// Delete a job
export const deleteJob = async (req: Request, res: Response) => {
    try {
        const deletedJob = await Job.findByIdAndDelete(req.params.id);
        if (!deletedJob) {
            return res.status(404).json({ message: 'Job not found' });
        }
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
};
