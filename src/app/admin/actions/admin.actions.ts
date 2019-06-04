import { Action } from '@ngrx/store';

export enum AdminActionTypes {
  LoadAdmins = '[Admin] Load Admins',
  
  
}

export class LoadAdmins implements Action {
  readonly type = AdminActionTypes.LoadAdmins;
}


export type AdminActions = LoadAdmins;
