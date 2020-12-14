import * as React from "react";
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

import Hello from "../../src/components/Hello";

describe("Hello Component", () => {
  it("should create a container", () => {
    const container = enzyme.shallow(
      <Hello text="test"/>);

    expect(container.length).toBeGreaterThan(0);
    expect(container.text()).toBe("Hello this is a test");
  });
});
