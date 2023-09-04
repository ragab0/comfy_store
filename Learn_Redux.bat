========================================================================:
==== REDUX: A (predictable) (state container) for (JavaScript Apps) ====:
========================================================================:
   
It is for JS apps:
 - It is a library;
 - It is Not tied to react;
 - It can be used with any library\framework or even vanilla JS;

It is a state container:
 - It stores the (ROOT) state of our app (loginState{user,p,submitting: false} + userListCompState{users:[]}, ...);
 - Which is shared by all the individual comps(SLICEes) of our app;
 . "by combining them in one reducer => one store => OneProvider to access them";

It is predictable: (in what way)?
 - EX: todo list app - item(pending) -> item(completed);


Why redux:
 - If you want to manage the global state, the app-state in a predictable way;
 - It make us understand with its pattern and tools that provided (When, where, why, how) the state is being updated,
   And how ur app logic will behave when those changes occur;
 - Redux guides you writing code that is predictable and testable,
   which helps and give you confidence that your app will work as expected;


RTK & Redux & React-Redux:
===
What is the redux toolkit package:
 - It is the official, the opinionated, batteries-included tools for efficient Redux development;
 - It is intented to be the standard way to write redux logic AND IT DOES :D;

Why toolkit:
 - It Serves as an "abstraction" over redux (it hides the difficult parts);
 Redux:
 - Configuring seems complicated;
 - Need a lot of other packages have to be installed;
 - Requires too much boilerplate code (repeating the same pattern every time you have to add a funcallty);

React-redux:
 - Redux( and rtk) doesn't need a UI library BUT to use in react then ..:
 - It is the official Redux UI binding library for React;
   React -----> react-redux <----- Redux(Redux toolkit);


When to use them:
=================
 . BECAUSE it adds some direction on our code and ask we to follow some restrictions, ITS very off between short\long term productivity
 - When you have a large amounts of app state that are neede in many places in our app;
 - The app state is updated frequently over time;
 - The logic to update that state may be complex;
 - The app has a medium or large-sized codebase, and might be worked on by many people;


BE AWARE!!:
 - The most basic mistake you can do is learning redux and react in parallel;

Did you know:
 - Redux has learning curve: you need to go through 2 || 3 times JUST to wrap your head around the basics;
 - We'll learn:
  -- Redux;
  -- & Toolkit;
  -- React-Redux;




===============================:
=== 3 - Three Core Concepts ===: (store, reducer, action)
===============================:

Entities & their Activities:
 01 Shop ("store"): stores cakes on a shelf;
 02 Shopkeeper ("reducer"): behind the counter;
    >> Check and box a cake from the shelf and keep track (the number of cakes || handles actions\updates);
    .. "ALL THAT by dispatching the name of action to it.. only one WORD do all that :))";
 03 Customer ("action"): at the store entrance;
    >> Order a cake from the reducer(shopkeeper);


SO PURPOSES are (Concepts are):
 - A "store" holds the state of our app (getState, dispatch, subscribe(listner), ...);
 - A "reducer" handles the action and decides how to update the state "RELATED to one word.. the action tyep";
 - A "ction" describes what happend in our app "THE key to sequens of steps and handling";



============================:
=== 4 - Three Principles ===: (state an obj, actions dispatched, reducers catchsed disp..) "Descripes redux pattern";
============================:

First principle (for store):
 - "The ROOT state is stored as an object inside a single store";

Second principle (for action):
 - "The only way to change the state is to dispatch a(PREknown) action, an object that describes what happend";
   -- Not allowd directly update JUST ONLY with an action (PREknown) that let redux know what happend;
   -- (You must order a cake YOU can't take a one without an order) {type=cake_ordered };
   .. SO state is "only-read" BUT TO WRITE THEstate you need to transfer\dispatch an action;

Third principle (reducer):
 - "To specify how tree is updated based on actions, you write pure reducers (return new one NOT edited-one)";



===================:
=== 5 - Actions ===: (var, action creator of objs, initialState, reducer) "and the 4 steps to write redux app"; 
===================:
"THE key of any change";
-It is: the only way our app can interacte with the store\STATE;
-It is: carry some infos from our app to the redUx stoRe;
-It is: a JS Object;
-It is: must have the "type" prop OR ANY that describes what happend in our app;

01 TYPES constants
Defining the actions type on separated vars at the top, carrying the same name of action ident both UPPERCASE, 
  - const CAKE_ORDERED = 'CAKE_ORDERED';
  - const CAKE_ORDERED = 'CAKE_ORDERED';
  - const CAKE_ORDERED = 'CAKE_ORDERED';

02 ACTION creators
Return the action on an object from the Action function creator;
  - function orderCreator() ({type: CAKE_ORDERED, ..});

03
defining the initialState;
04
and finally writing our reducers functions;


====================:
=== 6 - Reducers ===:
====================:

-It Descripes "how" the the app's state changes in response to actions(which descripes "what") sent to the store;
-It is about a func accepts state && action as args, and returns the next state; 
  ## function(currentState = initialState, action);


=================:
=== 7 - Store ===: 
=================:

Action: indecate "WHAT" happend; "THE KEY of any change";
Reduce: indecate "HOW" update the state based on those actions;

It: brings the action and reducer together AS args;
It: is one, for the entire app (THE ROOT);
It: is responsible for
    01 holding the app state;
    02 allows access to state via getState();
    03 allows state to be updated via dispatch(action);
    04 allows our app to register middlewares\
       listeners through the subscribe method which accepts a callback func as an arg, executed in any change;
    05 handles unregistering of listeners via the func returned by (unsubscribe=subscribe(listner));

    >>
    01 BY: const { leagacy_createStore } = require('redux'); 
       BY: const store = leagacy_createStore(reducer) // after importing the reducer :D;
    02 BY: console.log('theState is', store.getState());
    04 BY: store.subscripe(aListnerFun): like useEffect;
    03 BY: store.dispatch(actionObj || actionCreator());
    05 BY: const unSubscriber = 04: like clearInterval; unSubscriber();


======:
= 08 =: payload
======:
BEST practice in sendding additional values is: to use the idintifire `"payload"` for addition;
LIKE we using the keyword "type" to difine the kind of action that weadd passed;


================================:
=== 9 - Bind Action Creators ===:
================================:
const actions = redux.bindActionCreators({orderCakeFunc, restokCakeFunc, actionFunc3, actionFunc4, ...}, store.dispatch):
  .. actions.orderCake() : == : store.dispatch(orderCake):
  .. Returns an object its keys are the name of actions which we mirrored,
     and its value are the bindor funcm passed in it the action as an argu;



=================================:
=== 10 - Cakes and Ice Creams ===:
=================================:
Cake: Shop;
Stored: On the shelf;
Shopkeeper: To handle CAKE_ORDERED from a customer;

Ice: Sell;
Stored: On the freezer;
Shopkeeper: New one to handle ICE_ORDERED from a customer "even if they are share the same logic\props\prop_identifires";

```
  SPLIT THE JOB INTO SEPARATE SHOPKEEPERES is more easier and help us with 
      "Scalability",
      "Narrow down on a problem",
      "test",
      "debug, manage, keep tracking of (when using multiple reducers)",
      "analysis_Cover_TheProblem when one arise";
```

==============================:
=== 11 - Multiple Reducers ===:
==============================:
=== 12 - Combine Reducers ====:
==============================:
-"They help us debug, manage, keep tracking of (when using multiple reducers) ^^",
const { combineReducers } = require("");
const rootReducer = combineReducers({reducer1, red2 :: reducer2, ...});
  .. RETURNS a single reducer AFTER combining the all in only one and this one is the rootReducer;
  .. THE earlier reducer(n+1) override this one(n) : D;
  .. when we dispatch an action the "all reducer (rootReducer) recieve that action";
  .. each of the reducers is managing its own part of our app global state;



==================:
=== 13 - Immer ===:
==================:
as we know we should never mutate the state(THE IMMUTABLE :D) and always return a new object\state: ;
what if we have a muti nested objects inside nested objects (complex state?): ;
should we copy\reSpread the objects to only change a prop: 
  - return {...state, adresses:{...state.adresses, eg:{...state.addresses.eg, giza:{...state.addresses.eg.giza, firstHouse:''}}}} !!! whatAHell;

-It is a library help us handle immutable data structres and works very well with redux:
  - const { produce } = require('immer');
-It allows us to update the draft state as if it is mutable (COPY a DEEP version & MAKE it mutable & return it after the changes):
  - return produce(state, (draft) => { draft.addresses.eg.giza.firstHouse += action.payload });
  FUNCTION produce(immutableObject, callback) {
    draftObj = makeImuti(immutableObject);
    callback(draftObj); {our changes};
  }


=======================:
=== 14 - Middleware ===:
=======================:

-It is: the suggested way to extend redux with custom functionality (if you want redux with extra features);
-It is: provide a third-party extension point between dispatching an action,
        and the moment it reaches the reducer; (action ---> theMiddleware <--- reducer);
-It is: used for logging(redux-logger), crash reporting, perfroming async tasks etc;
        INSTEAD of using subscribers :D;

-logger:
=======:
 - const { createLogger } = require('redux-logger');
 - const logger = createLogger();
 - const { applyMiddleware } = redux;
 - const store = createStore(rootReducer, applyMiddleware(logger)): ;



-15 async actions:
=================:
SYNC: As soon as an action was dispatched, the state was immediately updated;
ASYNC APIs actions: calls to fetch data from an end point and use that data in your app;

Our app that we'll practice in:
 fetches a list of users from an API end point and stores it in the redux store;
 -State: how it will look like;
  -- state = {loading: true, data: [], error: ''};

 -Action: what is the difference actions;
  -- FETCH_USERS_REQUESTED: ;
  -- FETCH_USERS_SUCCEEDED: ;
  -- FETCH_USERS_FAILED: ;

 -Reducer: how it would work;
  -- case 01: loading: true;
  -- case 02: loading: false, users: data(from the API);
  -- case 03: loading: false, error: erro(from the API);


16 - Redux Thunk Middleware:
===========================:
-It is used with network requests for making API calls with redux;

axios package:
 - Requests to an API end point;
 
redux-thunk package:
 - It is a package from redux-ecosystem;
 - It is define async actionCreators in our app (the standard way);
 - It is a middleware;



=============================================================:
===== Redux Toolkit Tutorial - 17 - Redux Toolkit Intro =====:
=============================================================:
Redux requires too much boilerplate code:
  - Action: const;
  - Action: the obj (which returned from the action: creator);
  - Action: the creator (which returns the action: the obj);
  - Switch: statement in a reducer;

Redux requires a lot of other package to be installed to work with them:
  - Redux-thunk;
  - Immer;
  - Redux-devtools;

What does toolkit do:
  - Abstract over the setup process;
  - Handle the most commen use cases;
  - Include some useful utilities;
  . LET the developers focux more on their app;


==========================:
=== 18 - Project Setup ===: 
==========================:
npm i @redux/toolkit;
Redux toolkit has its own folder structure and we are going to follow:
 - /app: the folder;
 - /app/store.js: the file inside the app folder (contains the code that is related to the redux store);
 - /features: the folder (contains all the features of our app [cakeShop, iceCreamShop]);
 - /features/feature_1/f1.js: each feature has its own folder inside the features folder;


=======================:
=== 19 - Cake Slice ===:
=======================: 
Recomended:
  - TO group together 01 the reducer logic and 02 actions for a sginle feature in a single file(contains a slice.. as a suffix :D);
  - The entire app state is split into slices(cake, ice) and managed individually بشكل فردي;

slice:
 01 const createSlice = require('@reduxjs/toolkit').createSlice: ;
 02 const initialState = {};
 03 const cakeSlice = createSlice (
   {name 'cake', initialState, reducers = {(case1\switch1\action1)(ItsOwnreducer): (state, action) => {}}}): ;
 04 module.exports = cakeSlice.reducer: ;
 05 module.exports.cakeActions = cakeSlice.actions: ;

With it:
 01 We don't have to explicelty return the new state;
 02 We can directly mutate(UPdate\CHange) the state WITHout Return anything LIKE (myState.prop += 1) directly! ;

How it works:
- the createSlice automatically generate 1THE reducer prop WHICH equal to the reducers that we defined WHICh returned from>>;
- the createSlice automatically generate 2THE ACTIONS prop whith the name of the reducer that we created;
 - the `action creator` returns the main reducer func(THAT handle only this\its action);


rtk slice take care of: (generate reducer & actions)
 01 defining actions type in CONSTANTS;
 02 action creators;
 03 the returned of the action creators(the object);
 04 the switch statement in the reducer; 
 - 05 handling the immutable updates in the reducers; 
 . BY DOING THOSE, WE addressing the concerns معالجة المخاوف around the redux;
 . AND we have reduced the boilerplate code;
 . AND we have reduced importing additional libraries explicitly;
 . "rtk ABSTRACTS يلخص AWAY ALL OF THAT";


==============================:
=== 20 - Configuring Store ===:
==============================:

/app/store.js:
 - const { configureStore } = require('@redux\toolkit');
    -- We use the configureStore method from rtk to define our store IN THE /app/store.js;
 - const store = configureStore({reducer: {cake: cakeReducer, ice: iceReducer, ..}});
    -- It is like combining the reducers in one reducer object;
    -- SO we imports the reducers slices
       ## const cakeReducer\cakeSlice(TheDefaultExport) = require("../features/cake/cakeSlice");
 - module.exports = store;
    -- And finaly we exports the store TO show import it in /index.js
 
/index.js:
 - We use the createStore method from rtk to create the store IN THE /index.js;
    ## 
 - And imports the store and its actions:
   ## const store = require("./app/store");
 - Apply what you learned:
   ## console.log("initialState", store.getState());
   ## const unsubscribe = store.subscribe(() => console.log("State is updated and becomes:", state.getState()));
   -- To dispatch an action:
      01 import the actions of the feature you need;
      ## cakeActions = require("thefile").cakeActions the exported;
      02 apply it directly to the store var;
      ## store.dispatch(cakeActions.ordered());


====================================:
=== 21 - Create Iceslice feature ===: (Again);
====================================:

01 const { createSlize } = require("@reduxjs/toolkit");
02 const initialState = {numOfIce: 10};
03 const iceSlice = createSlice({name: "iceCream",nitialState,
04 reducers: {}});
05 exports ...;
06 imports and attaches the reducer to our store + its actions also;


==============================:
=== 22 - Logger middleware ===:
==============================:
It serves two purposes
  01 It extends rtk functionality AS a middleware LIKE any middles;
  02 It gives us insight into the actions dispatched which i am keen for you to see & understand what rtk does under the hood
    1 prevState: {};
    2 action: {type: "cake/ordered"}: It tells from where it ocmes;
    3 nextState: {};

Installed with:
  -- npm i redux-logger;

app/store.js
  - Create the logger;
    -- const { createLogger } = require('redux-logger');
    -- const logger = createLogger();
  
  - Apply the logger 
    -- IN REDUX:
    ## const store = createStore(rootReducer, applyMiddleware(logger)): ;

    -- IN RTK:
    >> It applies as an option of the obj configureStore options with the propName of: middleware;
    ## middleware: function(getDefaultMiddleware) {};
       -- It recieves a func as an argu returns the default middleware;
       -- It returns the argu with calling it with concatenating the list(WHY a list? ["#0"]) with our loggerMiddleware that we need;
       ## getDefaultMiddleware().concat(logger);

Why a list ["#0"]?;
  - We did that because the configureStore func by default adds some middleware to the redux store setup automatically;
  - SO we append the logger to our list of our middleware;


===========================:
=== 23 - Extra Reducers ===:
===========================:
-When we dispatch an action the all redcuers recives that action one accepth and the others ignore;
-We can add the same action at many reduceres, 
 once it get invoked tha all reduceres that have the same action accepts BUT IN rtk THAT isn't happen:

-They are additional reducers apart from the reducer generated by cakeSlice


=========================:
=== 24 - Async Thunks ===:
=========================:
/features:
  - Creating a user ./feature;

/features/user:
  - Creating a userSlice.js;

/features/user/userSlice.js:
  - Importing the creating slice from rtk;
  - Creating the slice with mirroring an object with the props(name, initialState(loading,users:[],error:''), ...);
  
  01 Importing the asyncThunk;
  ## const { createAsyncThunk } = require("@redux/toolkit");
  02 Creating the asyncThunk;
  ## const fetchUsers = createAsyncThunk("user/fetchUsers", () => axios.get().then().catch().finally())
  03 


==========================================================================:
======================== REDUX: React-redux-toolkit ======================:
==========================================================================:

==========================:
=== 25 - Setup project ===:
==========================:
01
-import {} from "";

02
-export default cakeSlice.reducer;
-export const { cakeOrder, cakeStocked } = cakeSlice.actions

03 Adding view for each feature;
-/features/feature/featView.js;


=====================:
=== 26 - Provider ===:
=====================:
-To access the redux store: we provide the app comp with the redux provider:
  /app.js:
  01 import { provider } from "";
  03 import store from "";
  02 <Provider store={store}> <App /> </Provider>

-We do that because it is by default uses useContext hook under thehood;