import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pdf-resume',
  templateUrl: './pdf-resume.component.html',
  styleUrls: ['./pdf-resume.component.scss']
})
export class PdfResumeComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  toDay = new Date();
  constructor() {}

  ngOnInit() {}

}
