// ------------------------Theme Switch -----------------------

        function light() {
            document.body.classList.remove("dark-mode")
            document.getElementById("light").style.display = "none"
            document.getElementById("dark").style.display = "block"
            
        }
        function dark() {
            document.body.classList.add("dark-mode")
            document.getElementById("dark").style.display = "none"
            document.getElementById("light").style.display = "block"

        }

        function theme() {
            document.body.classList.toggle("dark-mode");
            const label = document.getElementsByClassName("label");
            for (let i = 0; i < label.length; i++) {
                label[i].classList.add("dark")
            }
        }
        function navtoggle() {
            document.querySelector(".bar").classList.toggle("active")
        }

    
// ----------------------multi Tag line---------------------------------------

var typingEffect = new Typed(".multiText", {
    strings: [
        "MCA Graduate", 
        "MCA Graduate", 
        "Python Developer", 
    ], // Different, engaging wording
    loop: true, // Loops the effect indefinitely
    typeSpeed: 120, // Adjusted typing speed for a smoother effect
    backSpeed: 100, // Slightly slower backspacing for readability
    backDelay: 1500 // Delay before erasing the text
});

// ---------------------------Scroll Animation--------------------------------

    window.addEventListener('scroll', reveal);
    function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){ 
        var windowheight=window.innerHeight; 
        var revealtop=reveals[i].getBoundingClientRect().top; 
        var revealpoint=10; 
        if(revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('active'); 
    }else{ 
        reveals[i].classList.remove('active'); 
    } } } 


//   ----------------------------Loader Animation ---------------------------------  

            var loadtime;

            function loader() {
                loadtime = setTimeout(showPage, 2000);
            }

            function showPage() {
                document.getElementById("loader").style.display = "none";
                document.getElementById("main").style.display = "block";
                document.getElementById("nav").style.display = "flex";
            }
            function showhome(){
                var ld=setTimeout(shhome,2100)
                function shhome(){
                document.getElementById("home").classList.add('active');
            }}

            const date = new Date()
                const year = date.getFullYear()
                document.getElementById("copy").innerHTML = year

// -----------------------------tilt animation --------------------------

VanillaTilt.init(document.querySelector(".hero-image"), {
    max: 25,
    speed: 400
});
VanillaTilt.init(document.querySelectorAll(".edu-box"),{
    max: 25,
    speed: 400
});
VanillaTilt.init(document.querySelectorAll(".button"), {
    max: 25,
    speed: 400
});
VanillaTilt.init(document.querySelectorAll(".skill"), {
    max: 25,
    speed: 400
});


// ----------------------------mouse-move-------------------------

function spark(event) {
    let i = document.createElement("s");
    i.className = "mouseTrail";
    // Set the position of the element based on the mouse event
    i.style.left = event.pageX + "px";
    i.style.top = event.pageY + "px";
  
    // Randomly scale the element
    i.style.transform = `scale(${Math.random() * 2 + 1})`;
  
    // Set random transition values
    i.style.setProperty("--x", getRandomTransitionValue());
    i.style.setProperty("--y", getRandomTransitionValue());
    document.body.appendChild(i);
  
    // Remove the element after 2 seconds
    setTimeout(() => {
      document.body.removeChild(i);
    }, 2000);
  };
  
  function getRandomTransitionValue() {
    // Generate a random value between -200 and 200 pixels
    return `${Math.random() * 400 - 200}px`;
  }
  
  // Add event listener to track mouse movements and create spark effect
  document.addEventListener("mousemove", spark);

  document.addEventListener("DOMContentLoaded", function () {
    const text = `Hello, I'm Karthik Kiran S, a full-stack developer specializing in Python, Django, Flask, and Streamlit. 
    I build dynamic, user-friendly web applications that focus on performance and seamless user experience. 
    I believe in creating not just functional, but also visually engaging applications. Collaboration and continuous learning drive my work—ensuring innovative and reliable results. 
    
    If you're looking for a passionate developer to bring your ideas to life, let's connect and create something impactful!`;
  
    const typewriterText = document.getElementById("typewriter-text");
    let i = 0; // Index for the current character
  
    function typeChar() {
      if (i < text.length) {
        // Add the next character to the text
        typewriterText.innerHTML += text.charAt(i);
        i++; // Move to the next character
        setTimeout(typeChar, 50); // Adjust typing speed
      }
    }
  
    typeChar(); // Start the typing effect
  });
  
  

  const bar = document.querySelector('.bar');
const navItems = document.querySelector('.nav-items');

bar.addEventListener('click', () => {
    navItems.classList.toggle('active');
});

// Optional: Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navItems.contains(e.target) && !bar.contains(e.target)) {
        navItems.classList.remove('active');
    }
});
