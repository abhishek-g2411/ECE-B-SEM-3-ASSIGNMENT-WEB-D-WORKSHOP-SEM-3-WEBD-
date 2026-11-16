const fs = require("fs");

fs.writeFileSync("notes.txt" , "hello.js" , (err) => {
    if(err){
        console.error("ERROR OCCURED" , err)
        console.log("file created successfully ");
        
    }else{
        console.log("filed created successfuly ");
    };

    fs.appendFileSync("notes.txt" , "hello node js" , (err) => {
        if(err){
            console.log("error occured while appending to ffile:" , err);
            
        }else{
            console.log("data appended successfully");
            
        }
    })
} ) 
