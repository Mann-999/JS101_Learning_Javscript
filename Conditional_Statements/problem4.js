let user_id = "shady";
let user_password = "slimshady";

let ent_id = "shady";
let ent_password = "slimshady";

if(user_id=ent_id){
  if(user_password=ent_password){
    console.log("Login successfull");
  } else {
    console.log("password incorrect");
  }
} else {
  console.log("user id incorrect");
}