//Will hold all the string actions types in variables. This will allow easy modifying of your action types since you will only have to change them here instead having to track down where ever you used the action in your code.

//Used as our boiler plate actions.
export const SUCCESS = "SUCCESS";

export const FAILURE = "FAILURE";

//Used to update authentication state of the user. LOGIN_SUCCESS and LOGOUT_SUCCESS will also work here.
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

export const LOGIN_FAILURE = "LOGIN_FAILURE";


//ADD_PROFILE and REMOVE_PROFILE: Used to save the profile data from Auth0 to the global state.
export const ADD_PROFILE = "ADD_PROFILE";

export const REMOVE_PROFILE = "REMOVE_PROFILE";

//USER_INPUT_CHANGE and USER_INPUT_SUBMIT: Used to track the changes and submit of the user submitted text of the form.
export const USER_INPUT_CHANGE = "USER_INPUT_CHANGE";

export const USER_INPUT_SUBMIT = "USER_INPUT_SUBMIT";