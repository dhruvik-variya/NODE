const handleSubmit = async (e) => {
  e.preventDefault();
  let data = {
    title: document.getElementById("task").value,
    description: document.getElementById("description").value,
    status: document.getElementById("status").value,
  };
  //   console.log(data);
  // await axios.post(`http://localhost:4000/`, data);
  await fetch(`http://localhost:4000/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  console.log("Success");
  maindata();

};
document.getElementById("form").addEventListener("submit", handleSubmit);


const maindata = async () => {

  let maindata = await fetch(`http://localhost:4000/`)
  maindata = await maindata.json()

  //  console.log(maindata.data);
  document.getElementById("main").innerHTML = "";

  maindata.map((data) => {

    // console.log(data);

    const div = document.createElement("div");
    const title = document.createElement('p');
    title.innerHTML = data.title

    const description = document.createElement('p');
    description.innerHTML = data.description

    const status = document.createElement('p');
    status.innerHTML = data.status

    const edit = document.createElement('button');
    edit.innerHTML = 'Edit'
    edit.onclick = () => {
      editTask(data._id)
    }
    const del = document.createElement('button');
    del.innerHTML = 'Delete'
    del.onclick = () => {
      deleteTask(data._id)
    }

    div.append(title, description,status, edit,del)
    document.getElementById('main').append(div)

  })
}
maindata()