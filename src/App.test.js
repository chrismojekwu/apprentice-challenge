import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App/>', () => {
  test('initially renders App component correctly', () => {
    render(<App/>);

    //expect that 4 radio inputs are rendered.
    expect(screen.getAllByRole("radio")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("radio")[1]).toBeInTheDocument();
    expect(screen.getAllByRole("radio")[2]).toBeInTheDocument();
    expect(screen.getAllByRole("radio")[3]).toBeInTheDocument();

    //expect two buttons to be present
    expect(screen.getAllByRole("button")[0]).toBeVisible();
    expect(screen.getAllByRole("button")[1]).toBeVisible();

  });

  
  test('renders "showScore" button', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('button').text()).toEqual('Show Scores');
  });

  test('simulate click and confirm update to "show score" button/state', () => {
    const wrapper = shallow(<App/>);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').text()).toEqual('Hide Scores');
  });
  
});
