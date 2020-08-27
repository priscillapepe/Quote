import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  // Emiting events
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  // adding upvotes and downvotes
  upVotes: number = 5;
  downVotes: number = 3;

  likeButtonClick() {
    this.upVotes++;
  }

  dislikeButtonClick() {
    this.downVotes++;
  }
  constructor() { }

  ngOnInit(): void {
  }
}
