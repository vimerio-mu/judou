<script setup>
  import JuDou from './components/JuDou.vue';
  import { ref } from 'vue'
  
  const text = ref(`子曰：“学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”有子曰：“其为人也孝弟，而好犯上者，鲜矣；不好犯上而好作乱者，未之有也。君子务本，本立而道生。孝弟也者，其为仁之本与！”子曰：“巧言令色，鲜矣仁！”曾子曰：“吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？”`)
  </script>
  
<template>
  <div class="body">
    <div class="section">
      <div class="text">
        <div class="title"></div>
        <h1>句读</h1>
        <br>
        <p>一个简单的类古籍排版工具。</p>
        <br>
        <p>
          它提供以下功能<br> <br>
          一、标点符号转换、生成句读。<br>
          二、阿拉伯数字转中文。<br>
          三、生成类古籍的排版效果。</p><br>
        <p>在此测试</p>
        <br>
        <textarea cols="50" rows="10" v-model="text"></textarea>
      </div>
      <div class="show">
        <JuDou :text="text" :fontSize="48" />
      </div>
    </div>
    <div class="section">
      <div class="usage">
        <h2>数字转换</h2>
        <p>1234567.89.</p>
        <JuDou text="1234567.89." :fontSize="48" :height='400' :width='150' />
      </div> 
      <div class="usage">
        <h2>句读处理</h2>
        <p>所有符号《包括半角,通通转换！</p>
        <JuDou text="所有符号《包括半角,通通转换！" :fontSize="48" :height='400' :width='150' />
      </div> 
      <div class="usage">
        <h2>特殊情况</h2>
        <p>。首非标点，连续存一。.。.交叉亦可识别.,.</p>
        <JuDou text="。首非标点，连续存一。.。.交叉亦可识别.,." :fontSize="48" :height='400' :width='150' />
      </div>
      <div class="about">
        <div>
          <a href="https://github.com/vimerio-mu/judou">本项目仓库</a><br><br>
          <a href="https://npmjs.org/judou">引用包地址</a>
        </div>
        <div class="self">
          <a href="https://space.bilibili.com/4793005">
            <img src="https://www.npmjs.com/npm-avatar/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdmF0YXJVUkwiOiJodHRwczovL3MuZ3JhdmF0YXIuY29tL2F2YXRhci8wZDZjNTI4NTE2NzNlZWVhNTg1N2VjMTYxZDNlYjU2OD9zaXplPTQ5NiZkZWZhdWx0PXJldHJvIn0.8vAAofDrK_7JKuP8qkc-8Dz9Mv1KfV8PpomLhQO6HrI" alt="">
          </a>
          <p>霁之诗</p>
        </div>
      </div>
    </div>
  </div>
</template>
  
<style scoped>
@font-face {
    font-family: 'qiji';
    src: url('../src/assets/qiji-combo.ttf');
}
.body {
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
}
.section {
  width: 80vw;
  height: 100vh;
  border: 2px solid #e7ddcb;
  margin: 0 auto;
  scroll-snap-align: start;
  font-family: 'qiji';
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
.text {
  margin-left: 7rem;
  font-size: 1.6rem;
  flex: 1;
  max-width: 50vw;
}
.show {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  position: relative;
  background-color: #BB705AEE;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  transform: translate(2rem,5rem);
  z-index: -999;
}
h1 {
  font-size: 5rem;
}
textarea {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
  max-width: 50vw;
  border: 2px solid #e7ddcb;
  border-radius: 2px;
  padding: 0.5rem;
  line-height: 1.6rem;
}

.usage {
  margin:50px 0 0 100px ;
  flex: 1;
  width: 33%;
}
.about {
  border-top: 2px solid #e7ddcb;
  position: relative;
  margin: 100px 100px;
  width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
}
a {
  text-decoration: none;
}
a:link {color: #e7ddcb;}
a:visited {color: #BB705AEE;}

.self {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 20vw;
  align-items: center;
  text-align: center;
  font-size: 2rem;
}

img {
  width: 50%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1rem;
}

</style>
  