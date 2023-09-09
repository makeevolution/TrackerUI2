# TrackerUI2 project

## Initial Setup
1. Download node `snap install node --channel=18 --classic`
2. Download angular `npm install -g @angular/cli`. `-g` is so it is accessible from all folders
3. `ng new trackerui2`
4. Run `ng serve` and verify the standard page is shown. If running behind Nginx reverse proxy, set your `base` tag in `index.html`, particularly the `href` tag to match the subpath in your `conf.d` or `sites-enabled` that proxies `4200` port or whatever other port you use to run `ng serve` on

# Fundamentals
- Components are the building blocks of an angular app
- A component is defined by the @Component decorator. You are basically making a new HTML tag. You set the selector key to define your component's HTML tag name and template key to define what is inside your selector
- You import components in a module. The module allows you to use your component in a html defined in the same level as your module
- Use `ng g c nameofcomponent` to auto-create a new component and add it to the app's `app.module.ts` automatically, so that your component can be used everywhere
- Directives are used in order to modify a native DOM element behavior

