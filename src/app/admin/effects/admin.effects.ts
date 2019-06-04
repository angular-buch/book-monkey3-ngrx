import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, mergeMap } from 'rxjs/operators';

import { AdminActionTypes, AdminActions, CreateBookSuccess, UpdateBookSuccess } from '../actions/admin.actions';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Injectable()
export class AdminEffects {

  @Effect()
  updateBook$ = this.actions$.pipe(
    ofType(AdminActionTypes.UpdateBook),
    map(action => action.payload.book),
    mergeMap(book =>
      this.bs.update(book).pipe(
        map(() => new UpdateBookSuccess({ book })),
        tap(() => this.router.navigate(['/books', book.isbn]))
      )
    )
  );

  @Effect()
  createBook$ = this.actions$.pipe(
    ofType(AdminActionTypes.CreateBook),
    map(action => action.payload.book),
    mergeMap(book =>
      this.bs.create(book).pipe(
        map(() => new CreateBookSuccess({ book })),
        tap(() => this.router.navigate(['/books', book.isbn]))
      )
    )
  );

  constructor(
    private actions$: Actions<AdminActions>,
    private bs: BookStoreService,
    private router: Router) {}

}
