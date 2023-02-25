import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Media from '../Media.vue'

test('render item', () => {
  const item = {
    title: "helloworld",
    link: "https://qq.com",
    pic: "http://w.com"
  }
  const wrapper = mount(Media, {
    propsData: {
      item
    }
  })

  expect(wrapper.find('.media__title').text()).toBe(item.title)
})