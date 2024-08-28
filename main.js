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

// ini function untuk mengedite data
const functionEditData = (item, newValue) => {
  const dataEdited = data.map((value) => value === item ? newValue : value);
  data = dataEdited;
  return dataEdited;
}

// ini function untuk menampilkan data
const functionShowData = (data) => {
  tampil.innerHTML = '';
  data.forEach((item) => {
    const li = document.createElement('li');
    const span = document.createElement('span')
    const buttonDelete = document.createElement('button');
    const buttonEdit = document.createElement('button-edit');
    buttonDelete.innerHTML = 'Delete';
    buttonEdit.innerHTML = 'Edit';
    buttonDelete.className = 'bg-red-500 text-white p-1 rounded';
    buttonEdit.className = 'bg-blue-500 text-white p-1 rounded';
    span.innerHTML = item;
    buttonEdit.onclick = () => {
      input.value = item;
      buttonTambah.innerHTML = 'simpan';
      buttonTambah.value = item;
    }
    // ini event ketika button delete di klik
    buttonDelete.onclick = () => {
      const dataDeleted = functionDeleteData(item);
      // tampilkan data yang sudah dihapus
      functionShowData(dataDeleted);
    }
    li.appendChild(span);
    li.appendChild(buttonDelete);
    li.appendChild(buttonEdit)
    tampil.appendChild(li);
  });
}

// ini event ketika button tambah di klik
buttonTambah.addEventListener('click', () => {
  if(buttonTambah.innerHTML == 'tambahkan') {
    const inputText = input.value;
    const dataAdded = functionAddData(inputText);
    functionShowData(dataAdded);
    input.value = '';
  } else {
    const inputText = input.value;
    const dataEdited = functionEditData(buttonTambah.value, inputText);
    functionShowData(dataEdited);
    input.value = '';
    buttonTambah.innerHTML = 'tambahkan';
  }
})