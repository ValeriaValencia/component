import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent implements OnInit {

  @Input('title') title: string;
  @Input('subtitle') subtitle: string;
  @Input('subtitleBold') subtitleBold: string;
  @Input('italic') italic: string;
  @Input('numeroBolita') numeroBolita: string;
  @Input('messageButton') messageButton: string;

  constructor() { }

  ngOnInit(): void {
  }

}
