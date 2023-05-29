const xhttp = new XMLHttpRequest();
const xhttp1 = new XMLHttpRequest();
var page = 1;
let colum1 = document.getElementsByClassName("contain1");
let colum2 = document.getElementsByClassName("contain2");

function CreatePage(page) {
  var link = "https://reqres.in/api/users?page=";
  var link1 = link + page;
  return link1;
}
let arr;

function GetData(xhttp, at, page1, value) {
  var second = at + 1;

  xhttp.onload = function () {
    const obj = JSON.parse(xhttp.responseText);
    arr = obj.data;
    // document.getElementById("demo1").innerHTML = "dfsdfsdf";
    colum1[0].textContent = arr[at].id;
    colum1[1].textContent = arr[at].first_name;
    colum1[2].textContent = arr[at].last_name;
    colum1[3].textContent = arr[at].email;
    colum1[4].src = arr[at].avatar;

    colum2[0].textContent = arr[second].id;
    colum2[1].textContent = arr[second].first_name;
    colum2[2].textContent = arr[second].last_name;
    colum2[3].textContent = arr[second].email;
    colum2[4].src = arr[second].avatar;
    xhttp.responseText == value;
  };
  xhttp.open("GET", CreatePage(page1));
  xhttp.send();
}
// --------------------------------------------------------------
let btn = document.getElementsByClassName("active");

function ClickPre() {
  if (page == 1) {
  } else {
    page = page - 2;
    for (let i = 1; i < 7; i++) {
      btn[i].textContent = parseInt(btn[i].textContent) - 6;
    }
    Click1();
  }
}
function ClickNext() {
  page = page + 2;
  for (let i = 1; i < 7; i++) {
    btn[i].textContent = parseInt(btn[i].textContent) + 6;
  }
  Click1();
}

function Click1() {
  GetData(xhttp, 0, page);
}
function Click2() {
  GetData(xhttp, 2, page);
}
function Click3() {
  GetData(xhttp, 4, page);
}

function Click4() {
  GetData(xhttp1, 0, page + 1);
}
function Click5() {
  GetData(xhttp, 2, page + 1);
}
function Click6() {
  GetData(xhttp, 4, page + 1);
}

function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("demo1").innerHTML = this.responseText;
  };
  xhttp.open("GET", "https://reqres.in/api/users?page=2");
  xhttp.send();
}
//--------------------------------------Active----------------------
let pageSelect = document.getElementsByClassName("active");
function active(page1) {
  for (let i = 0; i < 8; i++) {
    pageSelect[i].style.color = "#157ffb";
    pageSelect[i].style.backgroundColor = "white";
  }
  page1.style.color = "white";
  page1.style.backgroundColor = "#157ffb";
}

// document.getElementsByClassName("demo").innerHTML = "ewfefefew";
