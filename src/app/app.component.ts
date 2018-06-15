import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './templates/app.component.html',
  styleUrls: ['./styles/app.component.css']
})
export class AppComponent
{
  title = 'app';
  page = "home";

  getPage = function()
  {
    return this.page;
  }

  setPage(pageState)
  {
    this.page = pageState;
  }

}
