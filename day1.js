let div_tag = React.createElement('div',{id:'main_div'},
React.createElement('div',{id:'inner_div'},
React.createElement('h1',{id:'Main_heading'},'I Love Python and Django Framework'),
React.createElement('h2',{id:'inner_h2'},
React.createElement('b',{},'I am Sai teja')),));
ReactDOM.createRoot(document.body).render(div_tag)