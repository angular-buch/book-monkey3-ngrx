import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { State } from '../../reducers'; // Root State!
import { LoadBooks } from '../actions/book.actions';
import { getAllBooks, getBooksLoading } from '../selectors/book.selectors';
import { Book } from '../../shared/book';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.books$ = this.store.pipe(select(getAllBooks));
    this.loading$ = this.store.pipe(select(getBooksLoading));

    this.store.dispatch(new LoadBooks());
  }
}
