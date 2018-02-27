# README

> Nanbox Wordpress Starter Pack

### Getting Started

```
$ git git@github.com:fuzzco/nanobox-wordpress.git project-name
$ npm run init
```

##  Development

```
$ npm start
```

> It's currently really not designed for that, yeah. Luckily, not only are we redesigning things so that this will be a piece of cake to handle in the future, you can still work around it now by setting some things up yourself. In the case of PHP+Node, it's actually really simple, because Node is pretty straightforward to set up. You'd use the PHP engine, and add `nodejs` to your `extra_packages`. You probably also want to add `yarn` or `npm install` to your `run.config`'s `extra_steps`, to ensure your Node deps get pulled in. Then, you just create two `web.*` components, one for PHP (with `start: {php: start-php, apache: start-apache}` as normal), and the other for Node (with `start: {node: npm run start}` or whatever as usual), and ensure their `routes` are set up unambiguously.