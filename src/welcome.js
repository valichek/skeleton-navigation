import {computedFrom} from 'aurelia-framework';
import {Validation} from 'aurelia-validation';

export class Welcome {
  
  static inject() {return [Validation]}
  
  heading = 'Welcome to the Aurelia Navigation App!';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;

  //Getters can't be observed with Object.observe, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below.
  //@computedFrom('firstName', 'lastName')
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  }

  submit(){
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }
  
  constructor(validation) {
    this.validation = validation.on(this)
        .ensure('firstName') 
              .isNotEmpty()
              .hasMinLength(5)
        .ensure('lastName') 
              .isNotEmpty();
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
