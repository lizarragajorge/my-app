import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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
