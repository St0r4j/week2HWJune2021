        // largest scope
        let position = 0;
           
        const nextSlide = function () {   // block scoped
            
            if (position <= -1600) {
                position = 400
            }
            
            // grabs the element from the DOM
            const imageSlider1 = document.getElementById('imageSlider1');
            // decrement the position by the width of the image
            position -= 400;
            // access the style transform on the element and apply the position
            imageSlider1.style.transform = `translateX(${position}px)`;

        }

       const previousSlide = function () {   // block scoped

            if (position >= 0) {
                position = -2000
            }

            // grabs the element from the DOM
            const imageSlider1 = document.getElementById('imageSlider1');
            // decrement the position by the width of the image
            position += 400;
            // access the style transform on the element and apply the position
            imageSlider1.style.transform = `translateX(${position}px)`;

       }