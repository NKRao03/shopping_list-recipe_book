import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output('featureLoaded') featureLoaded = new EventEmitter<string>();
  onSelect(feature:any) {
    this.featureLoaded.emit(feature)
  }
  constructor() { 
  }

  ngOnInit(): void {
  }

}
