import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DoctorCard } from '../DoctorCard';

let props;

beforeEach(() => {
  props = {
    doctor: {
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
    removeDoctor: jest.fn(),
  };
});

describe('DoctorCard', () => {
  it('renders the name of doctor', () => {
    const { getByText } = render(<DoctorCard {...props} />);
    let name = getByText('Martha Powell');
    expect(name).toBeInTheDocument();
  });
  it('renderse tasks of doctor', () => {
    const { getByText } = render(<DoctorCard {...props} />);
    props.doctor.tasks.map((task) => {
      let taskId = getByText(task.task_id);
      expect(taskId).toBeInTheDocument();
    });
  });
  it('handles remove doctor', () => {
    const { getByLabelText } = render(<DoctorCard {...props} />);
    let closeButton = getByLabelText('Remove doctor');
    // let closeButton = getByElement('span');
    expect(closeButton).toBeInTheDocument();
    fireEvent.click(closeButton);
    expect(props.removeDoctor).toHaveBeenCalledTimes(1);
  });
});
