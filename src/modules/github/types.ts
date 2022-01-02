import * as actions from './actions';
import {ActionType} from 'typesafe-actions'
import { GithubProfile } from '../../api/github'; 
import { AsyncState } from '../../lib/reducerUtils';


export type GithubAction = ActionType < typeof actions > ;
export type GithubState = {
    // userProfile: {
    //     loading: boolean;
    //     data: GithubProfile | null;
    //     error: Error | null;
    // };
    

    // 리듀서 리팩토링하기
    // 이번에는 리듀서를 리팩토링 할 차례입니다. 
    // 우리는 현재 API 요청에 관련된 상태의 경우 { loading, error, data } 형태로 관리를 하고 있는데요, 
    // 이 객체를 조금 더 쉽게 만들 수 있는 유틸 함수들을 만들어주겠습니다.
    userProfile: AsyncState<GithubProfile,Error>;
};


