import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isUseLetters = false;
  public isUseNumbers = false;
  public isUseSymbols = false;
  public password="";
  public length = 0;

  onChangeLenght(event: Event){
    var parsedValue = parseInt((event.target as HTMLInputElement).value);
    if(parsedValue !=NaN){
      this.length = parsedValue;
    }
  }

  onChangeUseLeters(){
    this.isUseLetters = !this.isUseLetters;
  }

  onChangeUseNumbers(){
    this.isUseNumbers = !this.isUseNumbers;
  }

  onChangeUseSymbols(){
    this.isUseSymbols = !this.isUseSymbols;
  }

  onButtonClick(){
    const numbers ='1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    var validChars ='';
    if(this.isUseLetters){
      validChars += letters;
    }
    if(this.isUseNumbers){
      validChars += numbers;
    }
    if(this.isUseSymbols){
      validChars += symbols;
    }
    var generatedPassword='';
    for(var i=0; i < this.length; i++){
      var index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index]; 
    }
    this.password = generatedPassword
  }
}
