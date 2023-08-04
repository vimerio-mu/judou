# JuDou
句读，一个简单的类古籍体排版方案
=======
提供以下功能：
1. 标点符号转换，生成句读
2. 阿拉伯数字转中文
3. 生成类古籍的排版效果

![image-20230804225550319]('./../../src/assets/demo.png')

## Install

```shell
$ npm install judou
```

## Usage

```vue
<script setup>
  import JuDou from 'judou';
  import { ref } from 'vue'
  
  const text = ref("")
  </script>
  
<template>
  <div>
    <input type="text" v-model="text">
    <JuDou :text="text" :fontSize="72" />
  </div>
</template>
```

## Attributes

| 参数            | 说明     | 类型   | 默认值                |
| --------------- | -------- | ------ | --------------------- |
| text            | 文字内容 | String | 逝者如斯夫,不舍昼夜。 |
| fontSize        | 字体大小 | Number | 36                    |
| width           | 背景宽度 | Number | 450                   |
| height          | 背景高度 | Number | 800                   |
| backgroundColor | 背景颜色 | String | #e7ddcb               |

