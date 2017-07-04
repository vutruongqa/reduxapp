var redux = require('redux');
console.log("Starting the redux todo application");

var stateDefault = {
    searchText:'',
    showCompleted:false,
    todos:[]
};

var reducer = (state = stateDefault, action) => {   
    switch(action.type){
        case 'CHANGE_SEARCH_TEXT':
            return{
                ...state,
                searchText:action.searchText
            };
        default:
            return state;
    }  
};

var store = redux.createStore(reducer, redux.compose(window.devToolsExtension ? window.devToolsExtension() : f=>f));

//subscribe to change
store.subscribe(()=>{
   var state = store.getState();
   console.log('searchText is', state.searchText);
   document.getElementById('app').innerHTML = state.searchText;
});
//unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Andrew'
};

store.dispatch(action);

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Emily'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Dog'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Girl'
});
