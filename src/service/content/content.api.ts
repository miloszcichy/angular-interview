import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../../model/content.model';

@Injectable()
export class ContentApi {
  content = [
    { id: 1, description: 'lorem ipsum', code: 1234 },
    { id: 2, description: 'some text', code: 5678 },
    { id: 3, description: 'another description', code: 9012 },
  ] as Content[];

  getContent(): Observable<Content[]> {
    return of(this.content);
  }
}
