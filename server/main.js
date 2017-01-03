 Meteor.startup(function () {
    if (!Meteor.users.findOne()){
      for (var i=1;i<9;i++){
        var email = "user"+i+"@test.com";
        var username = "user"+i;
        var avatar = "ava"+i+".png"
        console.log("creating a user with password 'test123' and username/ email: "+email);
        Meteor.users.insert({profile:{username:username, avatar:avatar}, emails:[{address:email}],services:{ password:{"bcrypt" : "$2a$10$I3erQ084OiyILTv8ybtQ4ON6wusgPbMZ6.P33zzSDei.BbDL.Q4EO"}}});
      }
    } 
  });



/*

    MusicMachine.remove({});
    var state = {
      start: 0,
      tracks:[]
    };
    for (var i=0; i<tracks.length; i++){
      var track = {
        id: tracks[i].id,
        vol: 0,
        slider1: 50,
        slider2: 50
      }
      state.tracks.push(track);
    }
    if (MusicMachine.find().count() === 0) {     
      MusicMachine.insert(state);
    }*/