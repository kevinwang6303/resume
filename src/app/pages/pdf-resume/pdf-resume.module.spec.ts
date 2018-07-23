import { PdfResumeModule } from './pdf-resume.module';

describe('PdfResumeModule', () => {
  let pdfResumeModule: PdfResumeModule;

  beforeEach(() => {
    pdfResumeModule = new PdfResumeModule();
  });

  it('should create an instance', () => {
    expect(pdfResumeModule).toBeTruthy();
  });
});
