import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent {
  @Output() pageSelected = new EventEmitter<string>();
  selectPage(event: string) {
    this.pageSelected.emit(event);
  }
}
