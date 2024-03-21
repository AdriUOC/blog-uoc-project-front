import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { HeaderMenusService } from 'src/app/Services/header-menus.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { SharedService } from 'src/app/Services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  /*
  // TODO 19
  loginUser: AuthDTO;
  email: FormControl;
  password: FormControl;
  loginForm: FormGroup;
  */

  constructor(
    private formBuilder: UntypedFormBuilder,
    private authService: AuthService,
    private sharedService: SharedService,
    private headerMenusService: HeaderMenusService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {
    // TODO 20
  }

  ngOnInit(): void {}

  async login(): Promise<void> {
    /*
    let responseOK: boolean = false;
    let errorResponse: any;

    this.loginUser.email = this.email.value;
    this.loginUser.password = this.password.value;
    try {
      const authToken = await this.authService.login(this.loginUser);
      responseOK = true;
      this.loginUser.user_id = authToken.user_id;
      this.loginUser.access_token = authToken.access_token;
      // save token to localstorage for next requests
      this.localStorageService.set('user_id', this.loginUser.user_id);
      this.localStorageService.set('access_token', this.loginUser.access_token);
    } catch (error: any) {
      responseOK = false;
      errorResponse = error.error;
      const headerInfo: HeaderMenus = {
        showAuthSection: false,
        showNoAuthSection: true,
      };
      this.headerMenusService.headerManagement.next(headerInfo);

      this.sharedService.errorLog(error.error);
    }

    await this.sharedService.managementToast(
      'loginFeedback',
      responseOK,
      errorResponse
    );

    if (responseOK) {
      const headerInfo: HeaderMenus = {
        showAuthSection: true,
        showNoAuthSection: false,
      };
      // update options menu
      this.headerMenusService.headerManagement.next(headerInfo);
      this.router.navigateByUrl('home');
    }
    */
  }
}
