const handleSubmit =async (e) => {
  e.preventDefault();
  let data = {
    title: document.getElementById("task").value,
    description: document.getElementById("description").value,
    status: document.getElementById("status").value,
  };
//   console.log(data);
  await axios.post(`http://localhost:4000/`, data);
  console.log("Success");
  
};
document.getElementById("form").addEventListener("submit", handleSubmit);


const maindata=async()=>{
   let maindata=await axios.get(`http://localhost:4000/`)
    document.getElementById("main").innerHTML = "";
maindata.data.map(data=>{
document.getElementById("main").innerHTML=`
        <p>${data.title}</p>

`
})
}
maindata()