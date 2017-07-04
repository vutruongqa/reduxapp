var redux = require('redux');
console.log("Starting the redux application");

var stateDefault = {
    name:'Anonymous', 
    hobbies:[],
    movies:[]
};

var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'CHANGE_NAME' :
            return{
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return{
               ...state,
               hobbies: [
                ...state.hobbies,
                {
                    id:nextHobbyId++,
                    hobby: action.hobby
                }
               ]
            };
    
        case 'REMOVE_HOBBY':
            return{
              ...state,
              hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)    
            };
    
        case 'ADD_MOVIE':
            return{
                ...state,
                movies:[
                    ...state.movies,
                    {
                        id: nextMovieId++,
                        title: action.title,
                        genre: action.genre
                    }
                ]
            };

         case 'REMOVE_MOVIE':
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.id)
            };
        
        default: 
            return state;
    }
};

var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f=>f));

var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    document.getElementById('app').innerHTML = state.name;
    console.log('New state', store.getState());
});

var action = {
    type: 'CHANGE_NAME',
    name: 'Andrew'
};

store.dispatch(action);

store.dispatch({
    type: 'ADD_HOBBY',
    hobby:'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby:'Walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
   type:'CHANGE_NAME',
   name:'Emily'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Speed',
    genre:'action'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'hello',
    genre:'cartoon'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 2
});

//console.log('Name should be andrew', store.getState());