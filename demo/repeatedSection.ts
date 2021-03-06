import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldType, FormlyFieldConfig } from '../src/index';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let control of controls; let i = index;">
      <formly-form
        [model]="model[i]"
        [fields]="fields"
        [form]="control"
        [ngClass]="field.fieldArray.className">
      </formly-form>
      <div class="col-md-2">
        <button class="btn btn-danger" (click)="remove(i)">Remove</button>
      </div>
    </div>
    <div style="margin:30px 0;">
      <button class="btn btn-primary" (click)="add()">Add More Investments</button>
    </div>
  `,
})
export class RepeatComponent extends FieldType implements OnInit {
  get controls() {
    return this.form.controls[this.field.key]['controls'];
  }

  get fields(): FormlyFieldConfig[] {
    return this.field.fieldArray.fieldGroup;
  }

  ngOnInit() {
    if (this.model) {
      this.model.map(() => {
        let formGroup = new FormGroup({});
        this.form.controls[this.field.key]['controls'].push(formGroup);
      });
    }
  }
  add() {
    let formGroup = new FormGroup({});
    this.model.push({});
    this.form.controls[this.field.key]['controls'].push(formGroup);
  }

  remove(i) {
    this.form.controls[this.field.key]['controls'].splice(i, 1);
    this.model.splice(i, 1);
  }
}
