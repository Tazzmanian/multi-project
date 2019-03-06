import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {

  constructor(private dss: DataStorageService,
    private ass: AuthService
    ) { }

  ngOnInit() {
  }

  onSave() {
    this.dss.storeRecipies().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onFetch() {
    this.dss.retrieveRecipes();
  }

  onLogout() {
    this.ass.logout();
  }

}
