const faculty = [
    "Pascasarjana",
    "Fakultas Filsafat",
    "Fakultas Keguruan dan Ilmu Pendidikan",
    "Fakultas Ekonomi dan Bisnis",
    "Fakultas Pertanian",
    "Fakultas Ilmu Komputer",
    "Fakultas Keperawatan",
    "Akademi Sekretari Manajemen Indonesia Klabat",
];

const prodi = [
    "Magister Manajemen",
    "Magister Teologi",
    "Ilmu Filsafat",
    "Pendidikan Agama",
    "Pendidikan Bahasa Inggris",
    "Pendidikan Luar Sekolah",
    "Akuntansi",
    "Manajemen",
    "Agroteknlogi",
    "Informatika",
    "Sistem Informasi",
    "Profesi Nurse",
    "Keperawatan",
    "Sekretaris(D3)",
]

let studentList = [
    {
        nim: 105011837263,
        nama: "Kevin",
        jk: "Male",
        fakultas: "Fakultas Ilmu Komputer",
        prodi: "Informatika",
    },
    {
        nim: 105011987653,
        nama: "Stivia",
        jk: "Female",
        fakultas: "Fakultas Ilmu Komputer",
        prodi: "Sistem Informasi",
    },
    {
        nim: 105011234758,
        nama: "Ginting",
        jk: "Male",
        fakultas: "Fakultas Ekonomi",
        prodi: "Akuntansi",
    },
    {
        nim: 105011734689,
        nama: "Greysia",
        jk: "Female",
        fakultas: "Fakultas Ekonomi",
        prodi: "Manajemen",
    }
]

// Set pilihan di dropdown faculty: Add Student
for (let i=0;i<faculty.length;i++){
    const opsi = document.createElement('option');
    const text = document.createTextNode(faculty[i]);
    opsi.appendChild(text);
    const drop = document.getElementById('faculty1');
    drop.appendChild(opsi).setAttribute("value", faculty[i]);
}

// Set pilihan di dropdown prodi: Add Student
for (let i=0;i<prodi.length;i++){
    const opsi = document.createElement('option');
    const text = document.createTextNode(prodi[i]);
    opsi.appendChild(text);
    const drop = document.getElementById('program1');
    drop.appendChild(opsi).setAttribute("value", prodi[i]);
}

// Set pilihan di dropdown faculty: Filter Student
for (let i=0;i<faculty.length;i++){
    const opsi = document.createElement('option');
    const text = document.createTextNode(faculty[i]);
    opsi.appendChild(text);
    const drop = document.getElementById('faculty2');
    drop.appendChild(opsi).setAttribute("value", faculty[i]);
}

// Set pilihan di dropdown prodi: Filter Student
for (let i=0;i<prodi.length;i++){
    const opsi = document.createElement('option');
    const text = document.createTextNode(prodi[i]);
    opsi.appendChild(text);
    const drop = document.getElementById('program2');
    drop.appendChild(opsi).setAttribute("value", prodi[i]);
}

// Tampilkan data di Our Student
// const opsi2 = document.createElement('tr');
// const text2 = document.createTextNode('charr');
// opsi2.appendChild(text2);
// const tabbel = document.querySelector('.our-student table');
// tabbel.appendChild(opsi2);

const showww = () => {
    for(let i=0;i<studentList.length;i++){
        let tabbel = document.querySelector('.our-student table');
        
        let roww = tabbel.insertRow(i+1);
        
        let nim = roww.insertCell(0);
        let nama = roww.insertCell(1);
        let jk = roww.insertCell(2);
        let fakultas = roww.insertCell(3);
        let prodi = roww.insertCell(4);
        
        nim.innerHTML = studentList[i].nim;
        nama.innerHTML = studentList[i].nama;
        jk.innerHTML = studentList[i].jk;
        fakultas.innerHTML = studentList[i].fakultas;
        prodi.innerHTML = studentList[i].prodi;
    }
};
showww();



// Fungsi Show/Hide Button di Form Add Student
let showButton = document.querySelector('.add-container button');
let addFormContainer = document.getElementsByClassName('add-form-container');

console.log(addFormContainer);

showButton.onclick = () => {
    if(showButton.innerText == "Show Form Add New Student"){
        addFormContainer[0].style.display = 'block';
        showButton.innerText = "Hide Form Add New Student";
    } else if(showButton.innerText == "Hide Form Add New Student"){
        addFormContainer[0].style.display = 'none';
        showButton.innerText = "Show Form Add New Student";
    }

}

const tambah = document.querySelector('.add-form-container button');
tambah.onclick = () => {
    let fungsi = () => {
        const cekMale = document.getElementById('Male').checked;
        const cekFemale = document.getElementById('Female').checked;
        if(cekMale){
            return "Male";
        } else if(cekFemale){
            return "Female";
        }
    }
    const nim1 = document.getElementById("nim").value;
    const nama1 = document.getElementById("fullname").value;
    const jk1 = fungsi();
    const fakultas1 = document.getElementById("faculty1").value;
    const prodi1 = document.getElementById("program1").value;
    console.log("nim :" + nim1, "nama :" + nama1, "jk :" + jk1,"fak :" + fakultas1,"prodi" + prodi1);
    
    studentList.push(
        {
            nim: nim1,
            nama: nama1,
            jk: jk1,
            fakultas: fakultas1,
            prodi: prodi1,
        }
    )
    
    let tabell = document.querySelector('.our-student table');
    tabell.innerHTML = 
        `<tr>
            <th>Student ID/NIM</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program of Study</th>
            <th>Action</th>
            <tr>
        </tr>`;
    showww();
}

// Filter berdasarkan fakultas

const showbyfak = document.getElementById('fak');

showbyfak.onclick = () => {
    let tabbel = document.querySelector('.our-student table');
    tabbel.innerHTML = 
        `<tr>
            <th>Student ID/NIM</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program of Study</th>
            <th>Action</th>
        </tr>`;
    let j=0;
    for(let i=0;i<studentList.length;i++){
        if(studentList[i].fakultas == document.getElementById('faculty2').value){
            let roww = tabbel.insertRow(j+1);
            
            let nim = roww.insertCell(0);
            let nama = roww.insertCell(1);
            let jk = roww.insertCell(2);
            let fakultas = roww.insertCell(3);
            let prodi = roww.insertCell(4);
            
            nim.innerHTML = studentList[i].nim;
            nama.innerHTML = studentList[i].nama;
            jk.innerHTML = studentList[i].jk;
            fakultas.innerHTML = studentList[i].fakultas;
            prodi.innerHTML = studentList[i].prodi;
        }
    }
};

// Filter berdasarkan prodi

const showbyprodi = document.getElementById('prodi');

showbyprodi.onclick = () => {
    let tabbel = document.querySelector('.our-student table');
    tabbel.innerHTML = 
        `<tr>
            <th>Student ID/NIM</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program of Study</th>
            <th>Action</th>
        </tr>`;
    let j=0;
    for(let i=0;i<studentList.length;i++){
        if(studentList[i].prodi == document.getElementById('program2').value){
            let roww = tabbel.insertRow(j+1);
            
            let nim = roww.insertCell(0);
            let nama = roww.insertCell(1);
            let jk = roww.insertCell(2);
            let fakultas = roww.insertCell(3);
            let prodi = roww.insertCell(4);
            
            nim.innerHTML = studentList[i].nim;
            nama.innerHTML = studentList[i].nama;
            jk.innerHTML = studentList[i].jk;
            fakultas.innerHTML = studentList[i].fakultas;
            prodi.innerHTML = studentList[i].prodi;
        }
    }
};

const showbynama = document.getElementById('cari');

showbynama.onkeyup = () => {
    let tabbel = document.querySelector('.our-student table');
    tabbel.innerHTML = 
        `<tr>
            <th>Student ID/NIM</th>
            <th>Full Name</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program of Study</th>
            <th>Action</th>
        </tr>`;
    let j=0;
    for(let i=0;i<studentList.length;i++){
        if(studentList[i].nama == showbynama.value){
            let roww = tabbel.insertRow(j+1);
            
            let nim = roww.insertCell(0);
            let nama = roww.insertCell(1);
            let jk = roww.insertCell(2);
            let fakultas = roww.insertCell(3);
            let prodi = roww.insertCell(4);
            
            nim.innerHTML = studentList[i].nim;
            nama.innerHTML = studentList[i].nama;
            jk.innerHTML = studentList[i].jk;
            fakultas.innerHTML = studentList[i].fakultas;
            prodi.innerHTML = studentList[i].prodi;
        }
    }
};