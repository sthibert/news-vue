import Vue from 'vue'
import News from '@/components/News'

describe('NewsList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(News);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.news h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
