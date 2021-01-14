import { Button } from "./Button";
import { shallow } from "enzyme";

describe("Button Atom Component", () => {
  it("renders without crashing", () => {
    const tree = shallow(<Button label="button test" />);
  });
});
