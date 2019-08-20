import { Injectable } from '@angular/core';
import { CssStore } from '../helper/css.store';



@Injectable({
  providedIn: 'root'
})
export class CssLinkService {

  private cssStores: any = {};

  constructor() {
    CssStore.forEach((cssStoreLink: any) => {
      this.cssStores[cssStoreLink.name] = {
        loaded: false,
        href: cssStoreLink.href
      };
    });
  }


  load(...cssLinks: string[]) {
    // console.log(cssLinks);
    var promises: any[] = [];
    cssLinks.forEach((script) => promises.push(this.loadCss(script)));
    return Promise.all(promises);
  }

  loadCss(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.cssStores[name].loaded) {
        resolve({script: name, loaded: true, status: 'Link Stylesheet Already Loaded'});
      }
      else {
        // load script
        let cssAdd = document.createElement('link');
        cssAdd.rel = 'stylesheet';
        cssAdd.href = this.cssStores[name].href;
        if (cssAdd) {  // IE

              this.cssStores[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
        } else {  // Others
            this.cssStores[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});

        }
        cssAdd.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        // console.log(cssAdd);
        document.getElementsByTagName('head')[0].appendChild(cssAdd);
      }
    });
  }

}
