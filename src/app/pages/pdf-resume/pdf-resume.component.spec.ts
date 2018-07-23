import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfResumeComponent } from './pdf-resume.component';

describe('PdfResumeComponent', () => {
  let component: PdfResumeComponent;
  let fixture: ComponentFixture<PdfResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
