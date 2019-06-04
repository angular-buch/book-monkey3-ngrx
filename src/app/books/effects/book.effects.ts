import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  BookActionTypes,
  BookActions,
  LoadBooksSuccess,
  LoadBooksFailure,
  LoadBookSuccess,
  LoadBookFailure
} from '../actions/book.actions';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Injectable()
export class BookEffects {

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBooks),
    switchMap(() =>
      this.bs.getAll().pipe(
        map(books => new LoadBooksSuccess({ books })),
        catchError(error => of(new LoadBooksFailure({ error }))))
    )
  );

  @Effect()
  loadBook$ = this.actions$.pipe(
    ofType(BookActionTypes.LoadBook),
    map(action => action.payload.isbn),
    mergeMap(isbn => this.bs.getSingle(isbn).pipe(
      map(book => new LoadBookSuccess({ book })),
      catchError(error => of(new LoadBookFailure({ error })))
    ))
  );

  constructor(
    private actions$: Actions<BookActions>,
    private bs: BookStoreService
  ) {}

}
