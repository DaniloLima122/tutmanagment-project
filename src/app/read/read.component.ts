import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import * as TutorialActions from '../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]> = of([]);

  constructor(private store: Store<AppState>) {

    this.tutorials = store.select('tutorial')
  }

  deleteTutorial(id : number) : void{
     this.store.dispatch(new TutorialActions.RemoveTutorial(id))
  }

  ngOnInit(): void {
  }

}
