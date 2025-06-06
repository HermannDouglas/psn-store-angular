import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  gameCover: string = '';
  @Input()
  gameLabel: string = '';
  @Input()
  gameType: string = 'XPTO | PS4';
  @Input()
  gamePrice: string = 'R$ 399,90';

  constructor() {}

  ngOnInit(): void {}
}
