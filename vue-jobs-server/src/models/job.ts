import { Schema, model, Document } from 'mongoose';

interface IJob extends Document {
    title: string;
    company: string;
    description: string;
    location: string;
    salary: number;
}

const jobSchema = new Schema<IJob>({
    title: { type: String, required: true },
    company: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number, required: true },
});

const Job = model<IJob>('Job', jobSchema);

export default Job;
