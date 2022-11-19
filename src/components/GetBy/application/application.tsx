import React from 'react'

function Application() {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id={'name'} value={'Rasoul'} />
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name={'bio'} id={'bio'} />
        </div>

        <div>
          <label htmlFor={'job-location'}>Job location</label>
          <select name="job-location" id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
          </select>
        </div>

        <div>
          <label>
            <input type="checkbox" id={'terms'} />I agree to the terms and
            conditions.
          </label>
        </div>

        <button disabled>Submit</button>
      </form>
    </>
  )
}

export default Application
