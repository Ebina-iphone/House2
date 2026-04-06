import { Component,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  // 「route」という名前の変数（場所）を作って、そこに「URL専門家ActivatedRoute」（代入する）
  //この一行を書いたあとの route という変数の中には、自分では作れない**「URLに関するあらゆる情報」**がギッシリ詰まっています。
  route: ActivatedRoute =inject(ActivatedRoute);
  housingLocationId =0;

  constructor(){
    this.housingLocationId=Number(this.route.snapshot.paramMap)
  }

}
