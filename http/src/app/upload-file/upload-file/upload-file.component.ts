import { environment } from '../../../environments/environment';
import { Component, OnInit } from '@angular/core';

import { UploadFileService } from './../upload-file.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  files: Set<File>;

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
  }

  onUpload(): void {
    if (this.files && this.files.size > 0) {
      this.uploadService.upload(this.files, environment.BASE_URL + '/upload')
        .subscribe(response => console.log(response));
    }
  }

}
