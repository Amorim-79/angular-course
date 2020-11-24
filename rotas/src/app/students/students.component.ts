import { StudentsService } from './students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any;

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.students = this.studentsService.getAll();
  }

}
