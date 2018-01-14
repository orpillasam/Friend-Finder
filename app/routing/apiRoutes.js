
var friendsData = require("../data/friends");


module.exports = function(app) {

  
    app.get("/api/friends", function(req, res) {
      res.json(friendsData);
    });
  
    app.post("/api/friends", function(req, res) {
 
        var newFriend = req.body.scores;
        var scoresArray = [];
        var bestMatch = 0;
        var count = 0;
  
        for (var i = 0; i < friendsData.length; i++){
            for(var j = 0; j , newFriend.length; j++){
                var score1 = parseInt(newFriends.scores[j]);
                var score2 = parseInt(friendsData[i].score[j]);
                totalDifference += Math.abs(score1 -score2);
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
            
            friendsData.push(newData);
            res.json(friendsData[bestMatch]);
    });
      
};


        


  

  
