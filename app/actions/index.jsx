export var addHobby = (hobby) =>{
    return{
        type:'ADD_HOBBY',
        hobby
    }
};

export var removeHobby = (id) =>{
    return{
        type:'REMOVE_HOBBY',
        id
    }
};

export var addMovie = (movie) =>{
    return{
        type:'ADD_MOVIE',
        movie
    }
};

export var removeMovie = (id) =>{
    return{
        type:'REMOVE_MOVIE',
        id
    }
};  



export var changeName = (name) =>{
    return{
        type:'CHANGE_NAME',
        name
    }
};

export var startLocationFetch = () =>{
    return {
        type: 'START_LOCATION_FETCH'
    };  
};

export var completeLocationFetch = (url) => {
    return {
        type:'COMPLETE_LOCATION_FETCH',
        url
    };
};

export var fetchLocation = () =>{
//  axios.get('http://ipinfo.io').then(function(res){
//      var loc = res.data.loc;
//      var baseUrl = 'http://maps.google.com/?q=';
//      store.dispatch(completeLocationFetch(baseUrl + loc));
//  },function(){
//      
//  });    
    
    return(dispatch, getState) => {
          dispatch(startLocationFetch());
      
          var latitude = '';
          var longtitude = '';
          navigator.geolocation.getCurrentPosition(function(position) {
              latitude = position.coords.latitude; 
              longtitude = position.coords.longitude;
              var baseUrl = 'http://maps.google.com/?q=';
              dispatch(completeLocationFetch(baseUrl + latitude + ',' + longtitude));
  });
    };
};


