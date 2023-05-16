import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from './error.service';
import { catchError, finalize, throwError, tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadImagesService {
  private baseURL = 'http://localhost:3000';

  currentFile: File;
  preview = '';
  avatar = '';

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  changeImages(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) return;

    this.currentFile = input.files[0];
    const reader = new FileReader();
    console.log(this.currentFile);

    reader.onload = (e: any) => {
      this.preview = e.target?.result;
    };
    reader.readAsDataURL(this.currentFile);
  }

  getImages(): Observable<any> {
    return this.http.get(this.baseURL).pipe(tap((res) => console.log(res)));
  }

  uploadImages(file: string): Observable<string> {
    const formData: FormData = new FormData();

    formData.append('avatar', file);

    return this.http.post<string>(`${this.baseURL}/upload`, formData).pipe(
      tap(() => (this.avatar = file)),
      catchError(this.errorHandler.bind(this)),
      finalize(() => (this.preview = ''))
    );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
