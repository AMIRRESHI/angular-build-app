import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyButton } from "./lib/button/button";
import { MyInput } from './lib/input/input';
import { MyModule } from './lib/my.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-build-app');
}
