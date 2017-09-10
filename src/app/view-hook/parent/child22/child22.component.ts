import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child22',
  templateUrl: './child22.component.html',
  styleUrls: ['./child22.component.less']
})
export class Child22Component implements OnInit {
  public time:string=new Date().toLocaleString();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("2号子组件的ngAfterViewInit...")
  }
   ngAfterViewchecked() {
    console.log("2号子组件的ngAfterViewchecked...")
  }

  public setTime(time:string):void {
    this.time = time;
  }
}
