Template.point_heights.events({

  "click .js-set-point": function (event) {
      
      //console.log("VIEW WINNER" + this.params._id);
      event.preventDefault();
      var tableId = Session.get("tableId"); 

      var pointId = event.currentTarget.getAttribute('data-id');
      var point_height; 
      for (var i=0; i<point_heights.length; i++){
        if(point_heights[i].id==pointId){
          point_height = point_heights[i]; 

        }
      }

      var winner =  {
        user: Session.get("userWinner"),
        hand: Session.get("hand"),
        point_suit: Session.get("suit"),
        point_height: point_height
      }

      Session.set("winner", winner); 
      
      //console.log(winner);
      
      var plate = {
        table: tableId, 
        type:1,
        winners:[winner]
      }  

      Meteor.call("addPlate", plate);

      /*Plates.insert(
      {
        table: tableId, 
        type:1,
        winners:[winner]
      }
      );*/


      var users = Meteor.users.find().fetch();

      //console.log(users); 
      var plates = Plates.find({table: tableId}).fetch();

      Session.set("table_hands",plates); 

      console.log(plates); 
      var players = []; 

players = getPlayersWithPoints(users, plates);
      
      /*for (var i = 0; i<users.length; i++){
        // console.log('user:' + i); 
        var points = 0; 
        var player = users[i];

        for(var j=0; j<plates.length; j++){
          // console.log('plate:' + j); 
          for(var k=0; k<plates[j].winners.length; k++){
            // console.log('winner:' + k); 
            //points++; 
            if(plates[j].winners[k].user != null && plates[j].winners[k].user != undefined){
              if(plates[j].winners[k].user._id == player._id){
                points++; 
              }
            }        
          }
        }
        player.points = points; 
        players.push(player); 
      }*/
      //console.log(players); 

      Session.set("player",players); 
      Router.go('/current_table');
  }
});
