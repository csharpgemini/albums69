import mongoose from 'mongoose';

const albumSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Album', albumSchema);
