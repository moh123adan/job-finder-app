import mongoose, { Document, Schema, Model } from 'mongoose';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    refresh_token?: string;
    id: string;
}

const UserSchema: Schema<IUser> = new Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true,
            validate: {
                validator: (val: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val),
                message: (props: { value: string }) => `${props.value} is not a valid email address!`,
            },
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        refresh_token: {
            type: String,
        },
    },
    {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

UserSchema.virtual('id').get(function (this: IUser) {
    return this._id.toHexString();
});

// Ensure virtual fields are serialized
UserSchema.set('toJSON', { virtuals: true });
UserSchema.set('toObject', { virtuals: true });

// Export the User model
const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
export default User;
