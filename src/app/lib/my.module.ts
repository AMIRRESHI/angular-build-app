

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyButton } from './button/button';
import { MyInput } from './input/input';

@NgModule({
    declarations: [MyButton, MyInput],
    imports: [
        CommonModule
    ],
    exports: [MyButton, MyInput]
})
export class MyModule { }

