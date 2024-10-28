const os= require('os');
const fs=require('fs');
var _=require('loadash');



const user=os.userInfo();
console.log(user);
console.log(user.username);



fs.appendFile('log.txt', 'Hi'+ user.username+'!\n',()=>{
  console.log('file is created');
});