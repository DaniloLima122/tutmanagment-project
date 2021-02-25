import { Action } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';

export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

// Tambem pode saer usado enums
// export enum ActionsType{
//   AddTutorial = 'ADD_TUTORIAL',
//   RemoveTutorial = 'REMOVE_TUTORIAL'
// }



export class AddTutorial implements Action{
  readonly type = ADD_TUTORIAL;

  constructor(public payload : Tutorial){}
}

export class RemoveTutorial implements Action{
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload : number){}
}

export type Actions = AddTutorial | RemoveTutorial;
