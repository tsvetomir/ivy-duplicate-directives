import { Component, Input } from '@angular/core';

@Component({
  selector: 'legacy-lib-component-2',
  template: '<div>legacy-lib-component-2</div>'
})
export class LegacyLibComponent {
  @Input()
  public value: number;
}
