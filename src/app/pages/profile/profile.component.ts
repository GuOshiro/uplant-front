import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/guards/auth.service';
import { AbstractService } from '../../services/abstract.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  username = '';
  email = '';
  url = 'projects/'
  projects;
  constructor(
    private authService: AuthService,
    private abstractService: AbstractService
  ) { }

  async ngOnInit() {
    await this.getProject()

    this.authService.getProfile().subscribe(profile => {
      this.username = profile.user.username;
      this.email = profile.user.email;
    });

    console.log(this.projects)
  }

  async getProject() {
    await this.abstractService.get(this.url)
      .subscribe(res => {
        this.projects =  res
        console.log('resolved', this.projects)
      })
  }

}
