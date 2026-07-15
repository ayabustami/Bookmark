// const path = location.href.split('?')[1];
// console.log(path.split('=')[1])

//?id=1&name=tariq&minPrice=200

// console.log(params.get('id'))
// console.log(params.get('name'))
// console.log(params.get('minPrice'))

const params = new URLSearchParams(location.search);
const index = params.get('id');

const sites = JSON.parse(localStorage.getItem("sites"));

document.querySelector(".siteName").textContent = sites[index].name;
document.querySelector(".siteUrl").textContent = sites[index].url;
document.querySelector(".email").textContent = sites[index].email;
document.querySelector(".password").textContent = sites[index].password;
console.log(sites[index]);