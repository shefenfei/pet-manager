`要执行以下的npm 脚本`
```
    npm install --save-dev webpack
    npm install --save-dev css-loader style-loader
    npm install --save-dev uglifyjs-webpack-plugin
    npm install --save-dev html-webpack-plugin
    npm install --save-dev webpack-dev-server
    npm install --save-dev clean-webpack-plugin
```

```
配置
开发环境(development)和生产环境(production)的构建目标差异很大。
在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。
而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

```