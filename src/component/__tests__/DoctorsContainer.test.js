import React from 'react';
import { render } from '@testing-library/react';
import { DoctorsContainer } from '../DoctorsContainer';

let props;

beforeEach(() => {
  props = {
    selectedDoctors: [
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
        selected: true,
        tasks: [
          { task_id: 'task3', owner: 'doctor2', priority: '1' },
          { task_id: 'task4', owner: 'doctor2', priority: '2' },
          { task_id: 'task5', owner: 'doctor2', priority: '3' },
        ],
      },
    ],
    removeDoctor: jest.fn(),
    searchDoctorOpen: false,
  };
});

describe('DoctorsContainer', () => {
  it('renders selected doctors', () => {
    const { getByText } = render(<DoctorsContainer {...props} />);

    props.selectedDoctors.map(({ first_name, last_name }) => {
      let name = getByText(`${first_name} ${last_name}`);
      expect(name).toBeInTheDocument();
    });
  });
});
