// models/User.js
import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    tasks: { type: [String], required: true },
});

const UserSchema = new mongoose.Schema({
    photo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    rank: { type: String, required: true },
    eventsSubscribed: { type: [EventSchema], default: [] },
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;