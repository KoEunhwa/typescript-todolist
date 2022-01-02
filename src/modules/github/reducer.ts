import { createReducer } from "typesafe-actions"; 
import { getUserProfileAsync } from ".";
import { asyncState, createAsyncReducer } from "../../lib/reducerUtils";
import { GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_SUCCESS } from "./actions";
import { GithubAction, GithubState } from "./types";


const initialState :GithubState = {
    // userProfile:{
    //     loading:false,
    //     error:null,
    //     data:null
    // }

    
    // 리듀서 리팩토링하기
    userProfile:asyncState.initial()
};

// 이러한 속성을 사용하여 우리가 만든 리듀서를 리팩토링 해보겠습니다. 먼저, createAsyncReducer 라는 함수를 reducerUtils.ts 에 다음과 같이 만들어보세요.
const github = createReducer<GithubState,GithubAction>(initialState,{
    [GET_USER_PROFILE]:(state)=>({
        ...state,
        // userProfile:{
        //     loading:true,
        //     error:null,
        //     data:null            
        // }

            
        // 리듀서 리팩토링하기
        userProfile:asyncState.load()
    }),
    
    [GET_USER_PROFILE_SUCCESS]:(state , action)=>({
        ...state,
        // userProfile:{
        //     loading:false,
        //     error:null,
        //     data:action.payload
        // }

        
        // 리듀서 리팩토링하기
        userProfile:asyncState.success(action.payload)
    }) ,
    
    [GET_USER_PROFILE_ERROR]:(state , action)=>({
        ...state,
        // userProfile:{
        //     loading:false,
        //     error:action.payload,
        //     data:null
        // }

        
        // 리듀서 리팩토링하기
        userProfile:asyncState.error(action.payload)
    }) 

});

// const github = createReducer<GithubState, GithubAction>(initialState).handleAction(
//     [getUserProfileAsync.request, getUserProfileAsync.success, getUserProfileAsync.failure],
//     createAsyncReducer(getUserProfileAsync, 'userProfile')
//   );
  
  export default github;
  