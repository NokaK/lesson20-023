const app = document.getElementById("app");

const text = "Hello World!";
app.textContent = "Hello World!";

app.innerHTML = `<div>
    <h1>${text}</h1>
</div>`;

let students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 21 },
  { name: "Carol", age: 22 },
  { name: "Dave", age: 23 },
  { name: "Eve", age: 24 },
];

let data = {
  success: true,
  persons: students,
};

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  const li = document.createElement("li");
  li.textContent = student.name;
  app.appendChild(li);
}

// students.forEach((student) => {
//   const li = document.createElement("li");
//   li.textContent = student.name;
//   app.appendChild(li);
// });

// students.map((student) => {
//   const li = document.createElement("li");
//   li.textContent = student.name;
//   app.appendChild(li);
// });

const send = document.getElementById("send");
const userName = document.getElementById("userName");
const value = document.getElementById("value");

const getValue = (event) => {
  value.textContent = event.target.value;
};

userName.addEventListener("change", getValue);

const getUserName = () => {
  value.textContent = userName.value;
  userName.value = "enter";
};
send.addEventListener("click", getUserName);

//forms

const form = document.getElementById("registration");
const statusInfo = document.getElementById("status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formValues = document.forms.registration;
  try {
    statusInfo.textContent = "";
    if (
      formValues.username.value === "" ||
      formValues.username.value.length < 10
    ) {
      formValues.username.style.border = "1px solid red";
      throw new Error(
        "username is required and must be at least 10 characters"
      );
    }

    if (formValues.id.value === "" || formValues.id.value.length === 11) {
      throw new Error("id is required and must be 11 characters");
    }

    if (
      formValues.password.value === "" ||
      formValues.password.value.length < 8
    ) {
      throw new Error("password is required and must be at least 8 characters");
    }

    if (formValues.password.value !== formValues.confirmPassword.value) {
      throw new Error("passwords do not match");
    }

    const data = {
      userName: formValues.username.value,
      idNumber: formValues.id.value,
      password: formValues.password.value,
      confirm_password: formValues.confirmPassword,
    };
    console.log(data);

    ///send request to server
    statusInfo.textContent = "Registration successful";
    statusInfo.style.color = "green";
  } catch (err) {
    statusInfo.textContent = err.message;
    statusInfo.style.color = "red";
  }

  console.log("form submitted");
});
