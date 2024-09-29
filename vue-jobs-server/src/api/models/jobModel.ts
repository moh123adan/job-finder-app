import { Schema, model, Document } from 'mongoose';

// Company interface
interface ICompany {
    name: string;
    description: string;
    contactEmail: string;
    contactPhone: string;
}

// Job interface extending Document
interface IJob extends Document {
    title: string;
    type: string;
    description: string;
    location: string;
    salary: string; // Keep as string since it's a range in the data
    company: ICompany;
}

// Company schema
const companySchema = new Schema<ICompany>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    contactEmail: { type: String, required: true },
    contactPhone: { type: String, required: true },
});

// the Job schema
const jobSchema = new Schema<IJob>({
    title: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: String, required: true }, // Keep as string since it's a range
    company: { type: companySchema, required: true },
});

const Job = model<IJob>('Job', jobSchema);

export default Job;
