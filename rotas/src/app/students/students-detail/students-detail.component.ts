import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Student } from '../student.model';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit, OnDestroy {

  inscricao: Subscription;

  student: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // let id: any;
    // this.inscricao = this.route.params.subscribe(params => {
    //   id = params.id;
    //   this.student = this.studentsService.getId(Number(id));
    // });

    this.inscricao = this.route.data.subscribe((data: Student) => {
      this.student = data.student;
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
