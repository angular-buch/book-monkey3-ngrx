import { Action, props, createAction } from '@ngrx/store';
import { Book } from '../../shared/book';

export const createBook = createAction(
  '[Admin] Create Book',
  props<{ book: Book }>()
);

export const createBookSuccess = createAction(
  '[Admin] Create Book Success',
  props<{ book: Book }>()
);

export const updateBook = createAction(
  '[Admin] Update Book',
  props<{ book: Book }>()
);

export const updateBookSuccess = createAction(
  '[Admin] Update Book Success',
  props<{ book: Book }>()
);



