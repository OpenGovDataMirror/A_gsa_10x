import React from "react";
import { mount } from "enzyme";
import Page from "./index";
import TestProvider from "test/TestProvider";
import store from "app";
import runAsyncRender from "test/utils/runAsyncRender";
import { Route } from "react-router-dom";

describe("Page", () => {
  describe("default render", () => {
    it("should render", async () => {
      window.scrollTo = jest.fn();
      const wrapper = mount(
        <TestProvider store={store} route={["/test"]}>
          <Route path="/:name" component={Page} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find("h1").text()).toBe("Test title");
    });
    it("should render error on incorrect path name", async () => {
      const wrapper = mount(
        <TestProvider store={store} route={["/error"]}>
          <Route path="/:name" component={Page} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find(".Tx__FourOhFour").length).toBe(1);
    });
    it("should redirect on a known path", async () => {
      const wrapper = mount(
        <TestProvider store={store} route={["/test-redirect"]}>
          <Route path="/:name" component={Page} />
        </TestProvider>
      );
      await runAsyncRender(wrapper);
      expect(wrapper.find("h1").text()).toBe("Test title");
    });
  });
});
