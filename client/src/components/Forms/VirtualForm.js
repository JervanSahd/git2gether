import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { useQuery } from '@apollo/client';

import { GET_virtual } from '../../utils/queries';
import { createVirtual } from '../../utils/mutations';
// import { deleteInPerson } from '../../utils/mutations';
// import { updateInPerson } from '../../utils/mutations';

const VirtualForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    streamLink: '',
    startDate: '',
    endDate: '',
    description: '',
    plannerName: '',
    email: '',
    phone: '',
    linkedIn: '',
  });

  const [formVirt,{error}] = useMutation(createVirtual, {
    update(cache, { data: { formVirt } }) {
      try {
        const { readVirt } = cache.readQuery({ query: GET_virtual });

        cache.writeQuery({
          query: GET_virtual,
          data: { readVirt: [formVirt, ...readVirt] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await formVirt({
        variables: { ...formState },
      });

      setFormState({
        name: '',
        streamLink: '',
        startDate: '',
        endDate: '',
        description: '',
        plannerName: '',
        email: '',
        phone: '',
        linkedIn: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'streamLink') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'startDate') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'endDate') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'startTime') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'endTime') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'description') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'plannerName') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'email') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'phone') {
      setFormState({ ...formState, [name]: value });
    } else if (name === 'linkedIn') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>In Person Event</h3>

      <form
        className="flex-row justify-center justify-space-between-md align-center"
        onSubmit={handleFormSubmit}
      >
        <div className="col-12">
          <textarea
            name="name"
            placeholder="Event Name*"
            value={formState.name}
            className="form-input w-100"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="streamLink"
            placeholder="Virtual Stream Link*"
            value={formState.location}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="startDate"
            placeholder="Start Date*"
            value={formState.startDate}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="endDate"
            placeholder="End Date"
            value={formState.endDate}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="startTime"
            placeholder="Start Time*"
            value={formState.location}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="endTime"
            placeholder="End Time"
            value={formState.endTime}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="description"
            placeholder="Event Description*"
            value={formState.description}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="plannerName"
            placeholder="Event Planner Name*"
            value={formState.plannerName}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="email"
            placeholder="Planner Email*"
            value={formState.email}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="phone"
            placeholder="Planner Phone Number"
            value={formState.phone}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-9">
          <input
            name="linkedIn"
            placeholder="Planner LinkedIn"
            value={formState.linkedIn}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>
        <div className="col-12 col-lg-3">
          <button className="btn btn-primary btn-block py-3" type="submit">
            Create In-Person Event
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default VirtualForm;
