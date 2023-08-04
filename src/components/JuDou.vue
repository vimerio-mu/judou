<script setup>
  import { computed, ref,onMounted } from 'vue';
  import {numToChinese} from '../utils/numToChinese'
  // 传入数据
  const props = defineProps({
      text: {
          type: String,
          default: '逝者如斯夫,不舍昼夜。'
      },
      fontSize: {
          type:Number,
          default:36
      },
      width: {
          type: Number,
          default: 450
      },
      height: {
          type: Number,
          default: 800
      },
      backgroundColor: {
          type: String,
          default: '#e7ddcb'
      }
  })
  // 处理文字
  function changeJuDou(text) {
      let temp = text;
      // 数字转写
      function repalcer(match) {
          return numToChinese(Number(match))
      }
      temp = temp.replace(/(-?\d+)(\.\d+)?/g, repalcer)
      let arr = [],res = [];
      for(let i = 0; i < temp.length; i++) {
          // 中文
          if(temp[i].match(/\p{Script=Han}/u)) {
              arr.push(temp[i])
              // console.log(arr[arr.length-1])
          }else 
          // 读
          // 增加判断，防止出现“。、。”的情况
          if(temp[i].match(/,|，|、/) && (arr[arr.length - 1] !== '。'&& arr[arr.length - 1] !== '、')) {
              arr.push('、')
              // console.log(arr[arr.length-1])
          }else 
          // 句
          if(temp[i].match(/：|“|”|"/)) {
              // console.log("小标点不入")
          }else 
          if(temp[i].match(/\p{P}/u) && (arr[arr.length - 1] !== '。'&& arr[arr.length - 1] !== '、')) {
              arr.push('。')
              // console.log(arr[arr.length-1])
          }
      }
      // 去除连续重复句号,常见情况如 “？！”这样的连续标点符号使用
      for(let j = 0; j < arr.length; j++) {
          if((res[res.length - 1] !== '。' && res[res.length - 1] ) || arr[j] !== '。') {
              res.push(arr[j])
          }
      }
      return res.join('')
  }
  // 直接根据句读截断，并且生成html
  const changedText = computed(() => {
      let raw = changeJuDou(props.text);
      let html = '',temp = '';
      for(let i = 0; i< raw.length; i++) {
          while(raw[i] !== '。' && raw[i] !== '、' && raw[i]) {
              temp += raw[i]
              i++
          }
          html += `<span >${temp}</span>`
          temp = ''
          if(raw[i]) {
              html += `<span class='punc'>${raw[i]}</span>`
          }
      }
      return html
  })
  // 处理样式
  const style = {
      height: props.height + 'px',
      width: props.width + 'px',
      backgroundColor: props.backgroundColor,
      fontSize:props.fontSize+ 'px',
      paddingRight: props.fontSize * 0.55 + 'px'
  }
  const puncStyle = `translate(${props.fontSize * 0.55}px, -${props.fontSize * 0.55}px)`
  console.log("puncStyle: ",puncStyle)
  </script>
  
  <template>
      <div class="container" :style="style">
          <div v-html="changedText"></div>
      </div>
  </template>
  
  <style scoped >
  @font-face {
      font-family: 'qiji';
      src: url('../assets/qiji-combo.ttf');
  }
  .container {
      writing-mode: vertical-rl;
      font-family: 'qiji';
      font-size: 36px;
      padding-right: 20px;
  }
  :deep(.punc) {
      display: inline-block;
      /* v-bind可以在style标签中使用script中的变量 */
      transform: v-bind(puncStyle);
      letter-spacing: -100px;
      color:#BB705AEE;
  }
  </style>
d  