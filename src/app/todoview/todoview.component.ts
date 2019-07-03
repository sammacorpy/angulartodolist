import { Service1Service } from './../service1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todoview',
  templateUrl: './todoview.component.html',
  styleUrls: ['./todoview.component.css']
})
export class TodoviewComponent implements OnInit {

  tway = 'help';

   todoitem = [
    'jahhdjkadad',
    'hjhajsah',
    'hgavhvadhan'
   ];

  constructor(private tservice: Service1Service) { }

  ngOnInit() {
  }

  start() {
    console.log(this.tway);
    // tslint:disable-next-line:forin
    for (const i in this.todoitem) {
      this.todoitem[i] = this.todoitem[i].toUpperCase();
    }

    this.tservice.fuckit();
  // }
  // changevalue(e) {
  //   this.tway = e.target.value;
  //   console.log(this.tway);
  // }

}
}
