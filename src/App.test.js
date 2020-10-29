import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App/>', () => {
  test('initially renders App component correctly', () => {
    render(<App/>);

    //expect that atleast 3 radio inputs are rendered.
    expect(screen.getAllByRole("radio")[0]).toBeInTheDocument();
    expect(screen.getAllByRole("radio")[1]).toBeInTheDocument();
    expect(screen.getAllByRole("radio")[2]).toBeInTheDocument();
    //considering it renders the first question which I know has 4 answers im adding a 4th
    expect(screen.getAllByRole("radio")[3]).toBeInTheDocument();

    //expect two buttons to be present
    expect(screen.getAllByRole("button")[0]).toBeVisible();
    expect(screen.getAllByRole("button")[1]).toBeVisible();;

  });

  // simulate show scores button click and confirm the change in state
  test('updates "showScore" state', () => {
    const wrapper = shallow(<App/>);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').text()).toEqual('Hide Scores')
  });
  
});
