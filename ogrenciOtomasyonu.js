let studentsDefin = [
    {
        id: 1,
        photo: "https://randomuser.me/api/portraits/men/51.jpg",
        name: "Emirhan Gözüküçük",
        age: 24,
        gender: "Erkek"
    },
    {
        id: 2,
        photo: "https://randomuser.me/api/portraits/men/83.jpg",
        name: "Orhan Ekici",
        age: 34,
        gender: "Atak Helikopteri"
    },
    {
        id: 3,
        photo: "https://randomuser.me/api/portraits/men/52.jpg",
        name: "Nihat Duysak",
        age: 19,
        gender: "Erkek"
    },
    {
        id: 4,
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
        name: "Onur Esin",
        age: 20,
        gender: "Erkek"
    },
    {
        id: 5,
        photo: "https://randomuser.me/api/portraits/women/28.jpg",
        name: "Elif Kaya",
        age: 22,
        gender: "Kadın"
    },
    {
        id: 6,
        photo: "https://randomuser.me/api/portraits/women/7.jpg",
        name: "Selenay Gümüşay",
        age: 23,
        gender: "Kadın"
    },
    {
        id: 7,
        photo: "https://randomuser.me/api/portraits/men/19.jpg",
        name: "Nihat Kahveci",
        age: 40,
        gender: "Erkek"
    },
    {
        id: 8,
        photo: "https://randomuser.me/api/portraits/men/37.jpg",
        name: "Sergen Yalçın",
        age: 40,
        gender: "Erkek"
    },
    {
        id: 9,
        photo: "https://randomuser.me/api/portraits/men/88.jpg",
        name: "Necip Uysal",
        age: 24,
        gender: "Erkek"
    },
    {
        id: 10,
        photo: "https://randomuser.me/api/portraits/men/76.jpg",
        name: "Cenk Tosun",
        age: 30,
        gender: "Erkek"
    },
    {
        id: 11,
        photo: "https://randomuser.me/api/portraits/women/37.jpg",
        name: "Sezen aksu",
        age: 30,
        gender: "Kadın"
    },
    {
        id: 12,
        photo: "https://randomuser.me/api/portraits/women/29.jpg",
        name: "Yıldız Tilbe",
        age: 27,
        gender: "Kadın"
    },
    {
        id: 13,
        photo: "https://randomuser.me/api/portraits/men/82.jpg",
        name: "Olcay Şahan",
        age: 29,
        gender: "Erkek"
    },
    {
        id: 14,
        photo: "https://randomuser.me/api/portraits/women/41.jpg",
        name: "Merve Özbey",
        age: 30,
        gender: "Kadın"
    },
    {
        id: 15,
        photo: "https://randomuser.me/api/portraits/men/74.jpg",
        name: "İbrahim Üzülmez",
        age: 22,
        gender: "Erkek"
    },
    {
        id: 16,
        photo: "https://randomuser.me/api/portraits/men/43.jpg",
        name: "Şifo Mehmet",
        age: 35,
        gender: "Erkek"
    },
    {
        id: 17,
        photo: "https://randomuser.me/api/portraits/women/57.jpg",
        name: "Ebru Gündeş",
        age: 33,
        gender: "Kadın"
    },
    {
        id: 18,
        photo: "https://randomuser.me/api/portraits/women/4.jpg",
        name: "İrem derici",
        age: 27,
        gender: "Kadın"
    },
    {
        id: 19,
        photo: "https://randomuser.me/api/portraits/men/25.jpg",
        name: "Rahaf Onbashi",
        age: 26,
        gender: "Erkek"
    },
    {
        id: 20,
        photo: "https://randomuser.me/api/portraits/women/92.jpg",
        name: "Ayşe Shaikh",
        age: 23,
        gender: "Kadın"
    },
];
let students = [...studentsDefin];


let lsStudents = localStorage.getItem('students');
if(lsStudents) {
    students = JSON.parse(lsStudents)
};

function saveStudents() {
    localStorage.setItem('students', JSON.stringify(students));

}

let lastStudentId = 20;
if(localStorage.lastStudentId) {
    lastStudentId = Number(localStorage.lastStudentId);
}

function generateStudentId() {
    lastStudentId += 1;
    localStorage.lastStudentId = lastStudentId;
    return lastStudentId;
}

const myStudents = document.querySelector('#myStudents');
function renderStudents(newStudent) {
    myStudents.innerHTML = '';
    for(let newStudent of students) {
        
    
        let tableRow = document.createElement('tr');
        tableRow.innerHTML = `
        <td>${newStudent.id}</td>
        <td><img src="${newStudent.photo}"/></td>
        <td>${newStudent.name}</td>
        <td>${newStudent.age}</td>
        <td>${newStudent.gender}</td>
        `;
        document.getElementById('myStudents').appendChild(tableRow);
    }
}
renderStudents();

newStudentBtn.addEventListener('click', addStudent);
function addStudent() {
    let newStudent = {};
    generateStudentId();
    newStudent.id = lastStudentId;
    newStudent.photo = prompt('Öğrencinin fotoğraf linkini giriniz');
    newStudent.name = prompt('Öğrencinin ismi nedir?');
    newStudent.age = parseInt(prompt('Öğrencinin yaşını giriniz.'));
    newStudent.gender = prompt('Öğrencinin cinsiyetini giriniz.');
    // newStudent.ID = generateStudentId();
    
    students.push(newStudent);

    saveStudents();
    renderStudents();
};

deleteAllBtn.addEventListener('click', deleteAllStudent);
function deleteAllStudent() {
    localStorage.clear();
    myStudents.innerHTML = '';
}

deleteSelectBtn.addEventListener('click', askId);

function findStudentIndex(studentId) {
    for(let i = 0; i < students.length; i++) {
        if(students[i].id === studentId) {
            return i;
        }
    }

    return -1;
}

function removeStudent(studentId) {

    const studentIndex = findStudentIndex(studentId);
    if(studentIndex > -1) {
        students.splice(studentIndex, 1);
        saveStudents();
    } else {

    }
    renderStudents();
}

function askId(studentId) {
    studentId = Number(prompt('Silmek istediğin öğrenci id numarasını giriniz.'))
    removeStudent(studentId);
};
