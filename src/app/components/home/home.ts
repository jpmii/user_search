import { Component } from '@angular/core';
import { RouterOutlet, RouterModule  } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../search-bar/search-bar';
import { GithubService } from '../../services/github';
import { UserCard } from '../user-card/user-card';
import { SearchedUser } from '../../searched-user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBar, UserCard],
  templateUrl: 'home.html'
})
export class HomeComponent {
    protected title = 'user-search';
    user: SearchedUser | null = null;
  
    constructor(private GithubService: GithubService) { }
    
    onUsernameSearch(username: string) {
      this.GithubService.searchUser(username).subscribe({
        next: (user: SearchedUser) => {
          console.log('User Data:', user);
          this.user = user;
        },
        error: (error: string) => {
          console.error('Error fetching user data:', error);
          this.user = null;
        }
      });
    }
}