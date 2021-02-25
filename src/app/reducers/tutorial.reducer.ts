import * as TutorialActions from '../actions/tutorial.actions';
import { Tutorial } from '../models/tutorial.model';

const initialState: Tutorial = {
  name: 'Initial tutorial',
  url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [], action: TutorialActions.Actions) {

  switch (action.type) {

    case TutorialActions.ADD_TUTORIAL:

      return [...state, action.payload];

    case TutorialActions.REMOVE_TUTORIAL:


      // state é "freeze", para remover items é necessario usar imutabilidade
      state = state.filter((item, index) => index !== action.payload)

      // o state por padrao esta congelado "usando o Object.freeze", não é possivel alterar diretamente
      // console.log(state.splice(action.payload,1))

      return state;

    default:

      return state;

  }
}
