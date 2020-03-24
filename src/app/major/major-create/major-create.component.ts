import { Component, OnInit } from '@angular/core';
import { MajorService } from '../major.service';
import { Router } from '@angular/router';
import { Major } from '../major.class';

@Component({
  selector: 'app-major-create',
  templateUrl: './major-create.component.html',
  styleUrls: ['./major-create.component.css']
})
export class MajorCreateComponent implements OnInit {
  major: Major = new Major();
  save():void{
    this.majorsvcv.create(this.major).subscribe(
      res => {
        console.debug("Major created", res);
        this.router.navigateByUrl("/major/list");
      },
      err => {
        console.error("CREATION ERROR:", err);
      }
    );
  }
  constructor(
    private majorsvcv: MajorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.major.minSat = 800;
  }

}
