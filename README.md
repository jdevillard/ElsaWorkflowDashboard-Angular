# ElsaWorkflowDashboardAngularv12


This project aims to show how to embed the [Elsa-Workflow-Studio](https://github.com/elsa-workflows/elsa-core) in an angular Application using Web Component.

After scaffolding the angular projet you have to : 

- install @elsa-workflows/elsa-workflows-studio
- install @stencil/router (this is necessary when loading elsa-workflow-studio, rem: have to check if it's declare explicitly as a dependency)

`npm install @elsa-workflows/elsa-workflows-studio`

this will install the necessary monaco editor.

- add in angular.json, the necessary code to copy some lib (monaco and css) to assets folder

```
  { "glob": "**/*", "input": "node_modules/monaco-editor/min", "output": "./assets/monaco/" },
              { "glob": "**/*", "input": "node_modules/@elsa-workflows/elsa-workflows-studio/dist/elsa-workflows-studio/assets", "output": "./assets/" },
              { "glob": "*.css", "input": "node_modules/@elsa-workflows/elsa-workflows-studio/dist/elsa-workflows-studio", "output": "./assets/" },
           
```

- add  `schemas: [CUSTOM_ELEMENTS_SCHEMA]` in you app.module to be able to load non angular module

- load the Elsa Component using Web Component in your `main.ts`

```
// Note: loader import location set using "esmLoaderPath" within the output target config
import { defineCustomElements as elsaCustomElements } from '@elsa-workflows/elsa-workflows-studio/loader';
elsaCustomElements();
```

- finally load css and monaco in index.html

```
<link rel="stylesheet" href="assets/elsa-workflows-studio/fonts/inter/inter.css" />
  <link rel="stylesheet" href="assets/elsa-workflows-studio.css" />
  <script src="assets/monaco/vs/loader.js"></script>
```

and the Elsa Component in any of your component using : 
```
<div class="container-fluid">
  <div>
    <elsa-studio-root server-url="https://localhost:11000/" monaco-lib-path="assets/monaco">
      <elsa-studio-dashboard></elsa-studio-dashboard>
    </elsa-studio-root>
  </div>
</div>
```


# Angular information 
This scaffoling of the project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



