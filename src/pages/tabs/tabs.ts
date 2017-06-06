import { Component } from '@angular/core';

import { OverzichtPage } from '../overzicht/overzicht';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ReseveringPage } from '../resevering/resevering';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OverzichtPage;
  tab3Root = ReseveringPage;
  tab4Root = ContactPage;
  constructor() {

  }
}
