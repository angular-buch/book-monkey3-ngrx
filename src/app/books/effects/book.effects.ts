import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as BookActions from '../actions/book.actions';
import { BookStoreService } from '../../shared/book-store.service';

@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.loadBooks),
    switchMap(() =>
      this.bs.getAll().pipe(
        map(books => BookActions.loadBooksSuccess({ books })),
        catchError(error => of(BookActions.loadBooksFailure({ error }))))
    )
  ));

  loadBook$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.loadBook),
    map(action => action.isbn),
    mergeMap(isbn => this.bs.getSingle(isbn).pipe(
      map(book => BookActions.loadBookSuccess({ book })),
      catchError(error => of(BookActions.loadBookFailure({ error })))
    ))
  ));

  deleteBook$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.deleteBook),
    map(action => action.isbn),
    mergeMap(isbn => this.bs.remove(isbn).pipe(
      map(() => BookActions.deleteBookSuccess({ isbn }))
    ))
  ));

  deleteBookSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(BookActions.deleteBookSuccess),
    tap(() => this.router.navigate(['/books']))
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private bs: BookStoreService,
    private router: Router
  ) {}

}
