// This first function loadMain() was originally connected to the database button and was based off of Connor's database connection code
/*function loadMain() {
  let sqlStmt  whereClause1, sqlStmt1;
  sqlStmt = "SELECT * FROM Users";
  whereClause1 = "WHERE age = 27";
  sqlStmt1 = sqlStmt + whereClause1;
  //sqlStmt = sqlStmt + whereClause;
  MySql.Execute( //execute allows any data manipulation (update, delete, insert)
    "107.180.1.16", 
    "13redo",
    "redo13",
    "CIS440",
    sqlStmt1, //sql statement
    function(data) { //callback function - argument in function is to get access to the data
      console.log(sqlStmt)
                     
      for (var i=0; i<data.Result.length; i++) {                    
        document.getElementById("prodFav").innerHTML += data.Result[i].userID + "<br><br>";
        document.getElementById("descFav").innerHTML += data.Result[i].username + "<br><br>";          
        document.getElementById("costFav").innerHTML += "$" + data.Result[i].password + "<br><br>";                     
      }
  });
  document.getElementById("loadmain").disabled = true;
}
*/


// This loadMain() function is connected to the onload on the HTML page and is based off of my (Mayuri's) CIS425 database connection format
document.getElementById ("onload").onload =  function loadMain() { 
  var mySQLpointer, connObj;

  mySQLpointer = require("mysql");

  connObj = mySQLpointer.createConnection( 
        { 
          host:     "107.180.1.16", 
          user:     "13redo",
          password: "redo13",
          database: "CIS440"
        } );

// To Be Completed in Class 
  connObj.connect(function(err) {
    if (err)
      console.log("Connection Error" + err.stack);
    else{
      console.log("Connected to DB! :) ID = " + connObj);
    }
  });

  connObj.end();
}