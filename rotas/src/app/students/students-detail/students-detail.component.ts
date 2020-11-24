import { ActivatedRoute } from '@angular/router';
import { StudentsService } from './../students.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-students-detail',
  templateUrl: './students-detail.component.html',
  styleUrls: ['./students-detail.component.css']
})
export class StudentsDetailComponent implements OnInit, OnDestroy {

  inscricao: Subscription;

  student: any;

  constructor(private studentsService: StudentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: any;
    this.inscricao = this.route.params.subscribe(params => {
      id = params.id;
      this.student = this.studentsService.getId(Number(id));
      console.log(this.student);
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
