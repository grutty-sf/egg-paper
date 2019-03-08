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
  app.loader.loadToApp(paperDir, paperConfig.baseDir, {
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
    if (paperConfig.isShortcuts && shortcuts) { // 是否显示快捷键
      if (shortcuts && shortcuts.length > 0) { // TODO判断优化
        result += paperConfig.linkBreak; // 换行
        shortcuts.forEach((item, index) => {
          if (!item.hasOwnProperty('required') || info[item.required]) {
            result += `(${index})${item.alias}`; // TODO 快捷键过多换行  不显示某个快捷键
          }
        });
      }
    }
    return result;
  }

  function toFuc(factory) {
    const paperList = Object.keys(factory) || [];
    const result = {};
    paperList.forEach(paper => {
      result[paper] = (info, options = {
        derma: 'default',
        isShortcuts: true, // 默认开启局部快捷键
      }) => {
        if (factory[paper]) {
          const shortcuts = options.isShortcuts ? factory[paper].shortcuts : false;
          const {header} = factory[paper];
          let derma;
          if (factory[paper].derma instanceof Object) {
            derma = factory[paper].derma[options.derma];
            if(!derma) {
              return 'derma error';
            }
          } else {
            derma = factory[paper].derma;
          }
          return strRender(info, header + derma, shortcuts);
        }
        return info;
      };
    });
    return result;
  }
};
