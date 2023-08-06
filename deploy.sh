#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
npm run build

# 进入构建文件夹
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# 部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:vimerio-mu/judou.git main:gh-pages

cd -
