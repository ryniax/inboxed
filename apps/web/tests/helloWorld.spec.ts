import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Hello world test', () => {
  it('Tests work fine', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.find('span').text()).equal('Socket connected with ID:');
  });
});
