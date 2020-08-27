import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quotes[] = [
    new Quotes(1, 'Silence is better than argument', 'Find an online version and watch finding Dory',new Date(2020,9,14)),
    new Quotes(2,'I taught you how to fight,but did not tell you the reason for fighting','Watch out for friends',new Date(2016,6,9)),
    new Quotes(3,'Truly truly,hurry hurry has no blessings','Comming soon',new Date(2010,1,12)),
    new Quotes(4,'Nobody can make you feel inferior without your permission','No hard feelings',new Date(2015,11,18)),
    new Quotes(5,'Lost time is never found time','Time again',new Date(2019,2,14)),
    new Quotes(6,'You can never plan the future by the past','Cause I am an evil overlord',new Date(2018,3,14)),
  ];
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  toggleDetails(index){
  this.quotes[index].showDescription = !this.quotes[index].showDescription;
}
completeQuote(isComplete, index){
  if (isComplete) {
    this.quotes.splice(index,1);
  }
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id = quoteLength+1;
  quote.completeDate = new Date(quote.completeDate)
  this.quotes.push(quote)
}
  constructor() { }

  ngOnInit() {
  }

}
