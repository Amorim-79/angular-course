import { Component, OnInit } from '@angular/core';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import { filterResponse, uploadProgress } from '../../shared/rxjs-operators';

import { environment } from '../../../environments/environment';

import { UploadFileService } from './../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
  preserveWhitespaces: true,
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;
  progress = 0;

  constructor(private uploadService: UploadFileService) { }

  ngOnInit(): void {
  }

  onChange(event): void {
    const selectedFiles = <FileList>event.srcElement.files;

    const fileNames = [];
    this.files = new Set();
    Array.from(selectedFiles).forEach(item => {
      fileNames.push(item.name);
      this.files.add(item);
    });
    
    document.getElementById('customFileLabel').innerHTML = fileNames.join();

    this.progress = 0;
  }

  onUpload(): void {
    if (this.files && this.files.size > 0) {
      this.uploadService.upload(this.files, environment.BASE_URL + '/upload')
        .pipe(
          uploadProgress(progress => this.progress = progress),
          filterResponse()
        )
        .subscribe(response => console.log('Upload Concluído'));
        // .subscribe((event: HttpEvent<Object>) => {
        //   if (event.type === HttpEventType.Response) {
        //     console.log('Upload Concluído');
            
        //   } else if (event.type === HttpEventType.UploadProgress) {
        //     const percentDone = Math.round(event.loaded * 100 / event.total);
        //     this.progress = percentDone;
        //   }
        // });
    }
  }

  onDownloadExcel(): void {
    this.uploadService.download(environment.BASE_URL + '/downloadExcel')
      .subscribe((response: any) => {
        this.uploadService.handleFile(response, 'report.xlsx')
      });
        
  }

  onDownloadPDF(): void {
    this.uploadService.download(environment.BASE_URL + '/downloadPDF')
      .subscribe((response: any) => {
        this.uploadService.handleFile(response, 'report.pdf')
      });
  }

}
