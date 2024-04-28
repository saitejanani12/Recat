// let div_tag = React.createElement('div',{id:'main_div'},
// React.createElement('div',{id:'inner_div'},
// React.createElement('h1',{id:'Main_heading'},'I Love Python and Django Framework'),
// React.createElement('h2',{id:'inner_h2'},
// React.createElement('b',{},'I am Sai teja')),));
// ReactDOM.createRoot(document.body).render(div_tag)
let parent_div = React.createElement('div',{id:'main_div'},
[React.createElement('h1',{},'I love Python & Django'),React.createElement('h2',{},'I love Javascript & React ')
])
ReactDOM.createRoot(document.body).render(parent_div)