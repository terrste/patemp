 
Meteor.startup(function () {

});

Template.registerHelper("labels", function(){
  return labels; 
});



Template.point_heights.helpers({
  point_heights:function(){
    return point_heights;
  }
});

Template.view_winner.helpers({
  winner:function(){
    return Session.get("winner");
  },

});

Template.configure_players.helpers({
  users:function(){
    return Meteor.users.find();
  }
});





Template.available_user.helpers({
  getUsername:function(userId){

    user = Meteor.users.findOne({_id:userId});

    return user.profile.username;
    
  }, 
  isMyUser:function(userId){
    if (userId == Meteor.userId()){
      return true;
    }
    else {
      return false;
    }
  }
});

Template.edit_player.helpers({
  profile:function(userId){

    user = Meteor.users.findOne();
    console.log(user);
    return user.profile;
    Meteor.call("removePlate", plateId);
  }
});




Template.todo_list.events({

  "click .js-route-redirect": function () {
    alert('click'); 
    Router.go('/');
  }
});








