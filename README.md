### 安装vue-cli

> npm install --global vue-cli

### 初始化vue项目

> vue init webpack project-name

``` bash
 Target directory exists. Continue? Yes
? Project name test-manager
? Project description A Vue.js project
? Author groot <328592171@qq.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recom
mended) npm
```

### 运行项目

> npm run start  

serve with hot reload at localhost:8080

### 目录结构

- .postcssrc.js(postcss配置项)
- .gitignore(配置文件不被提交到git仓库)
- .eslintrc.js(配置代码规范)
- .eslintignore(哪些文件不受eslint检测)
- .editorconfig(配置编辑器的语法)
- .babelrc(js转换配置)
- static(存放静态资源)
- node_modules(项目以来的包)
- src(项目代码)
- src/main.js(入口文件)
- src/router(路由配置)
- src/components(组件)
- config(项目配置文件)
- config/index.js(基础配置信息)
- config/dev.env.js(开发环境配置信息)
- config/prod.env.js(生产环境配置信息)
- build(webpack配置信息)

### 参考资料
- http://vuejs-templates.github.io/webpack/
- http://vuejs.github.io/vue-loader
- https://www.iviewui.com/docs/guide/install