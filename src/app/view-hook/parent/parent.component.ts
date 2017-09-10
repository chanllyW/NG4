import { Component, OnInit, ViewChild } from '@angular/core';
import { Child11Component } from "./child11/child11.component";
import { Child22Component } from "./child22/child22.component";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.less']
})
export class ParentComponent implements OnInit {
  @ViewChild("child11")
  child11: Child11Component

  @ViewChild("child22")
  child22: Child22Component

  constructor() { }

  ngOnInit() {
    setInterval( ()=> {
      this.child11.setTime(new Date().toLocaleString())
    },1000);
  }

  ngAfterViewInit( ){
    console.log("父组件的ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("父组件的ngAfterViewChecked");
  }

}
