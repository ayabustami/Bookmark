const validator = new JustValidate('[name="bookMarkForm"]');
let sites = [];
if(localStorage.getItem("sites") != null){
    sites = JSON.parse(localStorage.getItem("sites"))
}

validator.addField("[name='name']",[
    {
         rule: 'required',
         errorMessage:"Url Is Required"
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 15,
    },
])
console.log(validator);

validator.onSuccess((e)=>{
 const site = {

        url:bookMarkForm.url.value,
        name:bookMarkForm.name.value,
        email:bookMarkForm.email.value,
        password:bookMarkForm.password.value,
    };
    sites.push(site);
    localStorage.setItem("sites",JSON.stringify(sites));
    Swal.fire({
    position: "top-end",
    icon: "success",
    title: "site added succesfully",
    showConfirmButton: false,
    timer: 3000
    });
    displaySites();
} )

const displaySites = ()=>{
    const result = sites.map( (site,index)=>{
        return `<tr>
               <td>${index}</td>
               <td>${site.url}</td>
               <td>${site.name}</td>
               <td>
               <button class='btn btn-danger' onclick=removeSite(${index}) type="button">delete</button>
               <a class='btn btn-info' href='details.html?id=${index}'>details</a>
               </td>
             </tr>`
    } ).join('');
    document.querySelector(".data").innerHTML = result;
}
displaySites();
const removeSite = (index)=>{
  
    Swal.fire({
  title: "Do you want to save the changes?",
  showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Save",
  denyButtonText: `Don't save`
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
 sites.splice(index,1);
        localStorage.setItem("sites",JSON.stringify(sites));
        displaySites();
Swal.fire("Saved!", "", "success");
  } 
  else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
});



    


    
}