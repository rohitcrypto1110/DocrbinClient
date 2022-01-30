import mongoose from "mongoose";

const urlSchema = mongoose.Schema({
  fileId: { 
  	type: String,
  	required: true 
  },
  creator: {
  	type: String,
<<<<<<< HEAD
  	// required: true
=======
  	//required: true
>>>>>>> 08de309926aef9efe2887e9680277892b6559782
  },
  createdAt: {
  	type: Date,
    default: new Date()
  },
  expiresIn: {
  	type: Number,
  	default: -1
  }
});

export default mongoose.model("URL", urlSchema);