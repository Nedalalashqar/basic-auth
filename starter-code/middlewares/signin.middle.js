'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const autheModel = require('../models/auth.model');

module.exports = async (req,res,next)=>{
    let basicHeaderParts = req.headers.authorization.split(' ');
    let encodedString = basicHeaderParts.pop();
    let decodedString = base64.decode(encodedString);
    let [username, password] = decodedString.split(':');
    try {
         const user = await autheModel.findOne({ where: { username: username } });
         const valid = await bcrypt.compare(password, user.password);
         if (valid) {
         next()
         }
         else {
         next('Invalid UserName / Password')
         }
      }catch (error)
         {
            next('Error in signin')
         }

}