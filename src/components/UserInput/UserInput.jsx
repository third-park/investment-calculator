function UserInput({ userInput, onChange}) {

  return (
    <section id="user-input">
      <div className="user-group">
        <p>
          <label>initialPrice</label>
          <input type="number" required value={userInput.initialPrice} onChange={e=>onChange('initialPrice', e.target.value)} ></input>
        </p>
        <p>
          <label>interestRate</label>
          <input type="number" required value={userInput.interestRate} onChange={e=>onChange('interestRate', e.target.value)} ></input>
        </p>
        <p>
          <label>Week</label>
          <input type="number" required value={userInput.duration} onChange={e=>onChange('duration', e.target.value)} ></input>
        </p>
      </div>
    </section>
  );
}

export default UserInput;
