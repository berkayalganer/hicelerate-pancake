import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.css']
})
export class CourseInfoComponent implements OnInit {

  constructor() { }

  @Input() businessName : string;   //Child componentten gelen veri.

  ngOnInit(): void {
  }

}
