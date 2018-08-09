import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { AuthService } from '../../core/security/auth.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../../core/security/login.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.scss'],
})
export class UserHeaderComponent implements OnInit {
  @Input() sideNavOpened: boolean = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor(
    public router: Router,
    private translate: TranslateService,
    private auth: AuthService,
    private loginService: LoginService,
  ) {}

  ngOnInit() {}

  loadMyServices(): void {}

  loadCatalogue(): void {}

  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
    this.toggle.emit(this.sideNavOpened);
  }

  toggleLanguage(option: string): void {
    this.translate.use(option);
  }

  isCurrentLang(lang: string): boolean {
    return this.translate.currentLang !== lang;
  }

  isLogged(): boolean {
    return this.auth.isLogged() || false;
  }

  logout(): void {
    this.loginService.logout().subscribe(
      () => {
        this.auth.setLogged(false);
        this.auth.setToken('');
        this.router.navigate(['/login']);
      },
      (err: any) => {
        // Logout error. Exiting anyway...
        this.auth.setLogged(false);
        this.auth.setToken('');
        this.router.navigate(['/login']);
      },
    );
  }
}
