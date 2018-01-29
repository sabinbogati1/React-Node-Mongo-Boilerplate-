const AdminModel = require("./../models/admin");

function LogIn(){
    this.login=(req,res)=>{

     //console.log(" LOgin Page :" , req.body);

     AdminModel.findOne({
         email:req.body.email

     }, (err,user) =>{
         if(err){
             console.log("Error Occured During Login in BaackEnd");
         }

         if(user){
            console.log("User: " , user);
            res.json(user);
         }
         else{
             console.log("User of Such Email is not Found");
         }



        //  if(user){

        //     console.log("You have SucessFully Logged In");
        //  }
     })

    }
}


module.exports = new LogIn();