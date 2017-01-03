



Meteor.methods({
  
  addTable:function(table){
    var tableId;
    if (!this.userId){// not logged in
      console.log("not logged in");
      return;
    }
    
    tableId = Tables.insert(table);
    return tableId;
    
   /* var user1 = Meteor.users.findOne({_id:chat.user1Id});
    var user2 = Meteor.users.findOne({_id:chat.user2Id});

    if(user1 && user2 && (user1._id == this.userId || user2._id == this.userId)){
      chatId = Chats.insert(chat);
      console.log("addChat method: got an id "+chatId);
      return chatId;
    } else {
      console.log("chat users not valid");
      return; 
    }*/
  },

  updateTable:function(table){
    console.log("updateTable method");
    //console.log(table);
    if (!this.userId){// not logged in
      return;
    } else {
      Tables.update(table._id, table);
    }    
  },

  removePlate:function(plateId){
    console.log("removePlate method");
    //console.log(table);
    if (!this.userId){// not logged in
      return;
    } else {
      Plates.remove(plateId); 
    }    
  },



  addPlate: function(plate){
    var plateId;
    if (!this.userId){// not logged in
      console.log("not logged in");
      return;
    }
    //set timestamp for plate
    plate.date = new Date();
    plateId = Plates.insert(plate);
    return plateId;
  }



  /*,

  getUserNameById: function(userId){
    console.log("getUserNameById");
    console.log(userId);
    var user = Meteor.users.findOne({_id:userId});
    var username = user.profile.username;
    console.log(user);
    console.log("user.profile.username:" + username);
    return username;
  }*/
})