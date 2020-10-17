import React from 'react';
import App from './App';
import AddWidgetModal from './components/AddWidgetModal';
import Select from './components/helperComponents/Select';
import Input from './components/helperComponents/Input';
import { shallow } from 'enzyme';

const getShallowComponent = (Component, props = {}) => {
  const wrapper = shallow(<Component {...props} />);
  return wrapper;
};

describe('Testing widgets wizerd', () => {
  let component;

  beforeAll(() => {
    component = getShallowComponent(App);
  });

  describe('main page', () => {
    it('should render correctly', () => {
      expect(component).toHaveLength(1);
    });

    it('should show correct heading', () => {
      const heading = component.find('h1').text();
      expect(heading).toEqual('Seven Senders Widgets');
    });
  });

  describe('add widget button click', () => {
    beforeAll(() => {
      component.find('.add-btn').simulate('click');
    });
  
    it('opens AddWidgetModal', () => {
      expect(component.find(AddWidgetModal)).toHaveLength(1);
    });

    describe('AddWidgetModal', () => {
      let addWidgetComp, selector;
      const DATA = 'dumy';
      const onAddWidget = () => {};

      beforeAll(() => {
        addWidgetComp = getShallowComponent(AddWidgetModal, { onAddWidget });
        selector = addWidgetComp.find(Select).dive().find('select[name="select"]');
      });

      const onSelectAction = (value = '') => {
        selector.simulate('change', {
          target: {
            value,
          },
        });
      };

      it('renders language selector', () => {
        expect(addWidgetComp.find(Select)).toHaveLength(1);
        expect(selector).toHaveLength(1);
      });

      it('no language selection gives validation error', () => {
        onSelectAction();
        addWidgetComp.find('button').at(0).simulate("click");

        expect(addWidgetComp.find('.err-warning')).toHaveLength(1);
        expect(addWidgetComp.find(Input)).toHaveLength(0);
      });

      it('no validation error and name input field available if language is selected', () => {
        onSelectAction(DATA);
        addWidgetComp.find('button').at(0).simulate("click");

        expect(addWidgetComp.find('.err-warning')).toHaveLength(0);
        expect(addWidgetComp.find(Input)).toHaveLength(1);
      });
    });
  });
});
