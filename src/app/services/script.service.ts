import {Injectable} from '@angular/core';
import {ScriptStore} from '../helper/script.store';

declare var document: any;

@Injectable()
export class ScriptService {

  private scriptsSrc: any = {};

  constructor() {
    ScriptStore.forEach((script: any) => {
      this.scriptsSrc[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    var promises: any[] = [];

    console.log(scripts)
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      // resolve if already loaded
      if (this.scriptsSrc[name].loaded) {
        resolve({script: name, loaded: true, status: 'Already Loaded'});
      }
      else {
        // load script
        let scriptAdd = document.createElement('script');
        scriptAdd.type = 'text/javascript';
        scriptAdd.src = this.scriptsSrc[name].src;
        if (scriptAdd.readyState) {  //IE
          scriptAdd.onreadystatechange = () => {
            if (scriptAdd.readyState === "loaded" || scriptAdd.readyState === "complete") {
              scriptAdd.onreadystatechange = null;
              this.scriptsSrc[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {  //Others
          scriptAdd.onload = () => {
            this.scriptsSrc[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        scriptAdd.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(scriptAdd);
      }
    });
  }

}
