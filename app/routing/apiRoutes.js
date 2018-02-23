
var friendsData = require("../data/friends");


module.exports = function(app) {

  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
    app.post("/api/friends", function(req, res) {
 
        var newFriend = req.body;
        var totalDifferences = 0;
        var bestScore = 0;
        var bestMatch = 0;

        console.log(newFriend);
        console.log(friendsData);

        //this compares scores of the the user with all the friends in the friends array
        //first loop is to loop through the friends
        for (var i = 0; i < friendsData.length; i++){
            //second loop is to compare the scores
            for(var j = 0; j < newFriend.scores.length; j++){
                var score1 = parseInt(newFriend.scores[j]);
                var score2 = parseInt(friendsData[i].scores[j]);
                totalDifferences += Math.abs(score1 -score2);
            }
            //sets the first friend in the array to be the best match. 
            if ( i === 0){
                bestScore = totalDifferences;
                bestMatch = 0;
              }

              //Then compares subsequent friends' best scores to this friend until it finishes the array
              else if(i !== 0 && totalDifferences < bestScore){
                bestScore = totalDifferences;
                bestMatch = i;
              }
              totalDifferences = 0;
            }
            
            //pushes the best match to the database
            friendsData.push(newFriend);
            res.json(friendsData[bestMatch]);
    });
      
};


        


  

  
