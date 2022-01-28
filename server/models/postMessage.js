import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    purpose: String,
    audience: String,
    version: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;