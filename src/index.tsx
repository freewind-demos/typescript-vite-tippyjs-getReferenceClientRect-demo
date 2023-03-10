import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import './index.css';

const button = document.querySelector("#main button");
tippy(button!, {
    content: 'Hello, tippy',
    placement: 'bottom',
    getReferenceClientRect: () => {
        return {
            width: 100,
            height: 100,
            top: 100,
            left: 0,
        } as any
    }
})
