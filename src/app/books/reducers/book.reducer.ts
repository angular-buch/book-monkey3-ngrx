import { BookActions, BookActionTypes } from '../actions/book.actions';

import { Book } from '../../shared/book';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};

export function reducer(state = initialState, action: BookActions): State {
  switch (action.type) {

    case BookActionTypes.LoadBooks: {
      return {
        ...state,
        loading: true
      };
    }

    case BookActionTypes.LoadBooksSuccess: {
      return {
        ...state,
        books: action.payload.books,
        loading: false
      };
    }

    case BookActionTypes.LoadBookSuccess: {
      const { book } = action.payload;

      const books = [
        ...state.books.filter(b => b.isbn !== book.isbn),
        book
      ];

      return {
        ...state,
        books
      };
    }

    case BookActionTypes.DeleteBookSuccess: {
      return {
        ...state,
        books: state.books.filter(
          b => b.isbn !== action.payload.isbn
        )
      };
    }

    default:
      return state;
  }
}
