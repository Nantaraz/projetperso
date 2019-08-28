const Atelier = require('../models/atelier');
const Particulier = require('../models/particulier');
const fs = require('fs');

exports.Postuler = (req,res) => {
   
    Particulier.find().then(us=>{
        
        if(us.length==0){
            id = 0
        }
        else{
            id = us[us.length-1]._id+1
        }
     
     let imageFile1 = req.files.photo_profil1;
     let imageFile2 = req.files.photo_profil2;
        console.log('inona ny ato o!'+imageFile1)
        console.log('inona ny ato o!'+imageFile2)
        let nomImage = id
        
        res.setHeader('Content-Type', 'text/plain');

        imageFile1.mv(`${__dirname}/public/${nomImage }.pdf`, function(err) {
          if (err) {
            return res.status(500).send(err);
          }
          
        } );
        imageFile2.mv(`${__dirname}/public/${nomImage }.pdf`, function(err) {
            if (err) {
              return res.status(500).send(err);
            }
            
          } );
  
       Atelier.findById(req.params._id).then(use=>{
            if(!use){
                res.send("non")
            }
            else{
                Particulier.findOne(
                    //    {
                    //     matricule: req.body.matricule
                    // }
                    ).then(user=>{
                        // if(user) {
                            
                        //     return res.status(400).json({
                        //         matricule: 'déja fait le rendez-vous'
                        //     });
                        // }
                        // else{   
                  
                const particulier = new Particulier({
                    _id:id,
                    id2:use._id,
                    Nom:req.body.Nom,
                    Prenom:req.body.Prenom,
                    Contact:req.body.Contact,
                    // id3:use.id2,
                    //aaaa:req.body.aaaa,
                    photo_profil1:nomImage +'.pdf',
                    photo_profil2:nomImage +'.pdf'
                    
                    
                });
                    Atelier.findByIdAndUpdate(use._id, { _id:use.id,
                    id2:use.id2,
                    Titre: req.body.Titre, 
                    Description: req.body.Description,
                    Date: req.body.Date,
                    HoraireDebut: req.body.HoraireDebut , 
                    Duree: req.body.Duree,
                    NombrePlacesDispo: req.body.NombrePlacesDispo,
                    NombrePlacesRes: req.body.NombrePlacesRes,
                    Prix: req.body.Prix,
                    visibilite:true,
                    photo_profil:nomImage +'.pdf'
                
                }).then(upd=>console.log("apdate"+upd)
                )
                                particulier
                                    .save()
                                    .then(user => {
                                        res.json(user)
                                    }); 

                                    //
                                // }
                                }); 
                                
                               
                 }
                                });         
                            
                            

                        }); 
} 


exports.getDossier=  (req, res) => {
       
    Particulier.find().then(user=>{
        const tab=[]
        for(let i=0;i<user.length;i++){
            if(user[i].id2==req.params._id){
              tab.push(user[i])
              console.log(tab);
              
            }
           
        }
        if(tab.length>0){
            res.send(tab)   
        }
        else{
            res.send([])
         } 
        
     
    })             
}
exports.lireImage1 =(req, res) =>{
    try {
        let picture = fs.readFileSync('./Controller/public/'+req.params.photo_profil1)
        res.write(picture)
        res.end()
    } catch (e) {
        console.log("erreur be miitsy", e.stack);
    }
}
exports.lireImage2 =(req, res) =>{
    try {
        let picture = fs.readFileSync('./Controller/public/'+req.params.photo_profil2)
        res.write(picture)
        res.end()
    } catch (e) {
        console.log("erreur be miitsy", e.stack);
    }
}

