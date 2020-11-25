import { ActivatedRoute } from '@angular/router';
import { StudentsService } from './../students.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.css']
})
export class StudentsFormComponent implements OnInit, OnDestroy {

  inscricao: Subscription;

  student: any;

  constructor(private studentsService: StudentsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: any;
    this.inscricao = this.route.params.subscribe(params => {
      id = params.id;
      this.student = this.studentsService.getId(Number(id));
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
