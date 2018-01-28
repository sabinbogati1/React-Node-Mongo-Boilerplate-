const AdminModel = require("./../models/admin");
const config = require("./../config");
require("./../db")(config);

function Auth(){
    this.testing=(req,res) =>{
        console.log(" req", req);
        res.send("You are officially in auth route");
    }

    this.signup=(req,res) =>{
        console.log("You are officially in sign up form", req.body);
        //res.send("You are officially in sign up form", req.body);

        var newAdmin = new AdminModel();
        newAdmin.email = req.body.email;
        newAdmin.password = req.body.password;
        newAdmin.displayName = req.body.displayName;
        newAdmin.phoneNumber = req.body.phoneNumber;
        newAdmin.role = req.body.role;
        newAdmin.isActive = true;


        newAdmin.save( (err,SavedAdmin) =>{
                    if(err){
                        console.log("Error occured in saving Admin signup: ",err);
                    }
                    else{
                        console.log("Admin SuccessFully Saved to database");
                        console.log(SavedAdmin);
                    }
        } )



    }
}


module.exports = new Auth();