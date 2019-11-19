import { Component, Input } from '@angular/core';

@Component({
  selector: 'legacy-lib-component-1',
  template: '<div>legacy-lib-component-1</div>'
})
export class LegacyLibComponent {
  @Input()
  public value: number;
}
