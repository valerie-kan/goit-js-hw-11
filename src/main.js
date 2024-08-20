import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

import { fetchPhotos } from './js/pixabay-api.js';
import { renderGalleryItem } from './js/render-functions.js';

const formEl = document.querySelector('.form');
const inputEl = document.querySelector('.form-input');
const gallery = document.querySelector('.gallery-list');
export const loader = document.querySelector('.loader');


formEl.addEventListener('submit', submitForm);

const lightbox = new SimpleLightbox('.gallery-item a', {captionsData: 'alt'});

function submitForm(event) {
    event.preventDefault();
    gallery.innerHTML = '';
    const searchedInfo = inputEl.value;
    if (searchedInfo === '') {
        return
    }

    fetchPhotos(searchedInfo)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    messageColor: 'white',
                    messageSize: '16',
                    color: 'red',
                    iconColor: 'white'
                });
            };

            const createGallery = data.hits.map(imgDetail => renderGalleryItem(imgDetail)).join('');
        
            loader.classList.add('is-hidden');
            gallery.insertAdjacentHTML('afterbegin', createGallery);
            lightbox.refresh();
            formEl.reset();
        })
        .catch (error => console.log(error));
}


