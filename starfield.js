
            const canvas = document.getElementById('starfield');
            const ctx = canvas.getContext('2d');
            
            // Set canvas size
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            // Color choices
            const colors = ['#ffffff', '#4a9eff', '#ff6b9d'];
            
            // Create star data
            const stars = [];
            for (let i = 0; i < 200; i++) {
              stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                colorIndex: Math.floor(Math.random() * colors.length)
              });
            }
            
            // Draw function
            function draw() {
              ctx.fillStyle = 'black';
              ctx.fillRect(0, 0, canvas.width, canvas.height);
              
              stars.forEach(star => {
                ctx.fillStyle = colors[star.colorIndex];
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();
              });
            }
            
            draw();
            
            // Resize handler
            window.addEventListener('resize', () => {
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;
              draw();
            });