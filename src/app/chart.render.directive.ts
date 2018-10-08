import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appChartRender]'
})
export class ChartRenderDirective implements OnInit {
  // @Input('appChartRender')
  // appChartRender: string[];

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  ngOnInit() {
   this.appendEmptyCanvas(this.getTheIdList());
  }

  appendEmptyCanvas(idList: string[]) {
    for (const str of idList) {
      const canvasElement = this.renderer2.createElement('canvas');
      this.renderer2.setProperty(canvasElement, 'id', str);
      this.renderer2.appendChild(this.el.nativeElement, canvasElement);
    }
  }
  getTheIdList(): string[] {
    let idList: string[];
    idList = new Array<string>();
    if (!this.appChartRender) {
      idList = new Array<string>();
    } else if (this.appChartRender && this.appChartRender.length >= 0) {
      idList = this.appChartRender;
    }
    return idList;
  }

  @Input() set appChartRender ( appChartRender: string[]) {
    this.appendEmptyCanvas(appChartRender);
  }
}
