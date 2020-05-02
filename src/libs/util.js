let util = {

};

util.title = function(title) {
    title = title ? title + ' - Home' : 'View UI zgf';
    window.document.title = title;
};

export default util;