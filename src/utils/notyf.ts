import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'

let notyf: Notyf

export const getNotyf = () => {
    if (typeof window === 'undefined') return null;
    if (!notyf) {
        notyf = new Notyf({
            duration: 1300,
            position: { x: 'center', y: 'top'},
            dismissible: true,
            
        })
    }
    return notyf;
}