// JSON - Address
let getBranch = "";
fetch('./json/address.json')
 .then(response => response.json())
 .then(json => {
    json.forEach(function(items){
        getBranch += `<div class="col-sm-4">
                        <div class="cv_skills skill-box">
                            <img src="images/${items.Logo}.png" alt="" width="100%">
                            <h3>${items.Name}</h3>                            
                        </div>
                      </div>`;
    })
    if(document.querySelector('.cv-skill')){
        document.querySelector('.cv-skill').innerHTML = getBranch;
    }
 })
 
// Scramble text animation
const text = "React.JS FrontEnd Dev";
const el = document.querySelector(".scramble-text");
if(el) {
    el.classList.remove("scramble-text");
    el.classList.add("flip-text");
    el.innerHTML = [...text].map((char, i) => 
        `<span style="--i:${i}">${char === " " ? "&nbsp;" : char}</span>`
    ).join("");
}

// Download Button Animation - FIXED VERSION
// Download Button Animation - Arrow rotated 180° (pointing UP)
document.querySelectorAll('.dl-parachute').forEach(button => {
    let number = button.querySelector('.number span'),
        count = { number: 0 };
    
    // Get the parent anchor tag
    let downloadLink = button.closest('a');
    
    button.addEventListener('click', e => {
        e.preventDefault(); // Prevent immediate download
        e.stopPropagation(); // Stop event bubbling
        
        if (button.classList.contains('active')) {
            return;
        }
        
        button.classList.add('active');
        
        // Create animation timeline
        let tl = gsap.timeline({
            onComplete: function() {
                // Trigger actual download after animation completes
                if(downloadLink && downloadLink.href) {
                    // Create a temporary link and trigger download
                    let tempLink = document.createElement('a');
                    tempLink.href = downloadLink.href;
                    tempLink.download = downloadLink.download || 'cv_Arun';
                    document.body.appendChild(tempLink);
                    tempLink.click();
                    document.body.removeChild(tempLink);
                    
                    // Reset button after a delay
                    setTimeout(() => {
                        button.classList.remove('active');
                        gsap.set(button, {
                            '--arrow-y': '2px',
                            '--arrow-x': '0px',
                            '--arrow-r': '180deg', // Keep arrow pointing up
                            '--line-progress-o': 0,
                            '--line-progress': '0px', // Start from 0 for upward
                            '--success-o': 0,
                            '--success-y': '12px',
                            '--number-o': 1,
                            '--number-y': '12px',
                            '--parachute-o': 0,
                            '--parachute-y': '0px',
                            '--parachute-s': 0
                        });
                        count.number = 0;
                        number.innerHTML = '0';
                    }, 2000);
                }
            }
        });
        
        // Set arrow rotation to point UP (180 degrees)
        tl.set(button, {
            '--arrow-r': '180deg'
        })
        // Arrow moves UP first
        tl.to(button, {
   '--svg-y': '-60px',    // was -120px
    '--arrow-y': '-22px',  // was -44px
    duration: .15
})
        // Arrow shoots UP more
       .to(button, {
    '--arrow-y': '-36px',  // was -72px
    duration: 0.3,
    ease: 'power1.out'
})
        // Show parachute
        .to(button, {
            '--parachute-o': 1,
            '--parachute-s': 1,
            duration: 0.2
        })
        // Arrow falls DOWN with parachute (up to down motion)
        .to(button, {
             '--arrow-y': '20px',   // was 40px
    '--parachute-y': '0px',
    '--line-progress': '260px',
    '--number-o': 1,
    duration: 3,
    ease: 'linear',
            onStart() {
                gsap.to(button, {
                    '--line-progress-o': 1,
                    duration: 0.2
                });
            }
        }, '-=0.1')
        // Progress counter
        .to(count, {
            number: 100,
            roundProps: 'number',
            duration: 3,
            ease: 'linear',
            onUpdate: () => {
                if(number) number.innerHTML = count.number;
            }
        }, '-=3')
        // Hide number, show success
        .to(button, {
            '--number-o': 0,
            duration: 0.15
        })
        .to(button, {
            '--success-o': 1,
            '--success-y': '0px',
            duration: 0.25
        });
    });
});

// Alternative version: Even simpler reverse (just arrow + parachute going up)
document.querySelectorAll('.dl-parachute-simple').forEach(button => {
    let number = button.querySelector('.number span'),
        count = { number: 0 };
    
    let downloadLink = button.closest('a');
    
    button.addEventListener('click', e => {
        e.preventDefault();
        e.stopPropagation();
        
        if (button.classList.contains('active')) {
            return;
        }
        
        button.classList.add('active');
        
        let tl = gsap.timeline({
            onComplete: function() {
                if(downloadLink && downloadLink.href) {
                    let tempLink = document.createElement('a');
                    tempLink.href = downloadLink.href;
                    tempLink.download = downloadLink.download || 'download';
                    document.body.appendChild(tempLink);
                    tempLink.click();
                    document.body.removeChild(tempLink);
                    
                    setTimeout(() => {
                        button.classList.remove('active');
                        gsap.set(button, {
                            '--arrow-y': '2px',
                            '--parachute-o': 0,
                            '--parachute-y': '0px',
                            '--line-progress-o': 0,
                            '--line-progress': '260px',
                            '--number-o': 1,
                            '--success-o': 0
                        });
                        count.number = 0;
                        if(number) number.innerHTML = '0';
                    }, 2000);
                }
            }
        });
        
        // Simple up animation
        tl.to(button, {
            '--parachute-o': 1,
            '--parachute-s': 1,
            duration: 0.2
        })
        .to(button, {
            '--arrow-y': '-80px',
            '--parachute-y': '-80px',
            '--line-progress': '0px',
            '--line-progress-o': 1,
            duration: 2.5,
            ease: 'power1.out'
        })
        .to(count, {
            number: 100,
            roundProps: 'number',
            duration: 2.5,
            onUpdate: () => {
                if(number) number.innerHTML = count.number;
            }
        }, '-=2.5')
        .to(button, {
            '--number-o': 0,
            '--success-o': 1,
            duration: 0.3
        });
    });
});

// Helper functions for path generation (if needed for other animations)
function getPoint(point, i, a, smoothing) {
    let cp = (current, previous, next, reverse) => {
        let p = previous || current,
            n = next || current,
            o = {
                length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
                angle: Math.atan2(n[1] - p[1], n[0] - p[0])
            },
            angle = o.angle + (reverse ? Math.PI : 0),
            length = o.length * smoothing;
        return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
    },
    cps = cp(a[i - 1], a[i - 2], point, false),
    cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing) {
    let points = [
        [10, 64.5],
        [140, update],
        [270, 64.5]
    ],
    d = points.reduce((acc, point, i, a) => 
        i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`, 
    '');
    return `<path d="${d}" /><path class="progress" d="${d}" />`;
}