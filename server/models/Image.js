import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema(
  {
    albumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Album',
      required: true
    },
    url: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Image', imageSchema);