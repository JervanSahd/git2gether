import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
// import { useQuery } from '@apollo/client';

import { QUERY_INPERSON } from '../../utils/queries';
import { ADD_INPERSON } from '../../utils/mutuation';
// import { deleteInPerson } from '../../utils/mutations';
// import { updateInPerson } from '../../utils/mutations';

const InPersonForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    location: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    description: '',
    plannerName: '',
    email: '',
    phone: '',
    linkedIn: '',
  });

  const [createInPerson, { error }] = useMutation(ADD_INPERSON, {
    update(cache, { data: { createInPerson } }) {
      try {
        const { InPersonAll } = cache.readQuery({ query: QUERY_INPERSON });

        cache.writeQuery({
          query: QUERY_INPERSON,
          data: { readIP: [createInPerson, ...InPersonAll] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createInPerson({
        variables: { ...formState },
      });

      setFormState({
        name: '',
        location: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
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
    } else if (name === 'location') {
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
      {/* <h3>In Person Event</h3> */}

      <form onSubmit={handleFormSubmit}>
        <div id="questions">
          <div id='aboutEvent'>
            <h3>About Event</h3>
            <div id="breakLine"></div>

            {/* event name */}
            <div id='inputLine'>
              <div id='inputTitle'>
                <h3>*</h3>
                <h4>Event Name</h4>
              </div>
              <input
                name="name"
                value={formState.name}
                id='inputBox'
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></input>
            </div>

            {/* event description */}
            <div id='inputLine'>
              <div id='inputTitle'>
                <h3>*</h3>
                <h4>Event Description</h4>
              </div>
              <textarea
                name="description"
                value={formState.description}
                maxLength='300'
                id='inputBox'
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>



          {/* date and time */}
          <div id='aboutEvent'>
            <h3>Date and Time</h3>
            <div id="breakLine"></div>

            <div id='smallBoxes'>
              {/* start date */}
              <div id='inputLine'>
                <div id='inputTitle'>
                  <h3>*</h3>
                  <h4>Start Date</h4>
                </div>
                <input
                  name="startDate"
                  placeholder="June 06"
                  value={formState.startDate}
                  id="inputBox"
                  onChange={handleChange}
                />
              </div>

              {/* end date */}
              <div id='inputLine'>
                <div id='inputTitle'>

                  <h4>End Date</h4>
                </div>
                <input
                  name="endDate"
                  placeholder="Leave blank unless more than one day."
                  value={formState.endDate}
                  id="inputBox"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div id='smallBoxes'>
              {/* start time */}
              <div id='inputLine'>
                <div id='inputTitle'>
                  <h3>*</h3>
                  <h4>Start Time</h4>
                </div>
                <input
                  name="startTime"
                  placeholder="12:00pm"
                  value={formState.startTime}
                  id="inputBox"
                  onChange={handleChange}
                />
              </div>

              {/* end time */}
              <div id='inputLine'>
                <div id='inputTitle'>
                  <h4>End Time</h4>
                </div>
                <input
                  name="endTime"
                  placeholder="12:00pm"
                  value={formState.endTime}
                  id="inputBox"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>


          {/* location */}
          <div id='aboutEvent'>
            <h3>Location</h3>
            <div id="breakLine"></div>

            {/* address */}
            <div id='inputLine'>
              <div id='inputTitle'>
                <h3>*</h3>
                <h4>Address</h4>
              </div>
              <input
                name="location"
                placeholder='# Street, City, State Zip'
                value={formState.location}
                id='inputBox'
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></input>
            </div>
          </div>


          {/* Contact */}
          <div id='aboutEvent'>
            <h3>Contact Information</h3>
            <div id="breakLine"></div>

            {/* name */}
            <div id='inputLine'>
              <div id='inputTitle'>
                <h3>*</h3>
                <h4>Name</h4>
              </div>
              <input
                name="plannerName"
                value={formState.plannerName}
                id='inputBox'
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></input>
            </div>

            {/* email */}
            <div id='inputLine'>
              <div id='inputTitle'>
                <h3>*</h3>
                <h4>Email</h4>
              </div>
              <input
                name="email"
                value={formState.email}
                id='inputBox'
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></input>
            </div>

            {/* phone */}
            <div id='inputLine'>
              <div id='inputTitle'>
                <h4>Phone</h4>
              </div>
              <input
                name="phone"
                value={formState.phone}
                id='inputBox'
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></input>
            </div>

            {/* linkedin */}
            <div id='inputLine'>
              <div id='inputTitle'>
                <h4>LinkedIn</h4>
              </div>
              <input
                name="linkedIn"
                placeholder='https://www.linkedin.com/in/jane-doe-1/'
                value={formState.linkedIn}
                id='inputBox'
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></input>
            </div>
          </div>
        </div>

        <div id='buttonHolder'>
          <button id='submit' type="submit">
            Submit
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

export default InPersonForm;
