import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit  {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';
  term: string = '';
  
  debounce: Subject<string> = new Subject();
  
  
  ngOnInit(): void {
    this.debounce
      .pipe(
        debounceTime(300)
      )
      .subscribe( value => {
        this.onDebounce.emit( value );
      } );
  }
  

  search() {
    this.onEnter.emit( this.term );
  }

  keyPressed() {
    this.debounce.next( this.term );
  }

}
