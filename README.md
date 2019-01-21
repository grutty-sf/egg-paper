# egg-paper

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-paper.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-paper
[travis-image]: https://img.shields.io/travis/eggjs/egg-paper.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-paper
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-paper.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-paper?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-paper.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-paper
[snyk-image]: https://snyk.io/test/npm/egg-paper/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-paper
[download-image]: https://img.shields.io/npm/dm/egg-paper.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-paper

<!--
Description here.
-->

## Install

```bash
$ npm i egg-paper --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.paper = {
  enable: true,
  package: 'egg-paper',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.paper = {
  baseDir: 'paper',
  isShortcuts: true, //是否开启快捷键
  linkBreak: '[\n]',  //换行
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
