var redux = require('redux');
var axios = require('axios');
console.log("Starting the redux application");

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    console.log('New state', store.getState());

    if(state.map.isFetching){
        document.getElementById('app').innerHTML = 'Loading...';
    }else if (state.map.url){
        document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
    }
});

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Andrew'));

store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Walking'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Emily'));

store.dispatch(actions.addMovie('Speed','action'));
store.dispatch(actions.addMovie('Hello','Cartoon'));
store.dispatch(actions.removeMovie(2));
