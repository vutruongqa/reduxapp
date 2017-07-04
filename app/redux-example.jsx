var redux = require('redux');
console.log("Starting the redux application");

// Name reducer and action generators
//---------------------
var nameReducer = (state = 'Anonymous',action) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
}; 

//action generator
var changeName = (name) =>{
    return{
        type:'CHANGE_NAME',
        name
    }
};

// Hobby reducer and action generators
//---------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [],action) => {
      switch(action.type){
          case 'ADD_HOBBY':
              return [
                  ...state,
                  {
                      id: nextHobbyId++,
                      hobby:action.hobby
                  }
              ];
          case 'REMOVE_HOBBY':
              return state.filter((hobby) => hobby.id !== action.id);
          default:
              return state;
      }
};

//action generator
var addHobby = (hobby) =>{
    return{
        type:'ADD_HOBBY',
        hobby
    }
};

var removeHobby = (id) =>{
    return{
        type:'REMOVE_HOBBY',
        id
    }
};

// Movie reducer and action generators
//---------------------
var nextMovieId = 1;
var moviesReducer = (state = [],action) => {
      switch(action.type){
          case 'ADD_MOVIE':
              return [
                  ...state,
                  {
                      id: nextMovieId++,
                      movie:action.movie
                  }
              ];
          case 'REMOVE_MOVIE':
              return state.filter((movie) => movie.id !== action.id);
          default:
              return state;
      }
};

//action generator
var addMovie = (movie) =>{
    return{
        type:'ADD_MOVIE',
        movie
    }
};

var removeMovie = (id) =>{
    return{
        type:'REMOVE_MOVIE',
        id
    }
};    
    
var reducer = redux.combineReducers({
   name: nameReducer,
   hobbies: hobbiesReducer,
   movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f=>f));

var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    document.getElementById('app').innerHTML = state.name;
    console.log('New state', store.getState());
});

store.dispatch(changeName('Andrew'));

store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Walking'));
store.dispatch(removeHobby(2));

store.dispatch(changeName('Emily'));

store.dispatch(addMovie('Speed','action'));
store.dispatch(addMovie('Hello','Cartoon'));
store.dispatch(removeMovie(2));
