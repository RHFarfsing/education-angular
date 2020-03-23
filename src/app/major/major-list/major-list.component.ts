import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-list',
  templateUrl: './major-list.component.html',
  styleUrls: ['./major-list.component.css']
})
export class MajorListComponent implements OnInit {
  majors: Major[] = [];
  constructor(
    private major: MajorService
  ) { }

  ngOnInit(): void {
    this.major.list().subscribe(
      res => {
        this.majors = res;
        console.debug("Major-list Users:", res);
      }
      ,err => {console.error(err);}
    );
  }

}
