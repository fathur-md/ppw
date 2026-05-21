import BankAccount from "./models/BankAccount.js";
import Student from "./models/Student.js";

const mhs1 = new Student("Budi", 21, "221110001", "Informatika");

const accountMhs = new BankAccount(mhs1.name);
accountMhs.deposit(2000000);
accountMhs.withdraw(500000);

function App() {
  return /*html*/ `
    <div class="app-container">
      <h2>Data Mahasiswa</h2>
      <div class="app-card">
        <div class="app-row">
          <span class="label">Nama</span>
          <span class="value">${mhs1.name}</span>
        </div>
        <div class="app-row">
          <span class="label">Umur</span>
          <span class="value">${mhs1.age}</span>
        </div>
        <div class="app-row">
          <span class="label">NIM</span>
          <span class="value">${mhs1.nim}</span>
        </div>
        <div class="app-row">
          <span class="label">Jurusan</span>
          <span class="value">${mhs1.major}</span>
        </div>
        <div class="app-row">
          <span class="label">Saldo</span>
          <span class="value">Rp. ${accountMhs.getBalance().toLocaleString("id-ID")}</span>
        </div>
      </div>
    </div>
  `;
}

function render() {
  const root = document.getElementById("app");
  root.innerHTML = App();
}

render();
