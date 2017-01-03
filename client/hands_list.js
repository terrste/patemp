Template.hands_list.helpers({
  userWinner:function(){
    return Session.get("userWinner"); 
  },

  hands:function(){
    return hands;
  },

  isPointHi: function(id){
    
    for(var i=0; i<hands.length; i++){
      if((hands[i].id == id) && (hands[i].type=='HI')){
        return true; 
      }      
    }
    return false; 
  },
  isPointCo: function(id){
    for(var i=0; i<hands.length; i++){
      if((hands[i].id == id) && (hands[i].type=='CO')){
        return true; 
      }      
    }
    return false; 
  },
  isPointNv: function(id){
    for(var i=0; i<hands.length; i++){
      if((hands[i].id == id) && (hands[i].type=='NV')){
        return true; 
      }      
    }
    return false; 
  }
});


Template.hands_list.events({

  "click .js-set-point": function (event) {

      event.preventDefault();
      var tableId = Session.get("tableId"); 

      var handId = event.currentTarget.getAttribute('data-id');
    
      var  hand; 
      for (var i=0; i<hands.length; i++){
        if(hands[i].id==handId){
          hand = hands[i]; 
        }
      }
      
      var winner =  {
        user: Session.get("userWinner"),
        hand: hand
      }

      Session.set("winner", winner); 
      
      var plate = {
        table: tableId, 
        type:1,
        winners:[winner]
      }  

      Meteor.call("addPlate", plate);

      var users = Meteor.users.find().fetch();
      //console.log(users); 
      var plates = Plates.find({table: tableId}).fetch();

      Session.set("table_hands",plates); 

      console.log(plates); 
      var players = []; 

      players = getPlayersWithPoints(users, plates);
      
     /* for (var i = 0; i<users.length; i++){
        var points = 0; 
        var player = users[i];

        for(var j=0; j<plates.length; j++){
          for(var k=0; k<plates[j].winners.length; k++){
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

      Session.set("player",players); 
      Router.go('/current_table');
  }
});








