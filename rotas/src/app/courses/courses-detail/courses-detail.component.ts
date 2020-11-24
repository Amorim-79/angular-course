import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { CoursesService } from './../courses.service';

@Component({
  selector: 'app-courses-detail',
  templateUrl: './courses-detail.component.html',
  styleUrls: ['./courses-detail.component.css']
})
export class CoursesDetailComponent implements OnInit, OnDestroy {

  inscricao: Subscription;

  course: any;

  constructor(private coursesService: CoursesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id: any;
    this.inscricao = this.route.params.subscribe(params => {
      id = params.id;
      this.course = this.coursesService.getId(Number(id));
    });
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }

}
