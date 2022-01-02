 
import { Dispatch } from "redux"; 
import { getUserProfile } from "../../api/github";  
import createAsyncThunk from "../../lib/createAsyncThunk";
import { getUserProfileAsync } from "./actions"; 



// export function getUserProfileThunk(username: string) {
//     return async (dispatch: Dispatch ) => {
//         const { request,success,failure} = getUserProfileAsync;
//         dispatch(request());
//         try{
//             const userProfile = await getUserProfile(username);
//             dispatch(success(userProfile));
//         }catch(e){
//             // dispatch(failure(e));
//             console.log(e);
//         } 
//     };
// }


// Promise 기반 thunk 를 만들어주는 createAsyncThunk 함수 만들기
export const getUserProfileThunk = createAsyncThunk(
    getUserProfileAsync,
    getUserProfile
  );
  