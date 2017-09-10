import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.less']
})
export class FatherComponent implements OnInit {
  public userName:string = "父层默认用户";
  public userObj:any = {userName:"父层默认用户对象"};

  constructor() { }

  ngOnInit() {
  }

}
