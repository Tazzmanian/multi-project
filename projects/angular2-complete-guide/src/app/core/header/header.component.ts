import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage';
import { AuthService } from '../../auth/auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {

  ass: AuthService;
  authState: Observable<fromAuth.State>;

  constructor(private dss: DataStorageService,
    private _ass: AuthService,
    private store: Store<fromApp.AppState>
    ) { }

  ngOnInit() {
    this.ass = this._ass;
    this.authState = this.store.select('auth');
    console.log(this.authState);
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
