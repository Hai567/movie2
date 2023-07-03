import { Splide } from 'splide';
function getCurrentActiveCard() {
    const activeSlideIndex = splide.index; // Get the index of the active slide
    const activeSlide = splide.Components.Elements.slides[activeSlideIndex]; // Get the active slide element
    const activeCard = activeSlide.querySelector('.FilmCard'); // Assuming '.FilmCard' is the selector for the card element within the slide
    
    return activeCard;
}