function loader(){
    var h2 = document.querySelector(".loader h2")
    var text = h2.textContent
    var split = text.split("")
    clutter = ""

    split.forEach(function(elem){
        if (elem === " "){
            clutter += `<span>&nbsp</span>`
        }else{
            clutter += `<span>${elem}</span>`
        }
    })

    // console.log(clutter);
    
    h2.innerHTML = clutter

    var tl = gsap.timeline()
    tl.from(".loader h2 span",{
        scale : 10,
        opacity : 0,
        stagger : 0.16,
    })

    tl.to(".loader h2 span",{
        scale : 0,
        stagger : 0.04,
    },"+=1")

    tl.to(".loader .loading-text",{
        y : -60,
        opacity : 0
    },"-=0.7")

    tl.to(".enter",{
        x : "200vw",
        duration: 1.5,
    })
}

loader()

function enter(){
    var a = document.querySelector(".enter #a")
    var b = document.querySelector(".enter #b")
    var c = document.querySelector(".enter #c")
    var d = document.querySelector(".enter #d")
    var circle = document.querySelector(".enter .circle")

    var button = document.querySelector(".enter .button")

    function breaking(x){
        var text = x.textContent
        var splitted = text.split("")
        var clutter = ""

        splitted.forEach(function(elem){
            clutter += `<span>${elem}</span>`
        })

        x.innerHTML = clutter
        // console.log(clutter);
        
    }

    breaking(a)
    breaking(b)

    var tl = gsap.timeline()
    tl.from(button,{
        y : -20,
        opacity : 0
    })

    button.addEventListener("mouseenter", function(){
        
        gsap.to(circle,{
            scale: 1.05
        })

        gsap.to("#a span",{
            y : "-45vh",
            ease: "power3.out",
            stagger : 0.02
        })

        gsap.to("#b span",{
            y : "-45vh",
            ease: "power3.out",
            stagger : 0.02
        })

        gsap.to(c,{
            x : "2.5vw",
            ease: "power3.out",
        })

        gsap.to(d,{
            x : "2.5vw",
            ease: "power3.out",
        })
        button.style.cursor = "pointer"
    })

    button.addEventListener("mouseleave", function(){
    
        gsap.to(circle,{
            scale: 1,
        })

        gsap.to("#a span",{
            y : "0vh",
            ease: "power3.out",
            stagger : -0.02
        })

        gsap.to("#b span",{
            y : "0vh",
            ease: "power3.out",
            stagger : -0.02
        })

        gsap.to(c,{
            x : "0vh",
            ease: "power3.out",
        })
        gsap.to(d,{
            x : "0vh",
            ease: "power3.out",
        })
        button.style.cursor = "none"
        
    })

    button.addEventListener("click", function(){
        gsap.to(".loading",{
            x : "-200vw",
            duration : 2
        })
        document.querySelector(".page1").style.display = "block"
        gsap.from(".page1",{
            x : "100vw"
        })
        document.querySelector(".loading").style.display = "none"
    })

    function bg(){
        var row1 = document.querySelector(".enter .row1")
        var row2 = document.querySelector(".enter .row2")
        var row3 = document.querySelector(".enter .row3")

        document.querySelector(".enter").addEventListener("mousemove", function(e){
            var mouseX = e.clientX
            var windowWidth = window.innerWidth

            var percentage = mouseX / windowWidth

            var row1Translate = (percentage * windowWidth * 0.3 ) - (windowWidth * 0.1)
            var row2Translate = (percentage * windowWidth * 0.2 ) - (windowWidth * 0.1)
            var row3Translate = (percentage * windowWidth * 0.3 ) - (windowWidth * 0.1)

            row1.style.transform = `translateX(${row1Translate}px)`
            row2.style.transform = `translateX(${row2Translate}px)`
            row3.style.transform = `translateX(${row3Translate}px)`
        })
    }

    bg()

    
}

enter()

function page1(){
    
    var splitted = document.querySelector(".page1 h1").textContent.split("")
    var clutter = ""
    splitted.forEach(function(elem){
        clutter += `<span>${elem}</span>`
    })
    document.querySelector(".page1 h1").innerHTML = clutter
    // console.log(clutter);

    var firsts = document.querySelectorAll(".page1 .first")
    var seconds = document.querySelectorAll(".page1 .second")
    var texts = document.querySelectorAll(".page1 .text")
    var images = document.querySelectorAll(".page1 img")

    texts.forEach(function(text,idx){
        text.addEventListener("mouseenter", function(){
            var I = firsts[idx]
            var II = seconds[idx]

            text.style.cursor = "pointer"
            images[idx].style.display = "block"

            gsap.to(I,{
                y : "-8.5vh",
                ease : "power3.out"
            })

            gsap.to(II,{
                y : "-8.5vh",
                ease : "power3.out"
            }) 
            
            gsap.to(".page1 h1 span",{
                y : "50vh",
                stagger : 0.02,
            })
        })
        text.addEventListener("mouseleave", function(){
            var I = firsts[idx]
            var II = seconds[idx]

            text.style.cursor = "none"
            images[idx].style.display = "none"

            gsap.to(I,{
                y : 0,
                ease : "power3.out"
            })

            gsap.to(II,{
                y : 0,
                ease : "power3.out"
            }) 
            
            gsap.to(".page1 h1 span",{
                y : "0vh",
                stagger : 0.02,
            })
        })
    })
}
page1()