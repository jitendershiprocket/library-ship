import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-switcher',
  template: ``,
  styles: [`
    .modal { display: block; position: fixed; /* Add styles for your modal */ }
    .modal-content { /* Add styles for content */ }
    .close { cursor: pointer; }
  `]
})
export class SwitcherComponent implements OnInit {
    ngOnInit(): void {
      console.log("Hello From Switcher");
    }
}
