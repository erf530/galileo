import React, { useState } from 'react';
import styled from 'styled-components';
import { DoctorTasks } from './types';
import { SearchInput } from '../ui/SearchInput';
import { Card } from '../ui/Card';
import { Paragraph, Header1, Header2 } from '../ui/Typography';
import { SecondaryButton } from '../ui/Buttons';

type DoctorContainerProps = {
  doctors: DoctorTasks[];
  setDoctors: (doctors: DoctorTasks[]) => void;
  closeSearch: () => void;
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border-top: 1px solid grey;
`;

const SelectDoctorsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DoctorResults = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SearchContainer = ({
  doctors,
  setDoctors,
  closeSearch,
}: DoctorContainerProps) => {
  const [searchValue, setSearchValue] = useState('');

  const addDoctor = (doctorId: string) => {
    const selectDoctor = doctors.map((doctor) => {
      if (doctor.doctor_id === doctorId) {
        return { ...doctor, selected: true };
      } else {
        return doctor;
      }
    });
    setDoctors(selectDoctor);
    setSearchValue('');
  };

  // Add debounce with larger data set / hitting the API
  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    return setSearchValue(e.target.value);
  };

  // Pass through searchable fields, check individual fields if string matchse
  // With larger dataset would use search tool Algolia or ElasticSearch as this will get slow
  const searchFields = (fields: string[]) => {
    return fields.some((field) =>
      field.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  const searchedDoctors = doctors.filter((doctor) => {
    const { first_name, last_name, degree, selected } = doctor;
    if (!selected && searchValue.length > 0)
      return searchFields([first_name, last_name, degree]);
    if (!selected && searchValue.length === 0) return doctor;
    return false;
  });

  const hasSearchableDoctors = searchedDoctors.length > 0;
  const hasSearchValue = searchValue.length > 0;
  const showNoSearchResultsMessage = !hasSearchableDoctors && hasSearchValue;
  const showAllDoctorsSelectedMessage =
    !hasSearchableDoctors && !hasSearchValue;

  return (
    <StyledContainer>
      <SelectDoctorsHeader>
        <Header1>Select Doctors</Header1>
        <SecondaryButton onClick={closeSearch}>Done</SecondaryButton>
      </SelectDoctorsHeader>
      <SearchInput
        onChange={onChange}
        label={'Search doctors'}
        placeholder={'Search doctors by name or degree'}
        searchValue={searchValue}
      />
      {showNoSearchResultsMessage && (
        <Paragraph>
          No doctors match your search, try a new search term.
        </Paragraph>
      )}
      {showAllDoctorsSelectedMessage && (
        <Paragraph>All doctors available have been selected.</Paragraph>
      )}
      {hasSearchableDoctors && (
        <DoctorResults>
          {searchedDoctors.map(
            ({ first_name, last_name, degree, doctor_id }: DoctorTasks) => {
              return (
                <Card key={doctor_id}>
                  <Header2>{`${first_name} ${last_name}, ${degree}`}</Header2>
                  <SecondaryButton onClick={() => addDoctor(doctor_id)}>
                    Add
                  </SecondaryButton>
                </Card>
              );
            }
          )}
        </DoctorResults>
      )}
    </StyledContainer>
  );
};
