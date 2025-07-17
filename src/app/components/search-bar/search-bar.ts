import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss'
})
export class SearchBar {
  form = new FormGroup({
    userName: new FormControl('', Validators.required)
  });
  @Output() usernameSubmit = new EventEmitter<string>();

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.form.value.userName && typeof this.form.value.userName === 'string') {
      console.log('Emitting:', this.form.value.userName);
      this.usernameSubmit.emit(this.form.value.userName);
    } else {
      console.log('Name field is invalid.');
    }
  }
}
