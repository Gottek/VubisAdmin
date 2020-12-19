import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NzMessageService, NzUploadFile} from 'ng-zorro-antd';
import {Observable, Observer} from 'rxjs';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit, AfterViewInit {

  //used to uplaod an image
  //It has been taken from ant-zorro on internet
  loading = false;
  @Input() avatarUrl?: string; // the preview of the image
  image: File; // the image which will be uploaded at the end
  fileList: NzUploadFile[] = [];
  canvas;
  context;

  constructor(private msg: NzMessageService) {
  }

  //Usefull for dynamics position of POI
  ngAfterViewInit(): void {
  //   this.ImageContainer = document.getElementById('getContainer');
  //   this.canvas = document.getElementById('myCanvas');
  //   this.context = this.canvas.getContext('2d');
  }

  ngOnInit(): void {

  }

  //the beginning of the solution we were implemeting to make dynamic POI, not finished yet
  // getClickPosition(e): void {
  //   // console.log(e);
  //   let xPosition = e.offsetX;
  //   let yPosition = e.offsetY;
  //   // console.log(e.offsetX + ' : ' + e.offsetY);
  //   // console.log(document.body.getBoundingClientRect());
  //   console.log(xPosition + ' : ' + yPosition);
  //
  //   this.context.beginPath();
  //   this.context.arc(xPosition , yPosition , 5, 0, 2 * Math.PI);
  //   this.context.stroke();
  // }

  beforeUpload = (file: NzUploadFile, fileList: NzUploadFile[]) => {
    return new Observable((observer: Observer<boolean>) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) { //selecting which type of file can be added
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        return;
      }
      // tslint:disable-next-line:no-non-null-assertion
      //checking the file size
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        return;
      }
      observer.next(isJpgOrPng && isLt2M);
      observer.complete();
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    // tslint:disable-next-line:no-non-null-assertion
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }

  handleChange(info: { file: NzUploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // tslint:disable-next-line:no-non-null-assertion
        this.getBase64(info.file!.originFileObj!, (img: string) => {
          this.loading = false;
          this.avatarUrl = img;
          // tslint:disable-next-line:no-non-null-assertion
          this.image = info.file!.originFileObj!; //I get the image path here
        });
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        break;
    }
  }

}
