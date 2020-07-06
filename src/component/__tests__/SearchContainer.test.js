import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchContainer } from '../SearchContainer';

let props;
beforeEach(() => {
  props = {
    doctors: [
      {
        doctor_id: 'doctor1',
        first_name: 'Martha',
        last_name: 'Powell',
        dob: '04/08/1966',
        degree: 'MD',
        selected: true,
        tasks: [
          { task_id: 'task1', owner: 'doctor1', priority: '1' },
          { task_id: 'task2', owner: 'doctor1', priority: '2' },
        ],
      },
      {
        doctor_id: 'doctor2',
        first_name: 'Jessica',
        last_name: 'Williamson',
        dob: '03/07/1977',
        degree: 'MD',
        selected: false,
        tasks: [
          { task_id: 'task3', owner: 'doctor2', priority: '1' },
          { task_id: 'task4', owner: 'doctor2', priority: '2' },
          { task_id: 'task5', owner: 'doctor2', priority: '3' },
        ],
      },
    ],
    setDoctors: jest.fn(),
    closeSearch: jest.fn(),
  };
});

describe('SearchContainer', () => {
  it('renders unselected doctors', () => {
    const { queryByText, getByText } = render(<SearchContainer {...props} />);
    props.doctors.map(({ first_name, last_name, degree, selected }) => {
      if (!selected) {
        let name = getByText(`${first_name} ${last_name}, ${degree}`);
        expect(name).toBeInTheDocument();
      } else {
        let name = queryByText(`${first_name} ${last_name}, ${degree}`);
        expect(name).not.toBeInTheDocument();
      }
    });
  });
  it('searches doctor by correct search term', () => {
    const { getByLabelText, getByText } = render(
      <SearchContainer {...props} />
    );
    const searchInput = getByLabelText('Search doctors');
    fireEvent.change(searchInput, { target: { value: 'Jessica' } });
    let name = getByText(`Jessica Williamson, MD`);
    expect(name).toBeInTheDocument();
  });
  it('renders message when no doctors match search term', () => {
    const { getByLabelText, getByText, queryByText, debug } = render(
      <SearchContainer {...props} />
    );
    const searchInput = getByLabelText('Search doctors');
    fireEvent.change(searchInput, { target: { value: 'Cool guy' } });
    let message = getByText(
      `No doctors match your search, try a new search term.`
    );
    let name = queryByText(`Jessica Williamson, MD`);
    expect(name).not.toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
  it('clicking add doctor button fires event', () => {
    const { getByText } = render(<SearchContainer {...props} />);
    const addButton = getByText('Add');
    expect(addButton).toBeInTheDocument();
    fireEvent.click(addButton);
    expect(props.setDoctors).toHaveBeenCalled();
  });
  it('clicking done  button fires event', () => {
    const { getByText } = render(<SearchContainer {...props} />);
    const doneButton = getByText('Done');
    expect(doneButton).toBeInTheDocument();
    fireEvent.click(doneButton);
    expect(props.closeSearch).toHaveBeenCalled();
  });
});
