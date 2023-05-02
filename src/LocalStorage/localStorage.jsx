import {atom} from "recoil";

let userDataFromLocal ="";

if(JSON.parse(localStorage.getItem("users"))){
    userDataFromLocal = JSON.parse(localStorage.getItem("users"));
}

export const userData = atom({
    key: "userData",
    default: [
        {
            fname: "anuj",
            lname: "bhati",
            email:"bhatianuj@gmal.com",
            password:"123456",
        },
        ...userDataFromLocal,
    ],
});

export const showHome = atom({
    key: "showHome",
    default: false,
  });