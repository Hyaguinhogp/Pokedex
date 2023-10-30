import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-svg-provider',
  templateUrl: './svg-provider.component.html',
  styleUrls: ['./svg-provider.component.css']
})
export class SvgProviderComponent {
  @Input() svgPath: string = '';
  public svgContent: any;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if(this.svgPath) {
      this.http.get('../../../assets/' + this.svgPath + '.svg', { responseType: 'text' })
        .subscribe(data => {
          this.svgContent = this.sanitizer.bypassSecurityTrustHtml(data);
        })
    }
  }
}
