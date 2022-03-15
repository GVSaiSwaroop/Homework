import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  pv="";
  cv="";
  catch(value:any)
  {
    this.cv=value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
