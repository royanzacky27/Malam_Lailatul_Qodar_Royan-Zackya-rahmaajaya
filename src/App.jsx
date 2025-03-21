import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const max = 1000;

  const handleAdd = () => {
    if (count < max) setCount(count + 1);
  };

  const handleReset = () => setCount(0);

  return (
    <div className="App">
      {/* Header */}
      <div className="header">
        <h1>Doa Malam Lailatul Qodar</h1>
        <p>{count}</p>
      </div>

      {/* Keterangan & Doa */}
      <div className="content">
        <p>Disunahkan membaca sampai 1000x setiap malam</p>
        <p className="doa">
          اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
        </p>
      </div>

      {/* Tombol Tambah */}
      <div className="button-container">
        <button onClick={handleAdd} className="big-round-button">
          Tambah 1
        </button>
      </div>

      {/* Reset Button */}
      <div className="reset-button-container">
        <button onClick={handleReset} className="small-button reset-button">
          Reset
        </button>
      </div>

      {/* Footer Pesan */}
      <footer className="footer">
        <p>Kerjakan karena Allah. Mugo-mugo Allah paring barokah 🤲</p>
        <p>
          By
          <a
            // href="https://www.instagram.com/royanzacky/"
            target="_blank"
            rel="noreferrer"
          >
            royanzacky
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}

export default App;
