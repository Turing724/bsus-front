# bsus-front

> power by nextjs

# Related projects

[bsus](https://github.com/baishiup/bsus)  
[bsus-admin](https://github.com/baishiup/bsus-admin)

# TODO

- [ ] about
- [ ] search

# instructions

## 支持 less

`npm i @zeit/next-less -S`

```js
// next.config.js
const withLess = require("@zeit/next-less");
module.exports = withLess({});
```

#### AOT 生成配置/environment.ts

> npm run build --host=localhost:3000

```js
// script/index.js
const environment = `// 构建时生成
export default{
    host:'${args.host || "http://localhost:3000"}'
}`;
fs.writeFileSync(path.resolve(__dirname, "../environment.ts"), environment);
```

```json
// package.json
// ...
"scripts": {
    "dev": "node script && next -p 3001",
    "build": "node script &&next build",
    "start": "node script &&next start -p 3001"
}
// ...
```

#### 自动构建(本地 jenkins),服务器 pm2 托管运行

```bash
# execute shell
rm -rf ${WORKSPACE}/bsus-front
cd /Users/xxx/workspace/mywork
echo ${WORKSPACE}
rsync -av --exclude bsus-front/.git --exclude bsus-front/node_modules --exclude bsus-front/.next --exclude bsus-front/_next bsus-front ${WORKSPACE}
```

```bash
# send build artifacts over SSH

# source files
bsus-front/**

# exec command
pm2 stop bsus-front
pm2 delete bsus-front
rm -rf /usr/share/nginx/html/bsus-front
mv ./bsus-front /usr/share/nginx/html/bsus-front

cd /usr/share/nginx/html/bsus-front
cnpm i
npm run build --host=${host}
pm2 start npm --name "bsus-front" -- run start --host=${host}



```
