import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-child111',
  templateUrl: './child111.component.html',
  styleUrls: ['./child111.component.less']
})
export class Child111Component implements OnInit {

  @Input()
  public userName:string ="";
  @Input()
  public userObj:any = {};


  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log("子组件ngOnChanges...")
  }

  ngDoCheck() {
    console.log("子组件ngDoCheck...")
  }

}
