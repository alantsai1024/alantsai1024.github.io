export class AppComponent {{
  config: any;
  fullpage_api: any;

  constructor() {{

    // for more details on config options please visit fullPage.js docs
    this.config = {{
      menu: '#menu',
      anchors['page1','page2','page3']
    }};
  }}
}}