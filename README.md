## Express generator
- express generator ek folder baba ke detaa hai, jiska matlab aapko khudsee folder nahi babaa haai, to expreess generato saree files ko is folder mein daal deeegaa

## Steps:
- jivan mee ekbar laptop ke install karoo globaly " npm i express-generator -g "
to creat new app anywhere: open cmd move to desktop create new app: "express appname --view=ejs"
now use two comands 
- cd appname 
- npm i open it on vs code

### To run the code type npx nodemon in terminal

## Database
- Khandann is puraa DATABASE --> uskee andarr chotaa chotaa parvar/family haai collection --> uskee andarr hum joo haai chote chote admi haai woo haai collection....

## Code Side  -->   Mongoo DB Side
-  DB  Setup   -->  DB Formation
-  Model    -->     Collection
-  Schema   -->     Document   
## MOngo DB:
- install mongodb
- install mongoosejs
npm i mongoose
- require and setup connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/practicekaro");
- make schema -> iska matlab aapko yee batana baane waala haar document mei kya kya hogaa
mongoose.Schema({
    username: String,
    name: String,
    age: Number,
})
- create model and export
module.exports=mongoose.model("user", userschema);
## Session-
- install session
npm i express-session

- create
req.session.koibhinaam = koibhivalue;
- read
req.session.koibhinaam
- delete
req.session.destroy
## Cookie
- Setup
res.cookie("name",value);
- Cookie reading
req.cookie.name
-cookie delete
res.clearCookie("name")