import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import Drawer from "./Drawer.vue";

describe("Drawer.vue", () => {
  it("renders the label prop when open", () => {
    const label = "Test Label";
    const wrapper = shallowMount(Drawer, {
      props: { label },
      setup() {
        return { isOpen: true };
      },
    });
    expect(wrapper.text()).toContain(label);
  });

  it("shows drawer when isOpen is true", () => {
    const wrapper = shallowMount(Drawer, {
      props: { label: "Test" },
      setup() {
        return { isOpen: true };
      },
    });
    expect(wrapper.find("aside").exists()).toBe(true);
  });

  it("hides drawer when isOpen is false", () => {
    const wrapper = shallowMount(Drawer, {
      props: { label: "Test" },
      setup() {
        return { isOpen: false };
      },
    });
    expect(wrapper.find("aside").exists()).toBe(false);
  });

  it("closes the drawer when close button is clicked", async () => {
    const wrapper = shallowMount(Drawer, {
      props: { label: "Test" },
    });
    wrapper.vm.isOpen = true;
    await wrapper.vm.$forceUpdate();
    await wrapper.find("span.cursor-pointer").trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isOpen).toBe(false);
  });
});
