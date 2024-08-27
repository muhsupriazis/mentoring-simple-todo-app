// init element yang dibutuhkan
const input = document.getElementById('input-aktifitas');
const buttonTambah = document.getElementById('tambah'); 
const tampil = document.getElementById('tampil');

// ini database array
let data = [];

// ini function untuk menambahkan data
const functionAddData = (input) => {
  data.push(input);
  return data;
}

// ini function untuk menghapus data
const functionDeleteData = (item) => {
  const dataDeleted = data.filter((value) => value !== item);
  data = dataDeleted
  return dataDeleted;
}

// ini function untuk menampilkan data
const functionShowData = (data) => {
  tampil.innerHTML = '';
  data.forEach((item) => {
    const li = document.createElement('li');
    const span = document.createElement('span')
    const buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = 'Delete';
    buttonDelete.className = 'bg-red-500 text-white p-1 rounded';
    span.innerHTML = item;
    // ini event ketika button delete di klik
    buttonDelete.onclick = () => {
      const dataDeleted = functionDeleteData(item);
      // tampilkan data yang sudah dihapus
      functionShowData(dataDeleted);
    }
    li.appendChild(span);
    li.appendChild(buttonDelete);
    tampil.appendChild(li);
  });
}

// ini event ketika button tambah di klik
buttonTambah.addEventListener('click', () => {
  const inputText = input.value;
  const dataAdded = functionAddData(inputText);
  functionShowData(dataAdded);
  input.value = '';
})