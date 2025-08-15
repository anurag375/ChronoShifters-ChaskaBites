// Enhanced recipe database with more dishes including fast food
        const recipes = {
            "Spaghetti Carbonara": {
                name: "Spaghetti Carbonara",
                ingredients: [
                    "400g spaghetti",
                    "200g pancetta or guanciale, diced",
                    "4 large eggs",
                    "100g Pecorino Romano cheese, grated",
                    "50g Parmesan cheese, grated",
                    "Freshly ground black pepper",
                    "Salt"
                ],
                instructions: [
                    "Cook spaghetti in salted boiling water until al dente. Reserve about 1 cup of pasta water before draining.",
                    "While pasta cooks, fry pancetta in a large pan over medium heat until crispy, about 7-10 minutes. Remove from heat.",
                    "In a bowl, whisk together eggs, grated Pecorino Romano, Parmesan, and a generous amount of black pepper.",
                    "Drain pasta and immediately add to the pan with pancetta. Toss quickly to combine.",
                    "Remove pan from heat and let cool for 1 minute. Pour in the egg mixture, stirring quickly to coat the pasta without scrambling the eggs.",
                    "Add a splash of reserved pasta water to create a creamy sauce. Season with salt if needed.",
                    "Serve immediately with extra grated cheese and black pepper."
                ],
                calories: 650,
                difficulty: "Medium",
                time: "30 mins",
                servings: 4,
                image: "https://images.unsplash.com/photo-1588013273468-315fd88ea34c?q=80&w=1738",
                category: "Italian",
                dietary: ["Vegetarian", "Quick"],
                substitutions: {
                    "pancetta or guanciale": ["bacon", "vegetarian bacon"],
                    "Pecorino Romano cheese": ["Parmesan", "vegan cheese"],
                    "eggs": ["egg substitute"]
                }
            },
            "Chicken Tikka Masala": {
                name: "Chicken Tikka Masala",
                ingredients: [
                    "500g boneless chicken, cubed",
                    "1 cup yogurt",
                    "2 tbsp tikka masala paste",
                    "1 onion, finely chopped",
                    "3 garlic cloves, minced",
                    "1 inch ginger, grated",
                    "400g canned tomatoes",
                    "1 cup cream",
                    "2 tbsp oil",
                    "Salt to taste",
                    "Fresh cilantro for garnish"
                ],
                instructions: [
                    "Marinate chicken in yogurt and 1 tbsp masala paste for 30 mins.",
                    "Heat oil in a pan, sauté onions until golden.",
                    "Add garlic and ginger, cook for 1 min.",
                    "Add remaining paste and tomatoes, simmer for 10 mins.",
                    "Grill or bake chicken until cooked through.",
                    "Add chicken to sauce, stir in cream.",
                    "Simmer for 5 mins, garnish with cilantro.",
                    "Serve with rice or naan."
                ],
                calories: 520,
                difficulty: "Medium",
                time: "50 mins",
                servings: 4,
                image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1732",
                category: "Indian",
                dietary: ["Gluten-Free"],
                substitutions: {
                    "chicken": ["tofu", "chickpeas"],
                    "cream": ["coconut milk", "yogurt"]
                }
            },
            "Chocolate Chip Cookies": {
                name: "Chocolate Chip Cookies",
                ingredients: [
                    "225g unsalted butter, softened",
                    "200g brown sugar",
                    "100g granulated sugar",
                    "2 large eggs",
                    "1 tsp vanilla extract",
                    "350g all-purpose flour",
                    "1 tsp baking soda",
                    "1/2 tsp salt",
                    "300g chocolate chips"
                ],
                instructions: [
                    "Preheat oven to 350°F (175°C). Line baking sheets with parchment paper.",
                    "In a large bowl, cream together butter and sugars until light and fluffy.",
                    "Beat in eggs one at a time, then stir in vanilla.",
                    "Combine flour, baking soda, and salt; gradually add to butter mixture.",
                    "Fold in chocolate chips.",
                    "Drop by rounded tablespoons onto baking sheets.",
                    "Bake for 10-12 minutes until edges are golden.",
                    "Cool on baking sheets for 5 minutes before transferring to wire racks."
                ],
                calories: 220,
                difficulty: "Easy",
                time: "25 mins",
                servings: 24,
                image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1664",
                category: "Dessert",
                dietary: ["Vegetarian"],
                substitutions: {
                    "butter": ["coconut oil", "margarine"],
                    "eggs": ["applesauce", "flax eggs"]
                }
            },
            "Vegetable Stir Fry": {
                name: "Vegetable Stir Fry",
                ingredients: [
                    "2 tbsp vegetable oil",
                    "1 onion, sliced",
                    "2 garlic cloves, minced",
                    "1 red bell pepper, sliced",
                    "1 yellow bell pepper, sliced",
                    "1 carrot, julienned",
                    "1 cup broccoli florets",
                    "1 cup snow peas",
                    "2 tbsp soy sauce",
                    "1 tbsp oyster sauce",
                    "1 tsp sesame oil",
                    "1 tsp grated ginger",
                    "Sesame seeds for garnish"
                ],
                instructions: [
                    "Heat oil in a wok or large skillet over high heat.",
                    "Add onion and garlic, stir-fry for 1 minute.",
                    "Add bell peppers and carrot, cook for 2 minutes.",
                    "Add broccoli and snow peas, cook for another 2 minutes.",
                    "In a small bowl, mix soy sauce, oyster sauce, and sesame oil.",
                    "Pour sauce over vegetables, add ginger, and stir well.",
                    "Cook for 2 more minutes until vegetables are crisp-tender.",
                    "Garnish with sesame seeds and serve with rice or noodles."
                ],
                calories: 180,
                difficulty: "Easy",
                time: "20 mins",
                servings: 4,
                image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1678",
                category: "Asian",
                dietary: ["Vegetarian", "Vegan", "Gluten-Free", "Quick"],
                substitutions: {
                    "soy sauce": ["tamari", "coconut aminos"],
                    "oyster sauce": ["mushroom sauce", "hoisin sauce"]
                }
            },
            "Beef Burger": {
                name: "Classic Beef Burger",
                ingredients: [
                    "500g ground beef (80% lean)",
                    "1 tsp Worcestershire sauce",
                    "1 tsp garlic powder",
                    "1 tsp onion powder",
                    "Salt and pepper to taste",
                    "4 burger buns",
                    "4 slices cheddar cheese",
                    "Lettuce leaves",
                    "Sliced tomatoes",
                    "Sliced onions",
                    "Ketchup and mustard"
                ],
                instructions: [
                    "In a bowl, mix ground beef with Worcestershire sauce, garlic powder, onion powder, salt, and pepper.",
                    "Divide the mixture into 4 equal portions and form into patties.",
                    "Preheat grill or skillet over medium-high heat.",
                    "Cook patties for 4-5 minutes per side for medium doneness.",
                    "During the last minute of cooking, add cheese slices to melt.",
                    "Toast burger buns lightly.",
                    "Assemble burgers with patties, lettuce, tomato, onion, and condiments.",
                    "Serve with fries or salad."
                ],
                calories: 750,
                difficulty: "Easy",
                time: "25 mins",
                servings: 4,
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1699",
                category: "American",
                dietary: ["Quick"],
                substitutions: {
                    "beef": ["turkey", "veggie patty"],
                    "buns": ["lettuce wraps", "gluten-free buns"]
                }
            },
            "Caesar Salad": {
                name: "Classic Caesar Salad",
                ingredients: [
                    "2 romaine lettuce hearts, chopped",
                    "1 cup croutons",
                    "1/2 cup grated Parmesan cheese",
                    "1/4 cup Caesar dressing",
                    "2 anchovy fillets, minced (optional)",
                    "1 clove garlic, minced",
                    "1 egg yolk",
                    "1 tbsp lemon juice",
                    "1 tsp Dijon mustard",
                    "1/4 cup olive oil",
                    "Salt and pepper to taste"
                ],
                instructions: [
                    "Wash and dry romaine lettuce, then chop into bite-sized pieces.",
                    "In a small bowl, whisk together egg yolk, lemon juice, Dijon mustard, minced garlic, and anchovies (if using).",
                    "Slowly drizzle in olive oil while whisking continuously to emulsify.",
                    "Add Parmesan cheese and season with salt and pepper.",
                    "In a large bowl, combine lettuce, croutons, and dressing. Toss gently to coat.",
                    "Top with additional Parmesan cheese and freshly ground black pepper.",
                    "Serve immediately."
                ],
                calories: 320,
                difficulty: "Easy",
                time: "15 mins",
                servings: 2,
                image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1740",
                category: "Salad",
                dietary: ["Vegetarian", "Gluten-Free", "Quick"],
                substitutions: {
                    "egg yolk": ["mayonnaise", "vegan mayo"],
                    "Parmesan": ["nutritional yeast", "vegan parmesan"]
                }
            },
            "Pizza Margherita": {
                name: "Pizza Margherita",
                ingredients: [
                    "1 pizza dough (store-bought or homemade)",
                    "1/2 cup tomato sauce",
                    "8 oz fresh mozzarella, sliced",
                    "Fresh basil leaves",
                    "2 tbsp olive oil",
                    "Salt to taste",
                    "Red pepper flakes (optional)"
                ],
                instructions: [
                    "Preheat oven to 475°F (245°C) with pizza stone if available.",
                    "Roll out dough to desired thickness on floured surface.",
                    "Spread tomato sauce evenly over dough, leaving border.",
                    "Arrange mozzarella slices over sauce.",
                    "Drizzle with olive oil and season with salt.",
                    "Bake for 10-12 minutes until crust is golden and cheese is bubbly.",
                    "Top with fresh basil leaves and red pepper flakes before serving."
                ],
                calories: 285,
                difficulty: "Medium",
                time: "25 mins",
                servings: 4,
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1740",
                category: "Fast Food",
                dietary: ["Vegetarian", "Quick"],
                substitutions: {
                    "mozzarella": ["vegan cheese", "feta"],
                    "dough": ["cauliflower crust", "gluten-free dough"]
                }
            },
            "French Fries": {
                name: "Crispy French Fries",
                ingredients: [
                    "4 large russet potatoes",
                    "Vegetable oil for frying",
                    "Salt to taste",
                    "Optional: garlic powder, paprika, or herbs"
                ],
                instructions: [
                    "Peel potatoes and cut into 1/4-inch sticks.",
                    "Rinse under cold water until water runs clear.",
                    "Soak in cold water for 30 minutes, then pat dry.",
                    "Heat oil to 325°F (165°C) in deep fryer or heavy pot.",
                    "Fry potatoes in batches for 5 minutes until soft but not brown.",
                    "Drain on paper towels and let cool for 10 minutes.",
                    "Increase oil temperature to 375°F (190°C).",
                    "Fry again until golden and crispy, about 3-5 minutes.",
                    "Season immediately with salt and optional spices."
                ],
                calories: 365,
                difficulty: "Medium",
                time: "45 mins",
                servings: 4,
                image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1736",
                category: "Fast Food",
                dietary: ["Vegetarian", "Vegan", "Gluten-Free"],
                substitutions: {
                    "potatoes": ["sweet potatoes", "carrots"],
                    "frying": ["baking", "air frying"]
                }
            },
            "Chicken Nuggets": {
                name: "Crispy Chicken Nuggets",
                ingredients: [
                    "1 lb boneless chicken breast, cut into 1-inch pieces",
                    "1 cup buttermilk",
                    "1 cup all-purpose flour",
                    "1 cup panko breadcrumbs",
                    "1 tsp garlic powder",
                    "1 tsp paprika",
                    "1/2 tsp salt",
                    "1/4 tsp black pepper",
                    "Vegetable oil for frying"
                ],
                instructions: [
                    "Marinate chicken in buttermilk for 30 minutes.",
                    "In a bowl, mix flour, garlic powder, paprika, salt, and pepper.",
                    "Dredge chicken pieces in flour mixture, shaking off excess.",
                    "Dip in buttermilk again, then coat with panko breadcrumbs.",
                    "Heat oil to 350°F (175°C) in deep fryer or skillet.",
                    "Fry nuggets in batches for 4-5 minutes until golden brown.",
                    "Drain on paper towels and serve with dipping sauces."
                ],
                calories: 310,
                difficulty: "Easy",
                time: "40 mins",
                servings: 4,
                image: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?q=80&w=1740",
                category: "Fast Food",
                dietary: ["Gluten-Free"],
                substitutions: {
                    "chicken": ["tofu", "cauliflower"],
                    "flour": ["almond flour", "gluten-free flour"]
                }
            }
        };

        // DOM Elements
        const cameraSection = document.getElementById('cameraSection');
        const recipeView = document.getElementById('recipeView');
        const cameraToggle = document.getElementById('cameraToggle');
        const uploadToggle = document.getElementById('uploadToggle');
        const cameraView = document.getElementById('cameraView');
        const uploadView = document.getElementById('uploadView');
        const captureBtn = document.getElementById('captureBtn');
        const fileUploadArea = document.getElementById('fileUploadArea');
        const fileInput = document.getElementById('fileInput');
        const imagePreview = document.getElementById('imagePreview');
        const previewImg = document.getElementById('previewImg');
        const cancelUploadBtn = document.getElementById('cancelUploadBtn');
        const analyzeUploadBtn = document.getElementById('analyzeUploadBtn');
        const loadingView = document.getElementById('loadingView');
        const dishIdentificationView = document.getElementById('dishIdentificationView');
        const dishOptions = document.getElementById('dishOptions');
        const confirmDishBtn = document.getElementById('confirmDishBtn');
        const newSearchBtn = document.getElementById('newSearchBtn');
        const printBtn = document.getElementById('printBtn');
        const shoppingListBtn = document.getElementById('shoppingListBtn');
        const recipeTitle = document.getElementById('recipeTitle');
        const recipeImage = document.getElementById('recipeImage');
        const timeBadge = document.getElementById('timeBadge');
        const difficultyBadge = document.getElementById('difficultyBadge');
        const servingsBadge = document.getElementById('servingsBadge');
        const caloriesBadge = document.getElementById('caloriesBadge');
        const ingredientsList = document.getElementById('ingredientsList');
        const instructionsList = document.getElementById('instructionsList');
        const caloriesDetail = document.getElementById('caloriesDetail');
        const cameraPreview = document.getElementById('cameraPreview');
        const historyView = document.getElementById('historyView');
        const historyContainer = document.querySelector('.history-container');
        const historyList = document.getElementById('historyList');
        const emptyHistory = document.getElementById('emptyHistory');
        const historyLink = document.getElementById('historyLink');
        const historyLinkFooter = document.getElementById('historyLinkFooter');
        const closeHistory = document.querySelector('.close-history');
        const darkModeToggle = document.getElementById('darkModeToggle');
        const mealPlannerBtn = document.getElementById('mealPlannerBtn');
        const mealPlannerView = document.getElementById('mealPlannerView');
        const mealPlannerContainer = document.querySelector('.meal-planner-container');
        const closePlanner = document.querySelector('.close-planner');
        const shoppingListView = document.getElementById('shoppingListView');
        const shoppingListContainer = document.querySelector('.shopping-list-container');
        const closeShopping = document.querySelector('.close-shopping');
        const progressBar = document.getElementById('progressBar');
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toastMessage');
        const shareRecipeBtn = document.getElementById('shareRecipeBtn');
        const playButtons = document.querySelectorAll('.play-button');
        const voiceControlBtn = document.getElementById('voiceControlBtn');
        const voiceControlNav = document.getElementById('voiceControlNav');
        const timerContainer = document.getElementById('timerContainer');
        const timerDisplay = document.getElementById('timerDisplay');
        const timerStart = document.getElementById('timerStart');
        const timerPause = document.getElementById('timerPause');
        const timerReset = document.getElementById('timerReset');
        const closeTimer = document.querySelector('.close-timer');
        const dietaryFilters = document.querySelectorAll('.dietary-filter');
        const recognitionProgressBar = document.getElementById('recognitionProgressBar');
        const recipeProgressBar = document.getElementById('recipeProgressBar');
        const recognitionProgress = document.getElementById('recognitionProgress');
        const recipeProgress = document.getElementById('recipeProgress');
        const clearHistoryBtn = document.getElementById('clearHistory');

        // Variables for camera
        let stream = null;
        let video = null;
        let canvas = null;
        let selectedDish = null;
        let history = [];
        let isDarkMode = localStorage.getItem('darkMode') === 'true';
        let timerInterval = null;
        let timerSeconds = 600; // 10 minutes in seconds
        let recognition = null;
        let isListening = false;
        
        // Initialize the app
        function initApp() {
            // Set initial dark mode
            if (isDarkMode) {
                document.body.classList.add('dark-mode');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
            
            // Camera/Upload toggle
            cameraToggle.addEventListener('click', () => {
                cameraToggle.classList.add('active');
                uploadToggle.classList.remove('active');
                cameraView.classList.remove('hidden');
                uploadView.classList.add('hidden');
                startCamera();
            });
            
            uploadToggle.addEventListener('click', () => {
                uploadToggle.classList.add('active');
                cameraToggle.classList.remove('active');
                uploadView.classList.remove('hidden');
                cameraView.classList.add('hidden');
                stopCamera();
            });
            
            // File upload
            fileUploadArea.addEventListener('click', () => {
                fileInput.click();
            });
            
            fileInput.addEventListener('change', handleFileSelect);
            cancelUploadBtn.addEventListener('click', cancelUpload);
            analyzeUploadBtn.addEventListener('click', analyzeUpload);
            
            // Capture button
            captureBtn.addEventListener('click', captureImage);
            
            // New search
            newSearchBtn.addEventListener('click', () => {
                recipeView.classList.add('hidden');
                cameraSection.classList.remove('hidden');
                startCamera();
            });
            
            // Print button
            printBtn.addEventListener('click', () => {
                window.print();
            });
            
            // Shopping list button
            shoppingListBtn.addEventListener('click', () => {
                shoppingListView.style.display = 'flex';
                setTimeout(() => {
                    shoppingListContainer.classList.add('show');
                }, 10);
            });
            
            // Confirm dish selection
            confirmDishBtn.addEventListener('click', confirmDishSelection);
            
            // History links
            historyLink.addEventListener('click', showHistory);
            historyLinkFooter.addEventListener('click', showHistory);
            
            // Close history view
            closeHistory.addEventListener('click', hideHistory);
            
            // Dark mode toggle
            darkModeToggle.addEventListener('click', toggleDarkMode);
            
            // Meal planner button
            mealPlannerBtn.addEventListener('click', () => {
                mealPlannerView.style.display = 'flex';
                setTimeout(() => {
                    mealPlannerContainer.classList.add('show');
                }, 10);
            });
            
            // Close meal planner
            closePlanner.addEventListener('click', () => {
                mealPlannerContainer.classList.remove('show');
                setTimeout(() => {
                    mealPlannerView.style.display = 'none';
                }, 300);
            });
            
            // Close shopping list
            closeShopping.addEventListener('click', () => {
                shoppingListContainer.classList.remove('show');
                setTimeout(() => {
                    shoppingListView.style.display = 'none';
                }, 300);
            });
            
            // Share recipe button
            shareRecipeBtn.addEventListener('click', shareRecipe);
            
            // Video play buttons
            playButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const videoId = button.getAttribute('data-video');
                    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
                });
            });
            
            // Shopping list checkboxes
            document.querySelectorAll('.shopping-item input[type="checkbox"]').forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        this.parentElement.classList.add('checked');
                    } else {
                        this.parentElement.classList.remove('checked');
                    }
                });
            });
            
            // Progress bar on scroll
            window.addEventListener('scroll', updateProgressBar);
            
            // Start camera by default
            startCamera();
            
            // Load history from localStorage
            loadHistory();
            
            // Voice control buttons
            voiceControlBtn.addEventListener('click', toggleVoiceControl);
            voiceControlNav.addEventListener('click', toggleVoiceControl);
            
            // Timer buttons
            timerStart.addEventListener('click', startTimer);
            timerPause.addEventListener('click', pauseTimer);
            timerReset.addEventListener('click', resetTimer);
            closeTimer.addEventListener('click', () => {
                timerContainer.classList.remove('active');
            });
            
            // Timer buttons in recipe steps
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('timer-btn')) {
                    const minutes = parseInt(e.target.getAttribute('data-time'));
                    setTimer(minutes);
                }
            });
            
            // Dietary filters
            dietaryFilters.forEach(filter => {
                filter.addEventListener('click', () => {
                    dietaryFilters.forEach(f => f.classList.remove('active'));
                    filter.classList.add('active');
                    const filterType = filter.getAttribute('data-filter');
                    filterDishes(filterType);
                });
            });
            
            // Clear history button
            clearHistoryBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to clear your recipe history?')) {
                    history = [];
                    saveHistory();
                    renderHistory();
                    showToast('History cleared successfully');
                }
            });
        }
        
        // Update progress bar
        function updateProgressBar() {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            progressBar.style.width = scrolled + "%";
        }
        
        // Show toast notification
        function showToast(message) {
            toastMessage.textContent = message;
            toast.classList.add('show');
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }
        
        // Share recipe
        function shareRecipe() {
            if (navigator.share) {
                navigator.share({
                    title: recipeTitle.textContent,
                    text: 'Check out this delicious recipe I found!',
                    url: window.location.href
                })
                .then(() => showToast('Recipe shared successfully!'))
                .catch(error => showToast('Error sharing recipe'));
            } else {
                // Fallback for browsers that don't support Web Share API
                const tempInput = document.createElement('input');
                document.body.appendChild(tempInput);
                tempInput.value = window.location.href;
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                showToast('Link copied to clipboard!');
            }
        }
        
        // Toggle dark mode
        function toggleDarkMode() {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle('dark-mode', isDarkMode);
            localStorage.setItem('darkMode', isDarkMode.toString());
            
            if (isDarkMode) {
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                showToast('Dark mode enabled');
            } else {
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                showToast('Light mode enabled');
            }
        }
        
        // Start camera function
        async function startCamera() {
            try {
                if (!stream) {
                    stream = await navigator.mediaDevices.getUserMedia({ 
                        video: { facingMode: "environment" } 
                    });
                    
                    // Create video element
                    if (!video) {
                        video = document.createElement('video');
                        video.autoplay = true;
                        video.playsInline = true;
                        video.style.width = '100%';
                        video.style.height = '100%';
                        cameraPreview.innerHTML = '';
                        cameraPreview.appendChild(video);
                    }
                    
                    video.srcObject = stream;
                    
                    // Create canvas for capturing image
                    if (!canvas) {
                        canvas = document.createElement('canvas');
                        canvas.style.display = 'none';
                        document.body.appendChild(canvas);
                    }
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
                cameraPreview.innerHTML = `
                    <div class="text-center p-8">
                        <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fa-solid fa-camera-slash text-red-500 text-2xl"></i>
                        </div>
                        <h3 class="font-bold text-lg mb-2 dark:text-white">Camera Access Denied</h3>
                        <p class="text-gray-600 mb-4 dark:text-gray-300">Please enable camera access to use this feature</p>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Or switch to file upload instead</p>
                    </div>
                `;
            }
        }
        
        // Stop camera function
        function stopCamera() {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
                stream = null;
            }
        }
        
        // Capture image from camera
        function captureImage() {
            if (video && canvas) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const context = canvas.getContext('2d');
                context.drawImage(video, 0, 0, canvas.width, canvas.height);
                
                // Convert to data URL and simulate upload
                const imageData = canvas.toDataURL('image/jpeg');
                processImage(imageData);
            }
        }
        
        // Handle file selection
        function handleFileSelect(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            // Check if file is an image
            if (!file.type.match('image.*')) {
                alert('Please select an image file');
                return;
            }
            
            // Preview image
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImg.src = e.target.result;
                imagePreview.classList.remove('hidden');
                fileUploadArea.classList.add('hidden');
            };
            reader.readAsDataURL(file);
        }
        
        // Cancel upload
        function cancelUpload() {
            fileInput.value = '';
            imagePreview.classList.add('hidden');
            fileUploadArea.classList.remove('hidden');
        }
        
        // Analyze uploaded image
        function analyzeUpload() {
            if (previewImg.src) {
                processImage(previewImg.src);
            }
        }
        
        // Process image (simulate AI analysis)
        function processImage(imageData) {
            // Show loading screen
            cameraView.classList.add('hidden');
            uploadView.classList.add('hidden');
            loadingView.classList.remove('hidden');
            
            // Reset progress bars
            recognitionProgressBar.style.width = '0%';
            recipeProgressBar.style.width = '0%';
            recognitionProgress.textContent = '0%';
            recipeProgress.textContent = '0%';
            
            // Simulate AI processing with progress
            let recognitionProgressValue = 0;
            let recipeProgressValue = 0;
            
            const recognitionInterval = setInterval(() => {
                recognitionProgressValue += 5;
                recognitionProgressBar.style.width = recognitionProgressValue + '%';
                recognitionProgress.textContent = recognitionProgressValue + '%';
                
                if (recognitionProgressValue >= 85) {
                    clearInterval(recognitionInterval);
                    
                    const recipeInterval = setInterval(() => {
                        recipeProgressValue += 5;
                        recipeProgressBar.style.width = recipeProgressValue + '%';
                        recipeProgress.textContent = recipeProgressValue + '%';
                        
                        if (recipeProgressValue >= 70) {
                            clearInterval(recipeInterval);
                            
                            // Show dish options after processing
                            setTimeout(() => {
                                loadingView.classList.add('hidden');
                                showDishOptions();
                            }, 500);
                        }
                    }, 150);
                }
            }, 100);
        }
        
        // Show dish options after analysis
        function showDishOptions() {
            // Get 3 random dishes from the database
            const allRecipes = Object.values(recipes);
            const shuffled = [...allRecipes].sort(() => 0.5 - Math.random());
            const selectedRecipes = shuffled.slice(0, 3);
            
            // Clear previous options
            dishOptions.innerHTML = '';
            
            // Create dish option cards
            selectedRecipes.forEach((recipe, index) => {
                const dishOption = document.createElement('div');
                dishOption.className = `dish-option bg-white rounded-xl shadow-md overflow-hidden fade-in delay-${index * 100} dark:bg-gray-700`;
                dishOption.dataset.category = recipe.dietary.join(' ').toLowerCase();
                dishOption.innerHTML = `
                    <div class="bg-gray-100 h-48 overflow-hidden dark:bg-gray-600">
                        <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-full object-cover">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold mb-2 dark:text-white">${recipe.name}</h3>
                        <div class="flex flex-wrap gap-2">
                            <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded dark:bg-purple-900 dark:text-purple-100">${recipe.time}</span>
                            ${recipe.dietary.map(tag => `
                                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded dark:bg-green-900 dark:text-green-100">${tag}</span>
                            `).join('')}
                        </div>
                    </div>
                `;
                
                // Add click handler
                dishOption.addEventListener('click', () => {
                    // Remove selection from all options
                    document.querySelectorAll('.dish-option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    // Add selection to clicked option
                    dishOption.classList.add('selected');
                    selectedDish = recipe.name;
                    confirmDishBtn.disabled = false;
                });
                
                dishOptions.appendChild(dishOption);
            });
            
            // Reset selection
            selectedDish = null;
            confirmDishBtn.disabled = true;
            
            // Show dish identification view
            dishIdentificationView.classList.remove('hidden');
        }
        
        // Confirm dish selection
        function confirmDishSelection() {
            if (selectedDish) {
                displayRecipe(selectedDish);
            } else {
                showToast("Please select a dish first!");
            }
        }
        
        // Display recipe
        function displayRecipe(recipeName) {
            const recipe = recipes[recipeName];
            
            if (recipe) {
                // Update recipe view
                recipeTitle.textContent = recipe.name;
                recipeImage.src = recipe.image;
                timeBadge.querySelector('span').textContent = recipe.time;
                difficultyBadge.querySelector('span').textContent = recipe.difficulty;
                servingsBadge.querySelector('span').textContent = `${recipe.servings} servings`;
                caloriesBadge.querySelector('span').textContent = `${recipe.calories} calories`;
                
                // Update dietary tags
                const dietaryTags = document.querySelector('.dietary-tags');
                dietaryTags.innerHTML = '';
                recipe.dietary.forEach(tag => {
                    let tagClass = 'recipe-card-tag';
                    if (tag.toLowerCase().includes('vegetarian')) tagClass += ' vegetarian';
                    if (tag.toLowerCase().includes('gluten')) tagClass += ' gluten-free';
                    if (tag.toLowerCase().includes('quick')) tagClass += ' quick';
                    
                    const tagElement = document.createElement('span');
                    tagElement.className = tagClass;
                    tagElement.innerHTML = `<i class="fas ${getTagIcon(tag)} mr-1"></i>${tag}`;
                    dietaryTags.appendChild(tagElement);
                });
                
                // Update ingredients
                ingredientsList.innerHTML = '';
                recipe.ingredients.forEach((ingredient, index) => {
                    const li = document.createElement('li');
                    li.className = `ingredient-item slide-in-left delay-${index * 100} dark:text-gray-300`;
                    li.textContent = ingredient;
                    
                    // Add substitution icon if available
                    const ingredientName = ingredient.split(' ').slice(1).join(' ').replace(',', '').trim();
                    if (recipe.substitutions && recipe.substitutions[ingredientName]) {
                        const subIcon = document.createElement('span');
                        subIcon.className = 'substitution-icon';
                        subIcon.innerHTML = '<i class="fas fa-exchange-alt"></i>';
                        subIcon.title = 'Substitution suggestions';
                        
                        li.appendChild(subIcon);
                        
                        // Create substitution popup
                        const popup = document.createElement('div');
                        popup.className = 'substitution-popup dark:bg-gray-800';
                        popup.innerHTML = `
                            <div class="font-bold mb-2 dark:text-white">Substitutions for ${ingredientName}</div>
                            ${recipe.substitutions[ingredientName].map(sub => `
                                <div class="substitution-item dark:text-gray-300">${sub}</div>
                            `).join('')}
                        `;
                        
                        li.appendChild(popup);
                        
                        // Add event listeners for substitution
                        subIcon.addEventListener('click', (e) => {
                            e.stopPropagation();
                            document.querySelectorAll('.substitution-popup').forEach(p => p.classList.remove('active'));
                            popup.classList.toggle('active');
                        });
                    }
                    
                    ingredientsList.appendChild(li);
                });
                
                // Update instructions
                instructionsList.innerHTML = '';
                recipe.instructions.forEach((step, index) => {
                    const li = document.createElement('li');
                    li.className = `step-item slide-in-right delay-${index * 100} dark:text-gray-300`;
                    
                    const stepNumber = document.createElement('div');
                    stepNumber.className = 'step-number';
                    stepNumber.textContent = index + 1;
                    
                    const p = document.createElement('p');
                    p.textContent = step;
                    
                    // Add timer button if step mentions time
                    const timeMatch = step.match(/(\d+)\s*min/);
                    if (timeMatch) {
                        const time = parseInt(timeMatch[1]);
                        const timerBtn = document.createElement('button');
                        timerBtn.className = 'timer-btn';
                        timerBtn.innerHTML = `<i class="fas fa-clock mr-1"></i> Set ${time} min timer`;
                        timerBtn.setAttribute('data-time', time);
                        li.appendChild(timerBtn);
                    }
                    
                    li.appendChild(stepNumber);
                    li.appendChild(p);
                    instructionsList.appendChild(li);
                });
                
                // Update calories
                caloriesDetail.textContent = recipe.calories;
                
                // Add to history
                addToHistory(recipe);
                
                // Show recipe view
                recipeView.classList.remove('hidden');
                dishIdentificationView.classList.add('hidden');
                cameraSection.classList.add('hidden');
                
                // Scroll to recipe
                window.scrollTo({
                    top: recipeView.offsetTop - 80,
                    behavior: 'smooth'
                });
            } else {
                console.error("Recipe not found:", recipeName);
            }
        }
        
        // Get icon for dietary tag
        function getTagIcon(tag) {
            if (tag.toLowerCase().includes('vegetarian')) return 'fa-leaf';
            if (tag.toLowerCase().includes('vegan')) return 'fa-seedling';
            if (tag.toLowerCase().includes('gluten')) return 'fa-bread-slice';
            if (tag.toLowerCase().includes('quick')) return 'fa-bolt';
            return 'fa-tag';
        }
        
        // Add recipe to history
        function addToHistory(recipe) {
            // Check if recipe already exists in history
            const existingIndex = history.findIndex(item => item.name === recipe.name);
            
            if (existingIndex !== -1) {
                // Remove existing to add to top
                history.splice(existingIndex, 1);
            }
            
            // Add to beginning of history
            history.unshift(recipe);
            
            // Limit history to 10 items
            if (history.length > 10) {
                history.pop();
            }
            
            // Save to localStorage
            saveHistory();
        }
        
        // Save history to localStorage
        function saveHistory() {
            localStorage.setItem('recipeHistory', JSON.stringify(history));
        }
        
        // Load history from localStorage
        function loadHistory() {
            const savedHistory = localStorage.getItem('recipeHistory');
            if (savedHistory) {
                history = JSON.parse(savedHistory);
            }
        }
        
        // Show history view
        function showHistory() {
            historyView.style.display = 'flex';
            setTimeout(() => {
                historyContainer.classList.add('show');
            }, 10);
            
            renderHistory();
        }
        
        // Hide history view
        function hideHistory() {
            historyContainer.classList.remove('show');
            setTimeout(() => {
                historyView.style.display = 'none';
            }, 300);
        }
        
        // Render history list
        function renderHistory() {
            historyList.innerHTML = '';
            
            if (history.length === 0) {
                emptyHistory.style.display = 'block';
                return;
            }
            
            emptyHistory.style.display = 'none';
            
            history.forEach((recipe, index) => {
                const historyItem = document.createElement('div');
                historyItem.className = `history-card bg-white rounded-xl overflow-hidden shadow-md fade-in delay-${index * 100} dark:bg-gray-700`;
                historyItem.innerHTML = `
                    <div class="flex">
                        <div class="w-1/3">
                            <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="p-4 w-2/3">
                            <h3 class="text-lg font-bold mb-2 dark:text-white">${recipe.name}</h3>
                            <div class="text-sm text-gray-600 dark:text-gray-300 flex items-center mb-3">
                                <i class="fas fa-clock mr-2"></i>${recipe.time}
                            </div>
                            <div class="flex flex-wrap gap-2">
                                ${recipe.dietary.map(tag => `
                                    <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded dark:bg-purple-900 dark:text-purple-100">${tag}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
                
                historyItem.addEventListener('click', () => {
                    displayRecipe(recipe.name);
                    hideHistory();
                });
                
                historyList.appendChild(historyItem);
            });
        }
        
        // Toggle voice control
        function toggleVoiceControl() {
            if (!recognition) {
                if ('webkitSpeechRecognition' in window) {
                    recognition = new webkitSpeechRecognition();
                    recognition.continuous = false;
                    recognition.interimResults = false;
                    recognition.lang = 'en-US';
                    
                    recognition.onresult = function(event) {
                        const command = event.results[0][0].transcript.toLowerCase();
                        handleVoiceCommand(command);
                    };
                    
                    recognition.onerror = function(event) {
                        console.error('Speech recognition error', event.error);
                        showToast('Voice command failed. Please try again.');
                        isListening = false;
                        updateVoiceButton();
                    };
                    
                    recognition.onend = function() {
                        isListening = false;
                        updateVoiceButton();
                    };
                } else {
                    showToast('Voice commands not supported in your browser');
                    return;
                }
            }
            
            if (!isListening) {
                recognition.start();
                isListening = true;
                showToast('Listening...');
            } else {
                recognition.stop();
                isListening = false;
            }
            
            updateVoiceButton();
        }
        
        // Update voice button appearance
        function updateVoiceButton() {
            if (isListening) {
                voiceControlBtn.innerHTML = '<i class="fas fa-microphone-slash"></i>';
                voiceControlBtn.style.background = 'linear-gradient(45deg, #ef4444, #dc2626)';
                voiceControlNav.innerHTML = '<i class="fas fa-microphone-slash"></i>';
            } else {
                voiceControlBtn.innerHTML = '<i class="fas fa-microphone"></i>';
                voiceControlBtn.style.background = 'linear-gradient(45deg, #f59e0b, #ef4444)';
                voiceControlNav.innerHTML = '<i class="fas fa-microphone"></i>';
            }
        }
        
        // Handle voice commands
        function handleVoiceCommand(command) {
            showToast(`Command: ${command}`);
            
            if (command.includes('find recipe') || command.includes('search')) {
                document.getElementById('cameraSection').scrollIntoView({behavior: 'smooth'});
            } else if (command.includes('history')) {
                showHistory();
            } else if (command.includes('dark mode')) {
                toggleDarkMode();
            } else if (command.includes('meal planner')) {
                mealPlannerBtn.click();
            } else if (command.includes('new search')) {
                newSearchBtn.click();
            } else if (command.includes('home')) {
                document.getElementById('home').scrollIntoView({behavior: 'smooth'});
            } else if (command.includes('reviews')) {
                document.getElementById('reviews').scrollIntoView({behavior: 'smooth'});
            } else {
                showToast('Command not recognized');
            }
        }
        
        // Set cooking timer
        function setTimer(minutes) {
            timerSeconds = minutes * 60;
            updateTimerDisplay();
            timerContainer.classList.add('active');
            resetTimer();
        }
        
        // Start timer
        function startTimer() {
            if (timerInterval) return;
            
            timerInterval = setInterval(() => {
                timerSeconds--;
                updateTimerDisplay();
                
                if (timerSeconds <= 0) {
                    clearInterval(timerInterval);
                    timerInterval = null;
                    showToast('Timer finished!');
                    document.getElementById('timerSound').play();
                }
            }, 1000);
        }
        
        // Pause timer
        function pauseTimer() {
            if (timerInterval) {
                clearInterval(timerInterval);
                timerInterval = null;
            }
        }
        
        // Reset timer
        function resetTimer() {
            pauseTimer();
            updateTimerDisplay();
        }
        
        // Update timer display
        function updateTimerDisplay() {
            const minutes = Math.floor(timerSeconds / 60);
            const seconds = timerSeconds % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        // Filter dishes by dietary preference
        function filterDishes(filter) {
            const dishOptions = document.querySelectorAll('.dish-option');
            
            dishOptions.forEach(option => {
                if (filter === 'all') {
                    option.style.display = 'block';
                } else {
                    const categories = option.dataset.category;
                    if (categories.includes(filter)) {
                        option.style.display = 'block';
                    } else {
                        option.style.display = 'none';
                    }
                }
            });
        }
        
        // Initialize the app when DOM is loaded
        document.addEventListener('DOMContentLoaded', initApp);
        
        // Close popups when clicking outside
        document.addEventListener('click', (e) => {
            // Close substitution popups

            if (!e.target.closest('.substitution-icon') && !e.target.closest('.substitution-popup')) {
                document.querySelectorAll('.substitution-popup').forEach(popup => {
                    popup.classList.remove('active');
                });
            }
        });
