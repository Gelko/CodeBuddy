import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  moduleName = "ProjectFiles";
  entityName = "Building";
  entityNamePlural = "Buildings"
  code : string;
  
  // const uuidv1 = require('uuid/v1');

  generateTemplate() {
    
    console.log(this.uuidv1());
    console.log(this.moduleName);
    this.code = '{\r\n'
    this.code += '  "guid": "84C83D99-7D90-4FAE-9B7F-3D3B6CEBBC92",\r\n'
    this.code += '  "label\": "resx:Portego.' + this.moduleName + '.Localization.' + this.moduleName + '.' + this.entityName + '_PageLabel,\r\n'
    this.code += '  "isNavigationItem": false\,\r\n'
    this.code += '  "navigationPageType": 1\,\r\n'
    this.code += '  "tags": [ ],\r\n'
    this.code += '  "route":{\r\n'
    this.code += '    "state": "' + this.moduleName.toLowerCase() + '-' + this.entityName.toLowerCase() + '-list",\r\n'
    this.code += '    "url": "/' + this.moduleName.toLowerCase() + '/' + this.entityNamePlural.toLowerCase() + '",\r\n'
    this.code += '    "template": "/Template/' + this.entityName + '/' + this.entityName + 'List",\r\n' 
  }

}
