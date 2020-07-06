import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { DoctorsContainer } from './component/DoctorsContainer';
import { SearchContainer } from './component/SearchContainer';
import { Paragraph } from './ui/Typography';
import { Loader } from './ui/Loader';
import { PrimaryButton } from './ui/Buttons';
import { Doctor, Task, DoctorTasks } from './component/types';

const Main = () => {
  const [doctors, setDoctors] = useState<DoctorTasks[]>([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [searchDoctorOpen, setSearchDoctorOpen] = useState(false);

  const selectedDoctors = doctors.filter(({ selected }): boolean => !!selected);
  const searchButtonVisible = !searchDoctorOpen;

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const doctorsResults = await axios(
          'https://testapi.io/api/akirayoglu/0/reference/getDoctors'
        );
        const tasksResults = await axios(
          'https://testapi.io/api/akirayoglu/0/tasks/getTasks'
        );
        const doctorsWithTasks = formatDoctorsWithTasks(
          doctorsResults.data,
          tasksResults.data
        );
        setDoctors(doctorsWithTasks);
      } catch (error) {
        console.log(error);
        setError(true);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  // Assign tasks to doctor based on matching tasks' owner id with doctor's id
  const formatDoctorsWithTasks = (
    doctorsResults: Doctor[],
    tasksResults: Task[]
  ) => {
    return doctorsResults.map((doctor: Doctor) => {
      const doctorsTasks = tasksResults
        .filter((task: Task) => doctor.doctor_id === task.owner)
        .sort((taska: any, taskb: any) => taska.priority - taskb.priority);
      return { ...doctor, tasks: doctorsTasks, selected: false };
    });
  };

  const removeDoctor = (doctorId: string) => {
    const unselectDoctor = doctors.map((doctor) => {
      if (doctor.doctor_id === doctorId) {
        return { ...doctor, selected: false };
      } else {
        return doctor;
      }
    });
    setDoctors(unselectDoctor);
  };

  return (
    <Fragment>
      {isLoading && <Loader />}
      {isError && <Paragraph>There was an error fetching data</Paragraph>}
      {!isLoading && !isError && (
        <Fragment>
          <DoctorsContainer
            searchDoctorOpen={searchDoctorOpen}
            selectedDoctors={selectedDoctors}
            removeDoctor={removeDoctor}
          />
          {searchButtonVisible && (
            <PrimaryButton onClick={() => setSearchDoctorOpen(true)}>
              Search Doctors
            </PrimaryButton>
          )}
          {searchDoctorOpen && (
            <SearchContainer
              setDoctors={setDoctors}
              doctors={doctors}
              closeSearch={() => setSearchDoctorOpen(false)}
            />
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export { Main };
