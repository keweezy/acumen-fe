import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import AnalyticsCard from './AnalyticsCard.vue';
import SkeletonLoader from '../SkeletonLoader.vue';

describe('AnalyticsCard.vue', () => {

  it('shows skeleton loader when loading is true', () => {
    const wrapper = shallowMount(AnalyticsCard, {
      props: { loading: true, title: '', value: '' }
    });

    expect(wrapper.findComponent(SkeletonLoader).exists()).to.be.true;
    expect(wrapper.find('.flex.flex-col').exists()).to.be.false;
  });

  it('shows content when loading is false', () => {
    const wrapper = shallowMount(AnalyticsCard, {
      props: { loading: false, title: 'Test Title', value: 'Test Value' }
    });

    expect(wrapper.findComponent(SkeletonLoader).exists()).to.be.false;
    expect(wrapper.find('.flex.flex-col').exists()).to.be.true;
    expect(wrapper.find('.text-xs.uppercase').text()).to.equal('Test Title');
    expect(wrapper.find('.text-2xl.font-bold').text()).to.equal('Test Value');
  });
});
