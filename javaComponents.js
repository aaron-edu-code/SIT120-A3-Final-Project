// Local component registration. Utilised to display headings 
// across technology tool pages within project  

// C# heading local component

var component1 = { // template for local heading component 
    template: '<p> C# <br> An Object Orientated Language <p>', 
};

var registration = new Vue({ // Vue app for local component 
    el: '#cHeading',
    data: {

    },
    components: {
        component1 // Component used in Vue app instance 
    },
});

// JavaScript heading local component

var component2 = { // template for local heading component 
    template: '<p> JavaScript <br> Interact With Your Websites <p>',
};

var registration = new Vue({ // Vue app for local component 
    el: '#jsHeading',
    data: {

    },
    components: {
        component2 // Component used in Vue app instance 
    },
});

// Python heading local component

var component3 = { // template for local heading component 
    template: '<p> Python <br> The Jack of All Trades <p>',
};

var registration = new Vue({ // Vue app for local component
    el: '#pythonHeading',
    data: {

    },
    components: {
        component3 // Component used in Vue app instance 
    },
});

// Figma heading local component

var component4 = { // template for local heading component 
    template: '<p> Figma <br> Affordable Design Tools <p>',
};

var registration = new Vue({ // Vue app for local component
    el: '#figmaHeading',
    data: {

    },
    components: {
        component4 // Component used in Vue app instance 
    },
});

// Photoshop heading local component

var component5 = { // template for local heading component 
    template: '<p> Photoshop <br> The Editing Titan <p>',
};

var registration = new Vue({ // Vue app for local component
    el: '#psHeading',
    data: {

    },
    components: {
        component5 // Component used in Vue app instance 
    },
});

// Lightroom heading local component 

var component6 = { // template for local heading component 
    template: '<p> Lightroom <br> Make Photos Standout <p>',
};

var registration = new Vue({ // Vue app for local component
    el: '#lrHeading',
    data: {

    },
    components: {
        component6 // Component used in Vue app instance 
    },
});

// Prop component registration. Utilised to display paragraph text 
// across index (home), about, design and programming pages

var component7 = { // template for paragraph prop component 
    template: '<p> {{ text }} <p>', 
    props: ['text'],
};

var prop = new Vue({ // Vue app for prop component
    el: '#prop',
    data: {
        text: 'defualt',
    },
    components: {
        component7 // Component used in Vue app instance 
    },
});

// Slot component registration, utilised to display contact 
// info on contact page

var component8 = { // template for paragraph prop component 
    template: '<slot></slot>',
};

var slot = new Vue({ // Vue app for slot component
    el: '#slot',
    data: {

    },
    components: {
        component8 // Component used in Vue app instance 
    },
});
