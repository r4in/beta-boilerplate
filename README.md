[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

# Beta Boilerplate

[![Build Status](https://travis-ci.org/h5bp/html5-boilerplate.svg)](https://travis-ci.org/h5bp/html5-boilerplate)
[![devDependency Status](https://david-dm.org/h5bp/html5-boilerplate/dev-status.svg)](https://david-dm.org/h5bp/html5-boilerplate#info=devDependencies)

Beta is a wordpress starter theme boilerplate built on top of [Underscores](https://underscores.me/) and [Andy Leverenz's WP Workflow](https://bitbucket.org/justalever/startertheme/src/master/).


## Quick start

How To Use:

1.  Clone the git repo — `git clone https://github.com/r4in/beta-boilerplate.git`

2.  Install all node dependencies with `npm install --save-dev`. I'm using Gulp as my primary task runner for autotomating stuff around.

3.  All source files are the the app folder. This will be your workspace and to begin, open the terminal and `gulp watch` to activate sass & livereload.

4.  To prepare your code for deployment, run `gulp build` to export everything to the dist folder. If you're deploying on Netlify - no need to generate as Netlify reads the build task on the gulpfile.js script to deploy.

## Features

- Jam packed with [`HTML5`](https://html5boilerplate.com/) goodness.
- [`Bootstrap 4.css`](https://getbootstrap.com/)
  Latest bootstrap framework
- [`Reboot`](https://github.com/twbs/bootstrap/blob/v4-dev/scss/_reboot.scss)
  An continous switch from css reset to normalize to reboot
- [`jQuery`](https://jquery.com/) via CDN, with a local fallback

## Browser support

- Chrome _(latest 2)_
- Edge _(latest 2)_
- Firefox _(latest 2)_
- Internet Explorer 8+
- Opera _(latest 2)_
- Safari _(latest 2)_

_This doesn't mean that HTML5 Boilerplate cannot be used in older browsers, just that we'll ensure compatibility with the ones mentioned above._

## License

The code is available under the [MIT license](LICENSE.txt).
