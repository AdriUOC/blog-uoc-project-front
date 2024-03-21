import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HeaderMenusService } from 'src/app/Services/header-menus.service';
import { SharedService } from 'src/app/Services/shared.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  /*
  // TODO 16
  registerUser: UserDTO;

  name: FormControl;
  surname_1: FormControl;
  surname_2: FormControl;
  alias: FormControl;
  birth_date: FormControl;
  email: FormControl;
  password: FormControl;

  registerForm: FormGroup;
  isValidForm: boolean | null;
*/
  constructor(
    private formBuilder: UntypedFormBuilder,
    private userService: UserService,
    private sharedService: SharedService,
    private headerMenusService: HeaderMenusService,
    private router: Router
  ) {
    // TODO 17
  }

  ngOnInit(): void {}

  async register(): Promise<void> {
    /*
    let responseOK: boolean = false;
    this.isValidForm = false;
    let errorResponse: any;

    if (this.registerForm.invalid) {
      return;
    }

    this.isValidForm = true;
    this.registerUser = this.registerForm.value;

    try {
      await this.userService.register(this.registerUser);
      responseOK = true;
    } catch (error: any) {
      responseOK = false;
      errorResponse = error.error;

      const headerInfo: HeaderMenus = {
        showAuthSection: false,
        showNoAuthSection: true,
      };
      this.headerMenusService.headerManagement.next(headerInfo);

      this.sharedService.errorLog(errorResponse);
    }

    await this.sharedService.managementToast(
      'registerFeedback',
      responseOK,
      errorResponse
    );

    if (responseOK) {
      // Reset the form
      this.registerForm.reset();
      // After reset form we set birthDate to today again (is an example)
      this.birth_date.setValue(formatDate(new Date(), 'yyyy-MM-dd', 'en'));
      this.router.navigateByUrl('home');
    }
  }
  */
  }
}
