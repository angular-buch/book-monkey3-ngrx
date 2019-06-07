import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, tap, mergeMap } from 'rxjs/operators';

import * as AdminActions from '../actions/admin.actions';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Injectable()
export class AdminEffects {

  updateBook$ = createEffect(() => this.actions$.pipe(
    ofType(AdminActions.updateBook),
    map(action => action.book),
    mergeMap(book =>
      this.bs.update(book).pipe(
        map(() => AdminActions.updateBookSuccess({ book })),
        tap(() => this.router.navigate(['/books', book.isbn]))
      )
    )
  ));

  createBook$ = createEffect(() => this.actions$.pipe(
    ofType(AdminActions.createBook),
    map(action => action.book),
    mergeMap(book =>
      this.bs.create(book).pipe(
        map(() => AdminActions.createBookSuccess({ book })),
        tap(() => this.router.navigate(['/books', book.isbn]))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private bs: BookStoreService,
    private router: Router) {}

}
