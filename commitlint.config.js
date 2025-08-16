// commitlint.config.js
module.exports = {
  extends: ['gitmoji'],     // 来自 commitlint-config-gitmoji
  rules: {
    // 可按需覆盖，示例：限制标题长度
    'header-max-length': [2, 'always', 100],
  },
};
