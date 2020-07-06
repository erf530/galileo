import React from 'react';
import styled from 'styled-components';
import { Task, DoctorTasks } from './types';
import { Card } from '../ui/Card';
import { Header2 } from '../ui/Typography';
import { CloseButton } from '../ui/CloseButton';

const StyledTaskList = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: unset;
  li:last-child {
    border-bottom: none;
  }
`;

const StyledTask = styled.li`
  display: flex;
  width: 60%;
  margin-top: 1rem;
  margin-left: -1px;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #d5dfec;
`;

type Priority = {
  priority?: string;
};

const Priority = styled.div<Priority>`
  display: inline-block;
  position: relative;
  width: 10px;
  height: 10px;
  margin-right: 1rem;
  border-radius: 100%;
  background-color: ${({ priority }) => {
    if (priority === '1') return `red`;
    if (priority === '2') return `yellow`;
    if (priority === '3') return `green`;
  }}}
`;

export type DoctorCardProps = {
  doctor: DoctorTasks;
  removeDoctor: (doctorId: string) => void;
};

export const DoctorCard = ({ doctor, removeDoctor }: DoctorCardProps) => {
  const { first_name, last_name, tasks, doctor_id } = doctor;
  return (
    <Card>
      <Header2>{`${first_name} ${last_name}`}</Header2>
      <CloseButton
        label="Remove doctor"
        onClick={() => removeDoctor(doctor_id)}
      />
      <StyledTaskList>
        {tasks.map(({ task_id, priority }: Task) => {
          return (
            <StyledTask key={task_id}>
              <Priority priority={priority} />
              <div>{task_id}</div>
            </StyledTask>
          );
        })}
      </StyledTaskList>
    </Card>
  );
};
