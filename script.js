function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Initial contacts data
// "abcd" > "Abcd" && "aBcD" < "abCD";

let contacts = [
  {
    name: "Maxwell Wright",
    phone: "019171916495",
    email: "contact1@cctb.com",
  },

  {
    name: "Raja Villarreal",
    phone: "0863982895",
    email: "contact2@cctb.com",
  },
  {
    name: "Helen Richards",
    phone: "080031111",
    email: "contact3@cctb.edu",
  },
];

function showInicialContacts() {
  let contactsList = document.getElementById("id-fullcontactinformation");
  contactsList.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    let p = document.createElement("p");
    p.textContent = `Name: ${contacts[i].name} | Phone: ${contacts[i].phone} | Email: ${contacts[i].email}`;
    contactsList.appendChild(p);
  }

}

function doIntervals() {
  setInterval(() => console.log("Total Elements: " + contacts.length), 1000)
}
showInicialContacts();
doIntervals();
setInterval(changeBackgroundColor, 3000);

function funAddNewButton() {
  let inputName = prompt("Please enter name:");
  let inputPhone = prompt("Please enter phone:");
  let inputEmail = prompt("Please enter email:");

  contacts.push(
    {
      "name": inputName,
      "phone": inputPhone,
      "email": inputEmail
    }
  )
}

function funUpdateContactsButton() {
  setTimeout(showInicialContacts, 5000)
}

function funFindByNameButton() {
  let inputName = prompt("Please enter name to search:");
  findRecursive(0, inputName)
}

function findRecursive(index, nome) {
  if(index > contacts.length - 1) {
    alert("Contact not found")
    return
  }
  else if(contacts[index].name == nome) {
    alert("Contact found!")
    return
  }
  else return findRecursive(index + 1, nome);
}