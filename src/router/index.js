import HelloWorld from '@/components/HelloWorld';
import button from '@/components/iview/button';
import icon from '@/components/iview/icon';

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
}];
export default routers;