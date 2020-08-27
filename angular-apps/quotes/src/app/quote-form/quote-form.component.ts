import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quotes(0,"","",new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(form:NgForm){
    this.addQuote.emit(this.newQuote);
    form.resetForm()
  }
  constructor() { }

  ngOnInit(): void {
  }

}
