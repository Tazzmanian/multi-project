import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage';
import { AuthService } from '../../auth/auth.service';
import { assertDataInRange } from '@angular/core/src/render3/state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {

  ass: AuthService;

  constructor(private dss: DataStorageService,
    private _ass: AuthService
    ) { }

  ngOnInit() {
    this.ass = this._ass;
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
