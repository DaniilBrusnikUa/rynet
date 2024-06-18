import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/index';
import { IUser } from '../../../user';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  employee: any;
  colCountByScreen: object;
  items: any;

  user: IUser | null = { email: '' };

  constructor(private authService: AuthService) {
    this.employee = {
      ID: 7,
      DisplayName: 'Sandra Johnson',
      FirstName: 'Sandra',
      LastName: 'Johnson',
      PhoneNumber: '555-0102',
      Prefix: 'Mrs.',
      Position: 'Controller',
      Picture: 'images/employees/06.png',
      BirthDate: new Date('1974/11/5'),
      HireDate: new Date('2005/05/11'),
      AssignedTasks: 33,
      /* tslint:disable-next-line:max-line-length */
      Notes: 'Sandra is a CPA and has been our controller since 2008. She loves to interact with staff so if you`ve not met her, be certain to say hi.\r\n\r\nSandra has 2 daughters both of whom are accomplished gymnasts.',
      Address: '4600 N Virginia Rd.'
    };
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
    this.items = [
      {
        dataField: 'ID',
        editorType: 'dxTextBox',
        editorOptions: {
          readOnly: true
        }
      },
      {
        dataField: 'DisplayName',
        editorOptions: {
          readOnly: true
        }
      },
      {
        dataField: 'FirstName',
        editorType: 'dxTextBox'
      },
      {
        dataField: 'LastName',
        editorType: 'dxTextBox'
      },
      {
        dataField: 'PhoneNumber',
        editorType: 'dxTextBox',
        editorOptions: {
          readOnly: true
        }
      },
      {
        dataField: 'Prefix',
        editorType: 'dxTextBox'
      },
      {
        dataField: 'Position',
        editorType: 'dxTextBox'
      },
      {
        dataField: 'Notes',
        editorType: 'dxTextBox'
      },
      {
        dataField: 'Address',
        editorType: 'dxTextBox'
      },
    ]
  }

  ngOnInit() {
    this.authService.getUser().then((e) => {
      if (e.isOk && e.data) {
        this.user = e.data;
        this.employee = {
          ...this.employee,
          DisplayName: this.user.displayName,
          PhoneNumber: this.user.phoneNumber,
        }
        console.log(this.employee)
      }
    });

  }
}
