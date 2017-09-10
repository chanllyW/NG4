import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child11',
  templateUrl: './child11.component.html',
  styleUrls: ['./child11.component.less']
})
export class Child11Component implements OnInit {
  public time:string = new Date().toLocaleString();

  constructor() { }

  ngOnInit() {
  }

   ngAfterViewInit() {
    console.log("1号子组件的ngAfterViewInit...")
  }
   ngAfterViewchecked() {
    console.log("1号子组件的ngAfterViewchecked...")
  }

  public setTime(time:string):void {
    this.time=time
  }
}
