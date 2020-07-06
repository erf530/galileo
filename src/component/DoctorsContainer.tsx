import React from 'react';
import styled from 'styled-components';
import { DoctorTasks } from './types';
import { DoctorCard } from './DoctorCard';
import { Paragraph, Header1 } from '../ui/Typography';

type DoctorContainerProps = {
  selectedDoctors: DoctorTasks[];
  removeDoctor: (doctorId: string) => void;
  searchDoctorOpen: boolean;
};

const StyledContainer = styled.div`
  margin: 1rem;
  font-family: Avenir, sans-serif;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DoctorsContainer = ({
  selectedDoctors,
  removeDoctor,
  searchDoctorOpen,
}: DoctorContainerProps) => {
  const doctorsSelected = selectedDoctors.length > 0;
  const showSearchCTA = !doctorsSelected && !searchDoctorOpen;
  const showSelectCTA = !doctorsSelected && searchDoctorOpen;
  return (
    <StyledContainer>
      <Header1>Your Doctors</Header1>
      {showSearchCTA && (
        <Paragraph>
          Looks like you don't have any doctors selected, search by clicking
          'Search Doctors' below.
        </Paragraph>
      )}
      {showSelectCTA && (
        <Paragraph>Get started by clicking "add" to a doctor below.</Paragraph>
      )}
      <CardContainer>
        {selectedDoctors.map((doctor: DoctorTasks) => (
          <DoctorCard
            key={doctor.doctor_id}
            removeDoctor={removeDoctor}
            doctor={doctor}
          />
        ))}
      </CardContainer>
    </StyledContainer>
  );
};
