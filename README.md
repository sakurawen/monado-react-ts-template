# Monado-React-Typescript-Template

@monado/cli 使用的默认 React 模板 ,集成 React Router、Zustand、React I18next、Tailwindcss

## usage

```js
npx @monado/cli create <projectName>
```


## configuration
在项目文件夹下创建 monado.config.json 作为配置文件，目前支持的配置如下

```json
{
	"publicPath": "/",
	"devServer": {
		"port": 4000,
		"proxy": {
			"/api": "http://localhost:9000"
		}
	},
  "alias":{
    "@":"src"
  },
	"plugins": {
		"bundleAnalyzer": false
	}
}
```


### 启用 mdx

安装@mdx-js/react 后 monado-scirpts 自动启用 mdx-loader

```shell
npm install @mdx-js/react
```

### 启用 scss

安装 sass 后 monado-scirpts 自动启用 sass-loader,并支持 css module

```shell
npm install sass
```

### 开发代理配置

@monado/scripts 的配置文件的开发服务代理使用与 webpack 开发代理一样的规则

```json
{
	"devServer": {
		"proxy": {
			"/api": {
				"target": "http://localhost:8000",
				"pathRewrite": {
					"^/api": ""
				}
			}
		}
	}
}
```

### 别名配置
在monado.config.json的alias字段下配置别名
以下为将`@`作为项目根目录下`src`目录别名的配置
```json
{
 "alias":{
    "@":"src"
  },
}
```
