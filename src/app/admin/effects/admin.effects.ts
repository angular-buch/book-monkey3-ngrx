import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { AdminActionTypes, AdminActions } from '../actions/admin.actions';


@Injectable()
export class AdminEffects {


  @Effect()
  loadAdmins$ = this.actions$.pipe(
    ofType(AdminActionTypes.LoadAdmins),
    /** An EMPTY observable only emits completion. Replace with your own observable API request */
    concatMap(() => EMPTY)
  );


  constructor(private actions$: Actions<AdminActions>) {}

}
