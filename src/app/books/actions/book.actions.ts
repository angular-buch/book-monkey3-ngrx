import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Book } from '../../shared/book';

export enum BookActionTypes {
  LoadBooks = '[Book] Load Books',
  LoadBooksSuccess = '[Book] Load Books Success',
  LoadBooksFailure = '[Book] Load Books Failure',
  LoadBook = '[Book] Load Book',
  LoadBookSuccess = '[Book] Load Book Success',
  LoadBookFailure = '[Book] Load Book Failure',
  DeleteBook = '[Book] Delete Book',
  DeleteBookSuccess = '[Book] Delete Book Success',
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LoadBooks;
}

export class LoadBooksSuccess implements Action {
  readonly type = BookActionTypes.LoadBooksSuccess;
  constructor(public payload: { books: Book[] }) { }
}

export class LoadBooksFailure implements Action {
  readonly type = BookActionTypes.LoadBooksFailure;
  constructor(public payload: { error: HttpErrorResponse }) { }
}

export class LoadBook implements Action {
  readonly type = BookActionTypes.LoadBook;
  constructor(public payload: { isbn: string }) {}
}

export class LoadBookSuccess implements Action {
  readonly type = BookActionTypes.LoadBookSuccess;
  constructor(public payload: { book: Book }) {}
}

export class LoadBookFailure implements Action {
  readonly type = BookActionTypes.LoadBookFailure;
  constructor(public payload: { error: HttpErrorResponse }) {}
}

export class DeleteBook implements Action {
  readonly type = BookActionTypes.DeleteBook;
  constructor(public payload: { isbn: string }) {}
}

export class DeleteBookSuccess implements Action {
  readonly type = BookActionTypes.DeleteBookSuccess;
  constructor(public payload: { isbn: string }) {}
}

export type BookActions =
  | LoadBooks
  | LoadBooksSuccess
  | LoadBooksFailure
  | LoadBook
  | LoadBookSuccess
  | LoadBookFailure
  | DeleteBook
  | DeleteBookSuccess;
