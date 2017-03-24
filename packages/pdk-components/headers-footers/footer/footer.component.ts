import {Component, Input} from '@angular/core';

import {FooterLink} from './footer-link';

export * from './footer-link';

@Component({
    selector: 'gov-footer',
    template: `
      <footer class="group js-footer" id="footer" role="contentinfo">
          <div class="footer-wrapper"
               [ngClass]="{
                  'business': isBusiness,
                  'business-x-large': isBusinessXLarge,
                  'ui-minimal-view': minimalView
               }">
              <div class="contact">
                  <ng-content></ng-content>
              </div>
              <div class="footer-meta"
                   [ngClass]="{
                      'ui-footer-meta': minimalView
                   }">
                  <div class="footer-meta-inner">
                      <b class="visuallyhidden">Support links</b>
                      <ul>
                          <li *ngFor="let link of links">
                              <a [href]="link.url" [target]="link.target || '_self'">
                                  {{link.name}}
                                  <span *ngIf="link.target == '_blank'" class=“visually-hidden”>(opens in a new window)</span>
                              </a>
                          </li>
                          <li *ngIf="builtBy">Built by <a [href]="builtBy.url">{{builtBy.name}}</a></li>
                      </ul>
                      <div *ngIf="!minimalView" class="open-government-licence">
                          <p class="logo"><a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence</a></p>
                          <p>All content is available under the <a href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated</p>
                      </div>
                  </div>
                  <div *ngIf="!minimalView" class="copyright">
                      <a href="http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/">&copy; Crown copyright</a>
                  </div>
              </div>
          </div>
      </footer>
    `
})
export class FooterComponent {
    @Input()
    links: FooterLink[];

    @Input()
    builtBy: FooterLink;

    @Input()
    minimalView: boolean;

    @Input()
    isBusiness: boolean;

    @Input()
    isBusinessXLarge: boolean;
}
