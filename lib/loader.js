'use strict';

const path = require('path');

module.exports = app => {
  const defaultConfig = {
    baseDir: 'paper',
    isShortcuts: true,
    linkBreak: '\n' };
  const config = app.config.paper;
  const paperConfig = Object.assign({}, defaultConfig, config);

  const paperDir = path.join(app.baseDir, 'app', paperConfig.baseDir);
  app.loader.loadToApp(paperDir, 'paper', {
    ignore: config.exclude,
    initializer(factory) {
      return toFuc(factory);
    },
  });

  function strRender(info, template, shortcuts) { // 字符串渲染
    let result = template.replace(/\{\w+?\}/g, function(item) {
      const key = item.slice(1, -1);
      return info[key];
    });
    if (paperConfig.isShortcuts) { // 是否显示快捷键
      if (shortcuts && shortcuts.length > 0) { // TODO判断优化
        result += paperConfig.linkBreak; // 换行
        shortcuts.forEach((item, index) => {
          result += `(${index})${item.alias}`; // TODO 快捷键过多换行
        });
      }
    }
    return result;
  }

  function toFuc(factory) {
    const nameList = Object.keys(factory);
    const result = {};
    (nameList || []).forEach(name => {
      result[name] = (info, derma = 'default') => {
        if (factory[name]) {
          if (factory[name].derma instanceof Object) {
            return strRender(info, factory[name].derma[derma], factory[name].shortcuts);
          }
          return strRender(info, factory[name].derma, factory[name].shortcuts);
        }
        return info;
      };
    });
    return result;
  }
}
;
