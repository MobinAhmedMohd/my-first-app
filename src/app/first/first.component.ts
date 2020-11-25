import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  text:string = 'My first Component is Ready'

  title:string = 'This is test title'

  numbers:number[] = [29,14,70,51,33]

  isGreen:boolean = false

  onClick(){
    console.log("Button has clicked")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
