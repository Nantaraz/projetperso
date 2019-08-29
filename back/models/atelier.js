const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    _id:{
        type: Number,
        required:true
    },
    id2:{
        type: Number,
        required:true
    },
    Titre:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Date:{
        type: String,
        required: true
    },
    HoraireDebut:{
        type: String,
        required: true
    },
    Duree:{
        type: String,
        required: true
    },
    NombrePlacesDispo:{
        type: String,
        required:true
    },
    NombrePlacesRes:{
        type: String,
        required:true
    },
    Prix:{
        type: String,
        required:true
    },
    // photo_profil:String,
    visibilite:Boolean
},
{
    timestamps: true
}
);

module.exports = mongoose.model('atelier', UserSchema);
