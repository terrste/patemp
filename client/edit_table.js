Template.edit_table.helpers({
  users:function(){
    return Meteor.users.find();
  },
  tableId: function(){
    return Session.get("tableId");  
  },

  table: function(){
    return Session.get("current_table");  
  },


  isRunning: function(){
    var table = Session.get("current_table");  
    if (table.state == 'running'){
      return true; 
    } else {
      return false; 
    }
  },

  getClass: function(userId){
      var tableId = Session.get("tableId"); 
      var table = Tables.findOne({_id:tableId}); 

      var result = false; 
      for(var i=0; i< table.players.length; i++){
        if (table.players[i] == userId){
          result = true; 
        }
      }
      //console.log('getClass result:' + result);
      return result?'table-user-selected':'table-user-unselected'; 
  }
});



Template.edit_table.events({
  
   "click .js-start-table": function (event) {
    event.preventDefault();
    var tableId = Session.get("tableId"); 
    var table = Tables.findOne({_id:tableId}); 
    table.state = "running"; 
    Meteor.call("updateTable", table);
    Session.set("current_table", table); 
    Router.go('/current_table/' + tableId);
    
  },


  "click .js-remove-table": function () {

    var tableId = Session.get("tableId"); 
    var table = Tables.findOne({_id:tableId}); 
    table.active = false; 
    Meteor.call("updateTable", table);
    
  },

 "click .js-toggle-select-user": function () {

    var tableId = Session.get("tableId"); 
    var table = Tables.findOne({_id:tableId}); 

    /* for(var i=0; i< table.players.length; i++){
      if (table.players[i] == this._id){
        result = true; 
      }
    }*/
    //console.log(table); 
    var index = table.players.indexOf(this._id);
    //console.log("player index:" + index); 
    if (index < 0){
      //add
      table.players.push(this._id); 
    } else {
      //remove
      table.players.splice(index, 1);
    }
    //console.log(table); 
    Meteor.call("updateTable", table);
    //alert("click" + this._id); 
  }
});