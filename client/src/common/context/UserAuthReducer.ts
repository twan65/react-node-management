export type UserAuthState = {
    name: string | null
  };
    
  export type UserAuthAction = {
    type: 'setId'
    payload: string
  } | {
    type: 'removeId'
  };
  
  export const userAuthReducer = (state: UserAuthState, action: UserAuthAction): UserAuthState => {
    switch (action.type) {
      case 'setId':
        return {
          ...state,
          name: action.payload
        };
      case 'removeId':
        return {
          ...state,
          name: null
        };            
      default:
        return {
          ...state
        };
    }
  }
   
  export const initialState: UserAuthState = {name: null};