import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Book } from '../../shared/book';
import { State } from '../../reducers';
import { loadBook } from '../../books/actions/book.actions';
import { updateBook } from '../actions/admin.actions';
import { getBookByIsbn } from 'src/app/books/selectors/book.selectors';

@Component({
  selector: 'bm-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    this.book$ = this.store.pipe(select(getBookByIsbn, { isbn }));

    this.store.dispatch(loadBook({ isbn }));
  }

  updateBook(book: Book) {
    this.store.dispatch(updateBook({ book }));
  }

}
