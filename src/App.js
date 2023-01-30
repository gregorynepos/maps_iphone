import "./styles.css";

export default function App() {
  const phones = [
    { name: "iPhone XR", priceHT: 900 },
    { name: "iPhone X", priceHT: 700 },
    { name: "iPhone 8 plus", priceHT: 200 }
  ];
  const Name = () => {
    for (let i = 0; i < phones.length; i++) {
      document.write(phones[i].name, phones[i].priceHT, "<br>");
    }
  };
  return (
    <div className="App">
      {phones.map((tab, i) => {
        return (
          <li key={i}>
            {tab.name} : {tab.priceHT * 0.2}
          </li>
        );
      })}
      <button onClick={Name}>click</button>
    </div>
  );
}
