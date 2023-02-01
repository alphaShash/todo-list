import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() value: any;
  @Input() showPrompt: boolean = true;
  @Input() placeholder: any;
  @Input() title: any;
  @Input() template: any;
  @Input() okText: string;
  @Input() cancelText: string;
  @Output() valueEmitted = new EventEmitter<string>();

  constructor() {
    this.okText = 'OK';
    this.cancelText = 'Cancel';
  }

  ngOnInit() {
  }

  emitValue(value: any) {
    this.valueEmitted.emit(value);
  }

}
