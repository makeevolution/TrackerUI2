# TrackerUI2 project

## Initial Setup
1. Download node `snap install node --channel=18 --classic`
2. Download angular `npm install -g @angular/cli`. `-g` is so it is accessible from all folders
3. `ng new trackerui2`
4. Run `ng serve` and verify the standard page is shown. If running behind Nginx reverse proxy, set your `base` tag in `index.html`, particularly the `href` tag to match the subpath in your `conf.d` or `sites-enabled` that proxies `4200` port or whatever other port you use to run `ng serve` on
