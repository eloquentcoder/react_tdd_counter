import { shallow } from 'enzyme';
import Counter from './Counter';


describe('Counter testing', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter />)
  });

  test('renders the title of counter', () => {
    expect(wrapper.find("h1").text()).toContain('This is a counter app');
  });

  test('renders the button text', () => {
      expect(wrapper.find("#increment-btn").text()).toBe("Increment");
  });

  test('renders the counter state value in a div', () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  // test("clicks on button and decrements the value of counter", () => {
  //     wrapper.find("#decrement-btn").simulate("click");
  //     expect(wrapper.find("#counter-value").text()).toBe("0");
  // }); 

  test("clicks on button and decrements the value of counter but never gets 0", () => {

    wrapper.find("#increment-btn").simulate("click");
    wrapper.find("#decrement-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("0");
}); 
  
  test("clicks on button and increments the value of counter", () => {
    wrapper.find("#increment-btn").simulate("click");
    expect(wrapper.find("#counter-value").text()).toBe("1");
}); 

});