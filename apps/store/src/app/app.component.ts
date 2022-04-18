import { Component } from '@angular/core';

@Component({
  selector: 'regshop-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'store';

  images = [
    "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ae9480c8e22b4ee5a393ad11008f9393_9366/Krossovki_Reebok_Lite_3_chernyj_G57564_01_standard.jpg",
    "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e40ebe94f0844d47bc5ead11008f733a_9366/Krossovki_Reebok_Lite_3_chernyj_G57564_02_standard.jpg",
    "https://assets.reebok.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/10dde3de9c1945078219ad11008f654d_9366/Krossovki_Reebok_Lite_3_chernyj_G57564_03_standard.jpg"
  ]
}
