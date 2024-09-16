
function sendEmail(){
     Email.send({
          Host : "smtp.gmail.com",
          Username : "akashzzh146@gmail.com",
          Password : "akash123",
          To : 'akashqq146@gmail.com',
          From : document.getElementById("email").value,
          Subject : "New Contact Form Enquiry",
          Body : "And this is the body"
      }).then(
        message => alert(message)
      );
}



function send(){
  
  document.getElementById("ll").style.display = "none";
  document.getElementById("hide").style.display = "block";
  document.getElementById("sho_w").style.display = "none";
  document.getElementById("bbb").style.display = "block";
  document.getElementById("hide3").style.display ="block";
  document.getElementById("fff").style.display = "block";
}
  
  

function addanother(){
  document.getElementById("picc").style.display="block"
  document.getElementById("wid").style.display = "block";
  document.getElementById("hide").style.display ="none";
  document.getElementById("sho_w").style.display = "block";
  document.getElementById("cardch").style.display ="block";
  document.getElementById("modifys").style.display ="block";
  document.getElementById("car_d").style.display = "block";
  document.getElementById("cmm").style.display ="block";
  document.getElementById("bbb").style.display ="block";
  document.getElementById("hide3").style.display ="block";
  document.getElementById("hh").style.display ="block";
}

function add(){
  document.getElementById("command").innerHTML = ca.value;
 

}
function del(){
  document.getElementById("command").innerHTML = "";
  loadimage.src ="";
  document.getElementById("ll").style.display ="block";
  document.getElementById("fff").style.display = "none";
  
  
}
function importdel(){
document.getElementById("cmm").style.display ="block";
document.getElementById("hide").style.display = "none";
document.getElementById("bbb").style.display = "none";
document.getElementById("sho_w").style.display = "none";
document.getElementById("hide3").style.display = "none";
document.getElementById("hide4").style.display = "block";
}

let loadimage = document.getElementById("pic");
let inputfile = document.getElementById("input_file");

inputfile.onchange = function(){
  loadimage.src = URL.createObjectURL(inputfile.files[0]);
}

let loadimages = document.getElementById("picc");
let inputfiles = document.getElementById("input_files");

inputfiles.onchange = function(){
loadimages.src = URL.createObjectURL(inputfiles.files[0]);
document.getElementById("picc").style.display="block" 
document.getElementById("cmm").style.display ="block";
document.getElementById("bbb").style.display ="block";
}



function input_a (){
  document.getElementById("car_d").innerHTML = sho_w.value;
  document.getElementById("cmm").style.display ="block";
  
}

/*

<div class="post">
  <h2>To-Do List</h2>

  <input type="text" id="sho_w//taskInput" placeholder="Enter a new task">
  <button onclick="addTask()">Add Task</button>

  <ul id="taskList">
    <!-- Tasks will be added here -->
  </ul>




function addTask() {
  var sho_w = document.getElementById('sho_w');
  var car_d = document.getElementById('car_d');

  // Create a new list item
  var listItem = document.createElement('div');
  var taskText = document.createTextNode(sho_w.value);
  listItem.appendChild(taskText);

  // Add click event listener to toggle task completion
  listItem.addEventListener('click', function() {
    listItem.classList.toggle('completed');
  });

  // Append the new list item to the task list
  car_d.appendChild(listItem);

  // Clear the input field
  sho_w.value = '';
}

*/

function addCard() {

  
  var cardContainer = document.getElementById('cardContainer');
  
         
  // Create a new card
  var card = document.createElement('divv');
  card.classList.add('card');

  // Create a post inside the card
  var post = document.createElement('div');
  post.classList.add('post');
  var postTitle = document.createElement('h6');
  postTitle.textContent = "Write the Blog";
  postTitle.id ="PO-ST"
  var taskList = document.createElement('div');
  taskList.classList.add('taskList');
  taskList.id="rrrr"
  var taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.id = "team";
  
  taskInput.placeholder = 'Add';
  var addTaskButton = document.createElement('button');
  addTaskButton.id = "buttonhide"
  addTaskButton.textContent = 'ADD';
  addTaskButton.onclick = function() {
    addTask(this);
    
    post.removeChild(taskInput);
    document.getElementById("delete-task").style.display = "block"; 
    post.removeChild(postTitle)
    post.removeChild(addTaskButton);

    

 };

  

   /* card.removeChild(post);
  });

  var importbtn = document.createElement('button');
  importbtn.textContent = "dd"
  importbtn.addEventListener('click', function(){
    document.getElementById("team").style.display ="none";
  })*/
   
  post.appendChild(postTitle);
  post.appendChild(taskInput);
//  post.appendChild(deletebtn);
  //post.appendChild(importbtn);
  post.appendChild(addTaskButton);
  post.appendChild(taskList);
  card.appendChild(post);
  

  cardContainer.appendChild(card);
  

}



function addTask(button) {
  var taskInput = button.previousElementSibling;
  var taskList = button.nextElementSibling;
 
  // Create a new list item
  var listItem = document.createElement('div');
  var taskText = document.createTextNode(taskInput.value);
  
  listItem.appendChild(taskText);

  // Add click event listener to toggle task completion
  listItem.addEventListener('click', function() {
    listItem.classList.toggle('completed');
  });

  // Append the new list item to the task list
  taskList.appendChild(listItem);
  // Clear the input field
  taskInput.value = '';

}

 
 

function clears(){
  document.getElementById("cardContainer").innerHTML="";
  document.getElementById("delete-task").style.display ="none";

}
  

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{

  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelectorAll('header nav a [href*='+ id+']').classList.add("active")
      })
    }
  })
}
//autoplay loop muted plays-inline 