import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State as BookState } from '../reducers/book.reducer';

export const getBookState = createFeatureSelector<BookState>('book');

export const getBooksLoading = createSelector(
  getBookState,
  state => state.loading
);

export const getAllBooks = createSelector(
  getBookState,
  state => state.books
);
