# css-corp-batch-2
Javascript, Advance Javascript, React, Mobx, Redux, Node.js
steps followed for initail project setup
1)install webpack
2)setup webpack config file
3)install babel related plugins
 - https://babeljs.io/setup#installation
4)install eslint 
 - https://eslint.org/docs/user-guide/getting-started
5)after installing eslint setup eslint config file
  - yarn run eslint --init
  - add lint option in scripts folder in package.json
  - check the errors by running yarn lint
  - fix the errors by adding lint:fix option in package.json
6)Add the html webpack plugin  
  - https://www.npmjs.com/package/html-webpack-plugin
7)install webpack dev server(temperory server) for project to start
  - https://www.npmjs.com/package/webpack-dev-server
8)for formatting the project and resolving the conflict of eslint and vscode rules we need to install exact prettier
  - https://prettier.io/docs/en/install.html 
  - run yarn add --dev --exact prettier 
  - echo {}> .prettierrc.json - to create config file
9)to understand the es6 code by eslint we need to add the babel eslint es6 parser
  - https://www.npmjs.com/package/@babel/eslint-parser  
  - parser: "@babel/eslint-parser",   
10)we need to add react and react dom for our project which is a dependency
  - yarn add react react-dom
11)Enforce a specific function type for function components we need to add rule in eslint configuration
  - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
12)Restrict file extensions that may contain JSX we need to add rule in eslint configuration
  - https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
  