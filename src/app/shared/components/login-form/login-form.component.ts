import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxLoadIndicatorModule } from 'devextreme-angular/ui/load-indicator';
import notify from 'devextreme/ui/notify';
import { AuthService } from '../../services';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loading = false;
  formData: any = {};

  constructor(private authService: AuthService, private router: Router) { }

    async onSubmit(e: Event) {
    e.preventDefault();
    const { email, password, displayName, phoneNumber } = this.formData;
      this.loading = true;
      await this.delay(1000);
      debugger
    notify(
      {
        message: "Registration success",
        width: 230,
        type: "success",
        position: {
          at: "top right",
          my: "top right",
          of: "#container"
        }
      })

    const result =  await this.authService.logIn(this.formData);
       if (!result.isOk) {
         this.loading = false;
         notify(result.message, 'error', 2000);
       }
      this.router.navigate(['/home']);

  }

  async  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  onCreateAccountClick = () => {
    this.router.navigate(['/create-account']);
  }
}
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DxFormModule,
    DxLoadIndicatorModule
  ],
  declarations: [ LoginFormComponent ],
  exports: [ LoginFormComponent ]
})
export class LoginFormModule { }
