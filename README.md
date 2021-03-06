<img src="https://raw.githubusercontent.com/formly-js/angular-formly/master/other/logo/angular-formly-logo-64px.png" alt="angular-formly logo" title="angular-formly" align="right" width="64" height="64" />

# ng2-formly
[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors)
[![Stories in Ready](https://badge.waffle.io/formly-js/ng2-formly.png?label=ready&title=Ready)](https://waffle.io/formly-js/ng2-formly)

Status:
[![Build Status](https://travis-ci.org/formly-js/ng2-formly.svg?branch=master)](https://travis-ci.org/formly-js/ng2-formly)
[![npm version](https://badge.fury.io/js/ng2-formly.svg)](https://badge.fury.io/js/ng2-formly)
[![Package Quality](http://npm.packagequality.com/shield/ng2-formly.png)](http://packagequality.com/#?package=ng2-formly)

Links:
[![Gitter](https://badges.gitter.im/formly-js/angular2-formly.svg)](https://gitter.im/formly-js/angular2-formly?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


angular2-formly is an Angular 2 module which has a Components to help customize and render JavaScript/JSON configured forms.
The `formly-form` Component and the `FormlyConfig` service are very powerful and bring unmatched maintainability to your
application's forms.

## Quick Start

#### 1. Install ng2-formly
```bash
  npm install ng2-formly --save
```

#### 2. Import the `FormlyModule`:

```ts
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FormlyModule, FormlyBootstrapModule} from 'ng2-formly';
import {AppComponent} from './app';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

#### 3. Define the form config in your component:

```ts
import {Component} from '@angular/core';
import {Validators, FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from 'ng2-formly';

@Component({
  selector: 'app',
  template: `
    <form class="formly" role="form" novalidate [formGroup]="form" (ngSubmit)="submit(user)">
        <formly-form [model]="user" [fields]="userFields">
            <button type="submit" class="btn btn-default">Button</button>
        </formly-form>
    </form>
  `,
})
export class HelloApp {
  form: FormGroup = new FormGroup({});
  userFields: FormlyFieldConfig = [{
    className: 'row',
    fieldGroup: [{
        className: 'col-xs-6',
        key: 'email',
        type: 'input',
        templateOptions: {
            type: 'email',
            label: 'Email address',
            placeholder: 'Enter email'
        },
        validators: {
          validation: Validators.compose([Validators.required])
        }
    }, {
        className: 'col-xs-6',
        key: 'password',
        type: 'input',
        templateOptions: {
            type: 'password',
            label: 'Password',
            placeholder: 'Password',
            pattern: ''
        },
        validators: {
          validation: Validators.compose([Validators.required])
        }
    }]
  }];

  user = {
    email: 'email@gmail.com',
    checked: false
  };

  submit(user) {
    console.log(user);
  }
}
```

From there, it's just JavaScript. Allowing for DRY, maintainable, reusable forms.

## Roadmap

See the [issues labeled enhancement](https://github.com/formly-js/angular2-formly/labels/enhancement)

## Supported templates

 - [Material2](https://github.com/formly-js/ng2-formly-template-material)
 - [Bootstrap](https://github.com/formly-js/ng2-formly-templates-bootstrap)


## Thanks

A special thanks to [Kent C. Dodds](https://twitter.com/kentcdodds) for giving me opportunity to work on this.
This library is maintained (with love) by me, [Mohammed Zama Khan](https://twitter.com/mohamedzamakhan).
Thanks to all [contributors](https://github.com/formly-js/angular2-formly/graphs/contributors)!
If you're trying to find angular-formly, go [here](https://github.com/formly-js/angular-formly)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars.githubusercontent.com/u/2327532?v=3" width="100px;"/><br /><sub>Zama Khan Mohammed</sub>](https://www.linkedin.com/in/mohammedzamakhan)<br />[📖](https://github.com/formly-js/ng2-formly/commits?author=mohammedzamakhan) [💻](https://github.com/formly-js/ng2-formly/commits?author=mohammedzamakhan) 👀 💁 🚇 🔧 | [<img src="https://avatars.githubusercontent.com/u/1753742?v=3" width="100px;"/><br /><sub>Abdellatif Ait boudad</sub>](https://github.com/aitboudad)<br />[💻](https://github.com/formly-js/ng2-formly/commits?author=aitboudad) [📖](https://github.com/formly-js/ng2-formly/commits?author=aitboudad) [⚠️](https://github.com/formly-js/ng2-formly/commits?author=aitboudad) 👀 💁 | [<img src="https://avatars.githubusercontent.com/u/2039134?v=3" width="100px;"/><br /><sub>divyakumarjain</sub>](https://github.com/divyakumarjain)<br />[💻](https://github.com/formly-js/ng2-formly/commits?author=divyakumarjain) [📖](https://github.com/formly-js/ng2-formly/commits?author=divyakumarjain) 🔌 👀 💁 | [<img src="https://avatars.githubusercontent.com/u/2385144?v=3" width="100px;"/><br /><sub>Pouja</sub>](https://github.com/Pouja)<br />[💻](https://github.com/formly-js/ng2-formly/commits?author=Pouja) 👀 | [<img src="https://avatars.githubusercontent.com/u/464895?v=3" width="100px;"/><br /><sub>Caleb Kniffen</sub>](http://twitter.com/ckniffty)<br />[🐛](https://github.com/formly-js/ng2-formly/issues?q=author%3Ackniffen) | [<img src="https://avatars.githubusercontent.com/u/5145523?v=3" width="100px;"/><br /><sub>Riron</sub>](https://github.com/Riron)<br />[🐛](https://github.com/formly-js/ng2-formly/issues?q=author%3ARiron) | [<img src="https://avatars.githubusercontent.com/u/645187?v=3" width="100px;"/><br /><sub>Thiago Lacerda</sub>](https://github.com/thiagogjt)<br />[🐛](https://github.com/formly-js/ng2-formly/issues?q=author%3Athiagogjt) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars.githubusercontent.com/u/1104814?v=3" width="100px;"/><br /><sub>danielcrisp</sub>](https://github.com/danielcrisp)<br />[🐛](https://github.com/formly-js/ng2-formly/issues?q=author%3Adanielcrisp) [💻](https://github.com/formly-js/ng2-formly/commits?author=danielcrisp) |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
