const mongoose = require('mongoose');


const commentaireSchema = mongoose.Schema({
  _id:{
    type:Number,
    required:true
},
 id2:{
  type:Number,
  required:true
},
  id3:{
  type:Number,
  required:true
}
,
    photo_profil1 : {
    type: String,
    required: true
},

  photo_profil2 : {
  type: String,
  required: true
},

}, {
  timestamps: true
});




  module.exports=mongoose.model('Particulier',commentaireSchema)
