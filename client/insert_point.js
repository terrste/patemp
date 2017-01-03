Template.telesina_list.helpers({
  table:function(){
     var tableId = Session.get("tableId"); 
     var table = Tables.findOne({_id:tableId});
     return table; 
  },

  telesine:function(){
    return telesine;
  }
});

Template.suits_list.helpers({
  table:function(){
     var tableId = Session.get("tableId"); 
     var table = Tables.findOne({_id:tableId});
     return table; 
  },

  suits:function(){ 
    return suits;
  },

  isPointCo: function(){
    var hand = Session.get("hand");
   
      if(hand.type=='CO'){
        return true; 
      }  else {
        return false; 
      }
    
  }
});






Template.suits_list.events({

  "click .js-set-point": function (event) {

      event.preventDefault();
      var tableId = Session.get("tableId"); 

      var suitId = event.currentTarget.getAttribute('data-id');
      var suit; 
      for (var i=0; i<suits.length; i++){
        if(suits[i].id==suitId){
          suit = suits[i]; 

        }
      }

      Session.set("suit", suit); 

      var winner =  {
        user: Session.get("userWinner"),
        hand: Session.get("hand"),
        point_suit: Session.get("suit")
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


