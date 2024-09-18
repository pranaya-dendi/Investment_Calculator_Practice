import investment from "../assets/investment-calculator-logo.png";

export default function Header({ useInput }) {
  return (
    <header id="header">
      <img src={investment} alt="hand drawn image" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
