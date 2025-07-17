import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchedUser } from '../../searched-user';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss'
})
export class UserCard {
  @Input() user?: SearchedUser;
}