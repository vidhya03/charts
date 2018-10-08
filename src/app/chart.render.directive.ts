import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChartRender]'
})
export class ChartRenderDirective implements OnInit {
  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
    // this.el.nativeElement.style.color = 'blue';
    this.renderer2.setStyle(this.el.nativeElement, 'color', 'blue');
    let v = this.renderer2.createElement('canvas');
    this.renderer2.setProperty(v, 'id', 'canvas');
    this.renderer2.appendChild(this.el.nativeElement, v);
  }
}
