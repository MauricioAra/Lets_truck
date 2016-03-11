    //'database': 'mongodb://noder:noderauth&54;proximus.modulusmongo.net:27017/so9pojyN'
    //mongoose.connect('mongodb://localhost/lets_truck');
    module.exports = {

      initialize: function(next){
        // initialization actions, there can be many of these
        this.initializeDB(next);
      },

      initializeDb: function(next){
        mongoClient.open(function(err, mongoClient) {
          if(err) return next(err);
          module.exports.db = mongoClient.db('mongodb://localhost/lets_truck');
          next();
        });
      }
    }
