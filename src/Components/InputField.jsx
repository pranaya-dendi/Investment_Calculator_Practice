export default function InputField({ onChange, useInput }) {
  //   console.log(useInput, "dfgrty");
  return (
    <section id="user-input">
      <div className="input-group ">
        <p>
          <label>Inital Investment</label>
          <input
            type="number"
            onChange={(event) =>
              onChange("initialInvestment", event.target.value)
            }
            value={useInput.initialInvestment}
            required
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            onChange={(event) =>
              onChange("annualInvestment", event.target.value)
            }
            value={useInput.annualInvestment}
            required
          ></input>
        </p>
      </div>
      <div className="input-group ">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            value={useInput.expectedReturn}
            required
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            onChange={(event) => onChange("duration", event.target.value)}
            value={useInput.duration}
            required
          ></input>
        </p>
      </div>
    </section>
  );
}
