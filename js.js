console.log("connected")


// nav skrollanje
function skrollaj(ime){
    let el = document.getElementById(ime);
    el.scrollIntoView({behavior: "smooth"});
}



// fade in animacije
let elementi = document.querySelectorAll(".selektor")

const observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("pop", entry.isIntersecting)
    })
},{
    threshold : 1,
    //rootMargin: "-100px"
})

elementi.forEach(element => {
    observer.observe(element)
})
