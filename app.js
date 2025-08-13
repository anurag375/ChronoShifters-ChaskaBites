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
        category: "Italian"
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
        category: "Indian"
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
        category: "Dessert"
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
        category: "Asian"
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
        category: "American"
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
        category: "Salad"
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
        category: "Fast Food"
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
        category: "Fast Food"
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
        category: "Fast Food"
    },
    "Grilled Cheese Sandwich": {
        name: "Classic Grilled Cheese",
        ingredients: [
            "4 slices bread (sourdough or white)",
            "4 slices cheddar cheese",
            "2 slices American cheese",
            "2 tbsp butter, softened",
            "Optional: tomato slices, bacon, or ham"
        ],
        instructions: [
            "Butter one side of each bread slice.",
            "Heat skillet over medium-low heat.",
            "Place bread buttered-side down in skillet.",
            "Add cheeses and optional fillings to bread.",
            "Top with second slice of bread, buttered-side up.",
            "Cook until golden brown, about 3-4 minutes per side.",
            "Press down gently with spatula to help melt cheese.",
            "Cut diagonally and serve immediately."
        ],
        calories: 450,
        difficulty: "Easy",
        time: "15 mins",
        servings: 2,
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=1746",
        category: "Fast Food"
    },
    "Nachos Supreme": {
        name: "Loaded Nachos Supreme",
        ingredients: [
            "1 bag tortilla chips",
            "1 cup cooked ground beef or chicken",
            "1 cup shredded cheddar cheese",
            "1 cup shredded Monterey Jack cheese",
            "1/2 cup black beans, rinsed",
            "1/4 cup sliced jalapeños",
            "1/2 cup diced tomatoes",
            "1/4 cup sliced black olives",
            "1/4 cup sliced green onions",
            "1/4 cup sour cream",
            "1/4 cup guacamole",
            "1/4 cup salsa"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Spread tortilla chips on baking sheet.",
            "Sprinkle with cooked meat, beans, and cheeses.",
            "Bake for 10-12 minutes until cheese is melted.",
            "Top with tomatoes, jalapeños, and olives.",
            "Drizzle with sour cream, guacamole, and salsa.",
            "Garnish with green onions and serve immediately."
        ],
        calories: 520,
        difficulty: "Easy",
        time: "20 mins",
        servings: 4,
        image: "https://images.unsplash.com/photo-1617196035154-1e1b6b5b4d0d?q=80&w=1740",
        category: "Fast Food"
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

// Variables for camera
let stream = null;
let video = null;
let canvas = null;
let selectedDish = null;
let history = [];

// Initialize the app
function initApp() {
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

    // Confirm dish selection
    confirmDishBtn.addEventListener('click', confirmDishSelection);

    // History links
    historyLink.addEventListener('click', showHistory);
    historyLinkFooter.addEventListener('click', showHistory);

    // Close history view
    closeHistory.addEventListener('click', hideHistory);

    // Start camera by default
    startCamera();

    // Load history from localStorage
    loadHistory();
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
                        <h3 class="font-bold text-lg mb-2">Camera Access Denied</h3>
                        <p class="text-gray-600 mb-4">Please enable camera access to use this feature</p>
                        <p class="text-sm text-gray-500">Or switch to file upload instead</p>
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

    // Simulate AI processing
    setTimeout(() => {
        loadingView.classList.add('hidden');
        showDishOptions();
    }, 3000);
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
        dishOption.className = `dish-option bg-white rounded-xl shadow-md overflow-hidden fade-in delay-${index * 100}`;
        dishOption.innerHTML = `
                    <div class="bg-gray-100 h-48 overflow-hidden">
                        <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-full object-cover">
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold mb-2">${recipe.name}</h3>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded">${recipe.category}</span>
                            <span class="ml-2 text-sm text-gray-600">${recipe.time}</span>
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
        alert("Please select a dish first!");
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

        // Update ingredients
        ingredientsList.innerHTML = '';
        recipe.ingredients.forEach((ingredient, index) => {
            const li = document.createElement('li');
            li.className = `ingredient-item slide-in-left delay-${index * 100}`;
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });

        // Update instructions
        instructionsList.innerHTML = '';
        recipe.instructions.forEach((step, index) => {
            const li = document.createElement('li');
            li.className = `step-item slide-in-right delay-${index * 100}`;

            const stepNumber = document.createElement('div');
            stepNumber.className = 'step-number';
            stepNumber.textContent = index + 1;

            const p = document.createElement('p');
            p.textContent = step;

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
        historyItem.className = `history-card bg-white rounded-xl overflow-hidden shadow-md fade-in delay-${index * 100}`;
        historyItem.innerHTML = `
                    <div class="flex">
                        <div class="w-1/3">
                            <img src="${recipe.image}" alt="${recipe.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="p-4 w-2/3">
                            <h3 class="text-lg font-bold mb-2">${recipe.name}</h3>
                            <div class="flex flex-wrap gap-2 mb-3">
                                <span class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">${recipe.time}</span>
                                <span class="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">${recipe.difficulty}</span>
                                <span class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">${recipe.calories} cal</span>
                            </div>
                            <div class="flex items-center">
                                <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">${recipe.category}</span>
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

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
