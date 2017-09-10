import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child333',
  templateUrl: './child333.component.html',
  styleUrls: ['./child333.component.less']
})
export class Child333Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // console.log("子层>ngAfterContentInit")
  }

  ngAfterContentChecked() {
    // console.log("子层>ngAfterContentCheck")
  }

  ngAfterViewInit() {
    console.log("子层>ngAfterViewInit")
  }

  ngAfterViewChecked() {
    console.log("子层>ngAfterViewChecked")
  }

}
