const fs = require("fs");
const path = require("path");
const args = require("./getArgList")();

const environment = `// 构建时生成
export default{
    host:'${args.host || "http://localhost:3000"}'
}`;

fs.writeFileSync(path.resolve(__dirname, "../environment.ts"), environment);
