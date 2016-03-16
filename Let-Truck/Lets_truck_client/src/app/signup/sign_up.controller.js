angular
  .module('letsTruckClient')
  .controller('signupController',signupController);
  function signupController(userService,provinceService,cantonService,distritService,$state,md5,Upload,cloudinary){
    //Mask $scope and global variables
    var vmSignup = this;
    var cantonsLocal = [];
    var distritsLocal = [];
    var  cloudObj = {
      url: 'https://api.cloudinary.com/v1_1/maraicah/upload',
      data : {
        upload_preset : 'roschisp',
        tags : 'users',
        context : 'photo=test'
      }
    }
    var snippedImage;
    //init method
    function init(){
      //
      cantonService.getAll()
        .success(function(data){
          cantonsLocal = data;
        })
        .error(function(err){
          alert('Todo mal');
        });
      //
      provinceService.getAll()
        .success(function(data){
          vmSignup.provinces = data;
        })
        .error(function(err){
          alert('Todo mal');
        });
      //
      distritService.getAll()
        .success(function(data){
          distritsLocal = data;
        })
        .error(function(err){
          alert('Todo mal');
        });
    }
    //Initialize the method
    init();
    //Create user method
    vmSignup.create = function(){
      cloudObj.data.file = document.getElementById('userImage').files[0];
      var algo = Upload.upload(cloudObj)
      .progress(function(e){
        //event.file.progress = Math.round((e.loaded * 100.0) / e.total);
        //event.file.status = "Uploading... " + event.file.progress + "%";
      }).success(function(data,status,headers,config){
          snippedImage = splitURL(data.url);
          createUser(snippedImage);
          console.log(data);
      }).error(function(data,status,headers,config){
          console.log(data);
      });
        /**
         *
         */
        function splitURL(url){
          var arrUrl = url.split('/');
          url = '';
          for(var i=0; i<arrUrl.length; i++){
            if(i == 6){
              url += 'w_242,h_200/'
            }
            if(i == 7) {
              url += arrUrl[i];
            } else {
              url += arrUrl[i] + '/';
            }
          }
          return url;
        }
    }

    //create user
    function createUser(snippedImage){
      user = {
        identification : vmSignup.user.identification,
        name : vmSignup.user.name,
        lastName : vmSignup.user.lastName,
        phone : vmSignup.user.phone,
        direction : vmSignup.user.direction,
        distrit : vmSignup.user. distrit,
        email : vmSignup.user. email,
        role : vmSignup.user.role,
        image : snippedImage,
        password :  md5.createHash(vmSignup.user.password)
      }
      userService.create(user)
      .success(function(data) {
        swal('Success!',
             'Welcome to Lets Truck, now please login!',
             'success')
        $state.go('home');
      })
      .error(function(err) {
        console.log(err);
        alert('todo mal' + err);
      });
    }
    //Charge cantons
    vmSignup.chargeCantons = function(pprovince){
      var cantonsMatch = [];
      for(var i = 0; i < cantonsLocal.length; i++){
        if(pprovince.idProvincia == cantonsLocal[i].Provincia_idProvincia){
           var canton = cantonsLocal[i];
          cantonsMatch.push(canton);
        }
      }
      vmSignup.cantons = cantonsMatch;
    }
    //Charge cantons
    vmSignup.chargeDistrits = function(pcanton){
      var distritsMatch = [];
      for(var i = 0; i < distritsLocal.length; i++){
        if(pcanton.idCanton == distritsLocal[i].Canton_idCanton){
           var distrit = distritsLocal[i];
          distritsMatch.push(distrit);
        }
      }
      vmSignup.distrits = distritsMatch;
    }
  }// End controller
