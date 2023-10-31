// import { x, y, sayHello } from './module1.js';
// import MyUser from './module1.js';
// import { throttle } from 'lodash';
// throttle();

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
            Your first lightbox with just a few lines of code.
            Yes, it's really that simple.
        </p>
    </div>
`);

instance.show();
