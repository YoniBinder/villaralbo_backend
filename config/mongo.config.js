let mongoose = require("mongoose")

mongoose.connect(
    
    `mongodb+srv://Shalom1029:Deri1029Shalom@villaralbo.4ngcq.mongodb.net/villaralbo?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology: true
    }).then(
        ()=>console.log("Mongo database connected")
        
    ).catch(
        err=>console.log(err)
    )


// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);