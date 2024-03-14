import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    KindeId: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    },
    plan: {
        type: String,
        enum: ['free', 'premium'],
        required: true
    },
    project: [{
        fileId: {
            type: Schema.Types.ObjectId
        },
        fileName: {
            type: String,
        },
        userName: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }]
});

const User = models?.User || model("User", userSchema);

export default User;
