import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  verified: boolean;
  verificationToken: String | undefined;
  verificationTokenExpiry: Number | undefined;
  resetPasswordToken: String | undefined;
  resetPasswordExpires: Date | undefined;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // isVerified: { type: Boolean, default: false },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationToken: { type: String, required: false },
    verificationTokenExpiry: { type: Number, required: false },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);
