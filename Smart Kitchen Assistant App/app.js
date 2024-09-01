const dishes = [
  {
    id: 1,
    rank: "#1 Most loved dish",
    name: "Margherita Pizza",
    imageSrc: "assets/images/pizza-1.png",
    rating: "4.9",
    reviewer: "John Doe",
    reviewHeading: "Absolutely Delicious!",
    reviewDetails: "The Margherita Pizza was fantastic! The crust was perfectly crispy, and the blend of cheese and tomato was just right. Highly recommended!",
    likes: 2345,
    dislikes: 12
  },
  {
    id: 2,
    rank: "#2 Most loved dish",
    name: "Pepperoni Pizza",
    imageSrc: "assets/images/pizza-5.png",
    rating: "4.8",
    reviewer: "Jane Smith",
    reviewHeading: "Classic and Tasty!",
    reviewDetails: "Pepperoni Pizza never disappoints. The pepperoni was spicy and the cheese melted just right. A must-try for pepperoni lovers!",
    likes: 1987,
    dislikes: 25
  },
  {
    id: 3,
    rank: "#3 Most loved dish",
    name: "Chicken Pizza",
    imageSrc: "assets/images/pizza-3.png",
    rating: "4.7",
    reviewer: "Michael Brown",
    reviewHeading: "Savory and Smoky!",
    reviewDetails: "The BBQ Chicken Pizza was a perfect blend of smoky flavors and tender chicken. The BBQ sauce added a nice kick to every bite.",
    likes: 1754,
    dislikes: 18
  },
  {
    id: 4,
    rank: "#4 Most loved dish",
    name: "Veggie Pizza",
    imageSrc: "assets/images/pizza-4.png",
    rating: "4.6",
    reviewer: "Emily Clark",
    reviewHeading: "Healthy and Delicious!",
    reviewDetails: "Veggie Supreme Pizza was packed with fresh vegetables and had a delightful crunch. A great choice for vegetarians!",
    likes: 1602,
    dislikes: 10
  },
  {
    id: 5,
    rank: "#5 Most loved dish",
    name: "Cheese Pizza",
    imageSrc: "assets/images/pizza-5.png",
    rating: "4.5",
    reviewer: "David Wilson",
    reviewHeading: "Cheese Lover's Dream!",
    reviewDetails: "The Four Cheese Pizza was rich and creamy with a perfect balance of different cheese flavors. A real treat for cheese enthusiasts!",
    likes: 1489,
    dislikes: 20
  }
];

document.querySelector('.dish-overview').classList.add('show');

function updateCaraousel() {
  const carouselHtml = dishes.slice(0,4).map((dish, index) => {
    return `
      <div class="${index === 0 ? 'active-dish' : ''}">
        <img  src="${dish.imageSrc}" alt="${dish.name}">
        <p>${dish.name}</p>
      </div>
    `;
  }).join(''); // Join array elements into a single string

  document.querySelector('.dish-caraousel-button').innerHTML = carouselHtml;

  // Add event listeners to carousel buttons after they are added to the DOM
  document.querySelectorAll('.dish-caraousel-button > div').forEach(button => {
    button.addEventListener('click', handleCarouselButtonClick);
  });
}

function updateDishInfo(dish) {

  document.getElementById('dishImage').src = dish.imageSrc;
  document.getElementById('dishRank').textContent = dish.rank;
  document.getElementById('dishName').textContent = dish.name;
  
  document.getElementById('ratings').textContent = dish.rating;
  document.getElementById('reviewHeading').textContent = dish.reviewHeading;
  document.getElementById('reviewDetails').textContent = dish.reviewDetails;
  
  document.querySelector('#like-dislike .fa-thumbs-up').textContent = ` ${dish.likes}`;
  document.querySelector('#like-dislike .fa-thumbs-down').textContent = ` ${dish.dislikes}`;
}

function handleCarouselButtonClick(event) {
  const carouselButtons = document.querySelectorAll('.dish-caraousel-button > div');
  carouselButtons.forEach(button => button.classList.remove('active-dish'));
  
  const index = Array.from(carouselButtons).indexOf(event.currentTarget);
  
  if (index >= 0 && index < dishes.length) {
    updateDishInfo(dishes[index]);
    event.currentTarget.classList.add('active-dish');
    const imageElement = document.getElementById('dishImage');
    if (imageElement) {
        imageElement.classList.remove('dish-selected-image-animation'); // Remove the class if it exists
        void imageElement.offsetWidth; // Trigger reflow
        imageElement.classList.add('dish-selected-image-animation'); // Add the class to trigger animation
    }
  }
}

// Initialize with the first dish and add .active-dish class to the first carousel button
updateCaraousel();
const initialDish = dishes[0];
updateDishInfo(initialDish);
