import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  public checkboxProps = [
    {
      color: 'primary',
      name: 'Checkbox disabled',
      disabled: true,
      checked: false,
      slot: 'start'
    },
    {
      color: 'primary',
      name: 'Checkbox checked',
      disabled: false,
      checked: true,
      slot: 'start'
    },
    {
      color: 'primary',
      name: 'Checkbox primary',
      disabled: false,
      checked: false,
      slot: 'start'
    },
    {
      color: 'danger',
      name: 'Checkbox danger',
      disabled: false,
      checked: false,
      slot: 'start'
    },
    {
      color: 'warning',
      name: 'Checkbox warning',
      disabled: false,
      checked: false,
      slot: 'start'
    },
    {
      color: 'success',
      name: 'Checkbox success',
      disabled: false,
      checked: false,
      slot: 'end'
    },
    {
      color: 'light',
      name: 'Checkbox light',
      disabled: false,
      checked: false,
      slot: 'start'
    },
    {
      color: 'dark',
      name: 'Checkbox dark',
      disabled: false,
      checked: false,
      slot: 'start'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(checkboxName: string, checkState: boolean) {
    console.log(`${checkboxName}: ${checkState}`);
  }

  verData() {
    console.log(this.checkboxProps);
  }

}
