import { loader } from '../main';

const BASE_URL = 'https://pixabay.com/api/';

export function fetchPhotos(value) {
    loader.classList.remove('is-hidden');
    const URLParams = new URLSearchParams({
    key: '45515322-6acc0c0fe7102921e2f085c71',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
    })
    
    return fetch(`${BASE_URL}?${URLParams}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        })
}

