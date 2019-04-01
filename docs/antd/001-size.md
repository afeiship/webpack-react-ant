# size optimize

> All in development mode.

## original

```
Show chunks:
All (695.37 KB)
main/main-d547bd.js (659.22 KB)
chunks/0-d547bdb3.js (13.95 KB)
chunks/2-d547bdb3.js (12.31 KB)
chunks/1-d547bdb3.js (9.89 KB)
```

## Add antd(button)

```
Show chunks:
All (5.12 MB)
chunks/0-71125be4.js (4.45 MB)
main/main-71125b.js (659.22 KB)
chunks/2-71125be4.js (13.95 KB)
chunks/1-71125be4.js (13.09 KB)
```

## dynamic antd

```
Show chunks:
All (1.35 MB)
chunks/0-7ae087b1.js (701.02 KB)
main/main-7ae087.js (659.22 KB)
chunks/2-7ae087b1.js (13.95 KB)
chunks/1-7ae087b1.js (10.01 KB)
```

> https://github.com/ant-design/babel-plugin-import

1. install import plugin

   ```shell
    npm install babel-plugin-import --save-dev
   ```

2. add to .babelrc

```json
["import", { "libraryName": "antd", "libraryDirectory": "lib" }, "ant"]
```

## external moment

> 发现一个比较大的库

```js
import { DatePicker } from 'antd';
```

## webpack + external 方式优化

> 需要引处这个，放在 global 去.

```html
<script src="https://cdn.bootcss.com/moment.js/2.24.0/moment.min.js"></script>
```

```
Show chunks:
All (1.81 MB)
chunks/0-1ca756a4.js (1.14 MB)
main/main-1ca756.js (659.22 KB)
chunks/2-1ca756a4.js (13.95 KB)
chunks/1-1ca756a4.js (10.06 KB)
```

## antd + icons:

```js
{
  '@ant-design/icons/lib/dist$': path.resolve(__dirname, '../src/modules/icons.js')
}
```

## modules/icons.js

```js
// export what you need
export { default as SmileOutline } from '@ant-design/icons/lib/outline/SmileOutline';
export { default as MehOutline } from '@ant-design/icons/lib/outline/MehOutline';
```

## 直接 antd 走 CDN

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.15.2/antd.min.css" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.15.2/antd.min.js"></script>
```

```js
externals: nx.mix(
  configs.externals.react(),
  configs.externals.moment(),
  configs.externals.antd()
),
```
