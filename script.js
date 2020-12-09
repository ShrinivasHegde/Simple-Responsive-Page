    var database = [
        {
            username:"Andrie",
            password: "secret",
        
        },
        {
            username:"shrinivas",
            password: "super"
        },
    ];

    var newsfeed = [
        {
            username:"Bobby",
            timeline:"So tiered",
        },
        {
            username:"Andy",
            timeline:"JS is Super cool",
        },

    ];
    var userNamePromt = prompt("What is your userName ?");
    var passwordPromt = prompt("What is your password ?");

//function isUserValid()

    function isUserValid(username,password){
                for( var i=0; i< database.length; i++){
                    if(database[i].username==username && database[i].password==password){
                    return true;
                    }
                    
                    }
                    return false;
                }
           function signIn(username,password){ 
            
            if(isUserValid(username,password))
                        {
                        console.log(newsfeed);
                        }
                        else{
                            alert("Please give correct userName or password")
                        } 

            }

signIn(userNamePromt,passwordPromt);


/* //in order to check sign in eed username password fro, databse
                    
                    if(user === database[1].username && 
                        pass === database[1].password) */