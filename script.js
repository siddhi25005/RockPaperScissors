let main = document.querySelectorAll(".main div");
let rbox = document.querySelector(".score");
let total = document.querySelector(".total");
let choices = ["rock", "paper", "scissor"];
let t = 0; 

main.forEach(m => {
    m.addEventListener("click", () => {
        let user = m.classList[0]; 
        let comp = choices[Math.floor(Math.random() * 3)];
        
        getresult(user, comp); 
    });
});

function getresult(user, comp) {
    if (user === comp) {
        rbox.innerHTML = `It's a Tie... <br> U: ${user} | Comp: ${comp}`;
        rbox.style.backgroundColor = "blue";
    } 
    else if (
        (user === "scissor" && comp === "paper") ||
        (user === "rock" && comp === "scissor") ||
        (user === "paper" && comp === "rock")
    ) {
        rbox.innerHTML = `You Win! 🎉 <br> U: ${user} | Comp: ${comp}`;
        rbox.style.backgroundColor = "green";
        t++;
        total.innerHTML = `Your Score: ${t}`;
        if(t>=3) {
            total.style.backgroundColor = "green";

        }
    } 
    else {
        rbox.innerHTML = `Computer Wins! 💻 <br> U: ${user} | Comp: ${comp}`;
        rbox.style.backgroundColor = "red";
    }
}
