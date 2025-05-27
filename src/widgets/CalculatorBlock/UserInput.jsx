
function UserInput({ userInput, onChange, styles}) {

  return (
    <section id={styles["user-input"]}>
      <div className={styles["user-group"]}>
        <p>
          <label htmlFor="initialPrice">initialPrice</label>
          <input type="number" name="initialPrice" id="initialPrice" required value={userInput.initialPrice} onChange={e=>onChange('initialPrice', e.target.value)}></input>
        </p>
        <p>
          <label htmlFor="interestRate">interestRate</label>
          <input type="number" name="interestRate" id="interestRate" required value={userInput.interestRate} onChange={e=>onChange('interestRate', e.target.value)}></input>
        </p>
        <p>
          <label htmlFor="Week">Week</label>
          <input type="number" name="Week" id="Week" required value={userInput.duration} onChange={e=>onChange('duration', e.target.value)}></input>
        </p>
      </div>
    </section>
  );
}

export default UserInput;
