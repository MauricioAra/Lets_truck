angular
  .module('letsTruckClient')
  .controller('createTruckController',createTruckController);
  function createTruckController($state,truckService,Upload,cloudinary){
    var vmCTruck = this;
    var lidDriver = localStorage.getItem('idUser');
    var  cloudObj = {
      url: 'https://api.cloudinary.com/v1_1/maraicah/upload',
      data : {
        upload_preset : 'roschisp',
        tags : 'trucks',
        context : 'photo=test'
      }
    }
    var snippedImage;
    //Init function
    vmCTruck.create = function(){
      cloudObj.data.file = document.getElementById('truckImage').files[0];
      var algo = Upload.upload(cloudObj)
      .progress(function(e){
        //event.file.progress = Math.round((e.loaded * 100.0) / e.total);
        //event.file.status = "Uploading... " + event.file.progress + "%";
      }).success(function(data,status,headers,config){
          snippedImage = splitURL(data.url);
          createTruck(snippedImage);
      }).error(function(data,status,headers,config){
          console.log(data);
      });

        function splitURL(url) {
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

        /**
         *
         */
        function createTruck(snippedImage){
          //
          truck = {
            brand : vmCTruck.brand,
            model : vmCTruck.model,
            year : vmCTruck.year,
            licensePlate : vmCTruck.licensePlate,
            tonnage : vmCTruck.tonnage.toString(),
            ramp : vmCTruck.ramp,
            refrigerated : vmCTruck.refrigerated,
            extras : vmCTruck.extras,
            idDriver : lidDriver,
            image : snippedImage,
            state : "true"
          }
          //
          truckService.create(truck)
          .then(function(data){
            swal(
              'Success',
              'Truck created!',
              'success'
            )
            $state.go('trucks');
          }).catch(function(e){

          });
        }
     }
  }
