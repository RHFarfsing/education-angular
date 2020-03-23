import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menus:Menu[]=[
    new Menu('Majors','/majors/list','The major list page'),
    new Menu('Students','/students/list','The student list page')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
