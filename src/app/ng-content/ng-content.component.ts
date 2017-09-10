import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ng-content',
  templateUrl: './ng-content.component.html',
  styleUrls: ['./ng-content.component.less']
})
export class NgContentComponent implements OnInit {
  @Input()
  public title:string = "默认标题"

  constructor() { }

  ngOnInit() {
  }


//ngAfterContentInit 从父层到子层装配
  ngAfterContentInit() {
    // console.log("父层>ngAfterContentInit")
  }

  ngAfterContentChecked() {
    // this.title="起个标题很难"
    // console.log("父层>ngAfterContentCheck")
  }

  ngAfterViewInit() {
    console.log("父层>ngAfterViewInit")
  }

  ngAfterViewChecked() {
    this.title="起个标题很难"
    console.log("父层>ngAfterViewChecked")
  }

}
