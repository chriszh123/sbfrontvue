import HelloWorld from '@/components/HelloWorld';
import button from '@/components/iview/button';
import icon from '@/components/iview/icon';
import grid from '@/components/iview/grid';

const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: HelloWorld
}, {
    path: '/btn',
    meta: {
        title: ''
    },
    component: button
}, {
    path: '/icon',
    meta: {
        title: ''
    },
    component: icon
}, {
    path: '/grid',
    meta: {
        title: ''
    },
    component: grid
}];
export default routers;