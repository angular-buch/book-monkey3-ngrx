import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Book } from '../../shared/book';


export const loadBooks = createAction('[Book] Load Books');

export const loadBooksSuccess = createAction(
  '[Book] Load Books Success',
  props<{ books: Book[] }>()
);

export const loadBooksFailure = createAction(
  '[Book] Load Books Failure',
  props<{ error: HttpErrorResponse }>()
);

export const loadBook = createAction(
  '[Book] Load Book',
  props<{ isbn: string }>()
);

export const loadBookSuccess = createAction(
  '[Book] Load Book Success',
  props<{ book: Book }>()
);

export const loadBookFailure = createAction(
  '[Book] Load Book Failure',
  props<{ error: HttpErrorResponse }>()
);

export const deleteBook = createAction(
  '[Book] Delete Book',
  props<{ isbn: string }>()
);

export const deleteBookSuccess = createAction(
  '[Book] Delete Book Success',
  props<{ isbn: string }>()
);
