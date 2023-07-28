
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("help", "To see all commands.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/drunkonbytes";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "help"){
    trueValue(value);
    
    createCode("help", "See all commands.");
    createCode("projects", "My github page with my projects. Follow me there.");
    createCode("about", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/drunkonbytes' target='_blank'><i class='fab fa-github white'></i> github.com/drunkonbytes</a>")
  }
  else if(value === "about"){
    trueValue(value);
    createText("<span class='orange'>নমস্কার বন্ধু </span>(Namaste friend)🙏🏻, <span class='lightgreen'>I'm Arjun Sinha</span>")
    createText("I am a Software Engineer with a strong background in <span class='blue'>Automation Testing</span> and <span class='blue'>SQL queries</span>.")
    createText("With one year of experience as an <span class='blue'>SDET at Commvault</span>, I am eager to take the next step in my career and transition into <span class='blue'>core development roles</span>")
    createText("and contribute my expertise in <span class='blue'>Python, Go (Golang), and C++</span> to a dynamic and innovative team.")
  }
  else if(value === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/drunkonbytes' target='_blank'><i class='fab fa-github white'></i> github.com/drunkonbytes</a>")
    createText("<a href='https://www.linkedin.com/in/drunkonbytes/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/drunkonbytes</a>")
    createText("<a href='https://www.instagram.com/drunkonbytes/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/drunkonbytes</a>")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();