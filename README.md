# kill-mongodb [![][npm_img]][npm_url] [![][travis_img]][travis_url] [![][coverage_img]][coverage_url] [![][appveyor_img]][appveyor_url] [![][gitter_img]][gitter_url]

Kill any currently running MongoDB instances on OSX, Linux, or Windows.

## Installation

```bash
npm install --save-dev kill-mongodb;
```

## Examples

If your tests start mongodb, you can just add a handy `posttest` hook
to kill off any instances that might be lingering.

```json
{
  ...
  "scripts": {
    "test": "mocha",
    "posttest": "kill-mongodb"
  }
  ...
}
```

## License

Apache 2.0

[travis_img]: https://secure.travis-ci.org/mongodb-js/kill-mongodb.svg?branch=master
[travis_url]: https://travis-ci.org/mongodb-js/kill-mongodb
[npm_img]: https://img.shields.io/npm/v/kill-mongodb.svg
[npm_url]: https://www.npmjs.org/package/kill-mongodb
[coverage_img]: https://coveralls.io/repos/mongodb-js/kill-mongodb/badge.svg?branch=master
[coverage_url]: https://coveralls.io/r/mongodb-js/kill-mongodb
[gitter_img]: https://badges.gitter.im/Join%20Chat.svg
[gitter_url]: https://gitter.im/mongodb-js/mongodb-js
[appveyor_img]: https://ci.appveyor.com/api/projects/status/4g98a17gjo360wgy?svg=true
[appveyor_url]: https://ci.appveyor.com/project/imlucas/kill-mongodb
