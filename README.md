# README

> Nanbox Wordpress Starter Pack

### Getting Started

```
$ git clone git@github.com:fuzzco/nanobox-wordpress.git project-name
$ npm install
$ npm run init
```

##  Development

```
$ npm start
```

### Adding DNS

```
$ nanobox dns add local your-site.local
$ npm start
```

### Building the Theme

0. Visit your your-site.local and finish the set up.
1. Enable the plugins needed.
2. Switch to the Fuzzco Theme using Timber.

### Troubleshooting
- Requires that Timber plugin be activated to work properly.
- If Fuzzco theme is generating missing stylesheet error, make a change and save scss file in /theme/scss directory to trigger build process for /wp directory.
- If posts/pages won't display template, change the permalink structure to post-name.


