import mongoose, { Schema, model, models } from 'mongoose';

const pageDataSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, // URL or path to the image
    required: false
  },
  text: { 
    type: String, 
    required: true 
  }
});

const PageData = models.PageData || model('PageData',pageDataSchema);

export default PageData;
