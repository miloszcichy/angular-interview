import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest, Subject, takeUntil } from 'rxjs';
import { Content } from '../model/content.model';
import { User } from '../model/user.model';
import { ContentApi } from '../service/content/content.api';
import { PermissionsApi } from '../service/permissions/permissions.api';
import { TranslateService } from '../service/translate/translate.service';
import { UserApi } from '../service/user/user.api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  user: User = {} as User;
  content: Content[] = [] as Content[];
  hasPermission: boolean;
  private onDestroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private userApi: UserApi,
    private contentApi: ContentApi,
    private permissionsApi: PermissionsApi,
    private translateService: TranslateService
  ) {}

  ngOnDestroy(): void {
    this.onDestroy$.next(true);
    this.onDestroy$.unsubscribe();
  }
  ngOnInit(): void {
    this.userApi
      .getCurrentUser()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((value) => (this.user = value));
    this.contentApi.getContent().subscribe((value) => (this.content = value));
  }
}
