import React, { useState } from "react";

function UserInput({ userInput, onChange}) {

  return (
    <section id="user-input">
      <div className="user-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={userInput.initialInvestment} onChange={e=>onChange('initialInvestment', e.target.value)} ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={userInput.annualInvestment} onChange={e=>onChange('annualInvestment', e.target.value)} ></input>
        </p>
        <p>
          <label>Expected Return</label>
          <input type="number" required value={userInput.expectedReturn} onChange={e=>onChange('expectedReturn', e.target.value)} ></input>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={userInput.duration} onChange={e=>onChange('duration', e.target.value)} ></input>
        </p>
      </div>
    </section>
  );
}

export default UserInput;
