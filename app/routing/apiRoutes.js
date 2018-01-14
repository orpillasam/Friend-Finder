
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
        for (var i = 0; i < friendsData.length; i++){
            for(var j = 0; j < newFriend.scores.length; j++){
                var score1 = parseInt(newFriend.scores[j]);
                var score2 = parseInt(friendsData[i].scores[j]);
                totalDifferences += Math.abs(score1 -score2);
            }
            if ( i === 0){
                bestScore = totalDifferences;
                bestMatch = 0;
              }
              else if(i !== 0 && totalDifferences < bestScore){
                bestScore = totalDifferences;
                bestMatch = i;
              }
              totalDifferences = 0;
            }
            
            friendsData.push(newFriend);
            res.json(friendsData[bestMatch]);
    });
      
};


        


  

  
