import JuDou from './components/JuDou.vue'

export {JuDou}

const components = [JuDou];
const install = function(App, options) {
  components.forEach((component) => {
    App.component(component.name, component);
  });
};

export default {install}