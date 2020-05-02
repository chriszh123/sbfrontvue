import HelloWorld from '@/components/HelloWorld';
import button from '@/components/iview/button';

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
}];
export default routers;