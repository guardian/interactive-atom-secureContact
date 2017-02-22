import mainTemplate from './src/templates/main.html!text'
import Mustache from 'mustache'
import rp from 'request-promise'

export function render() {
    return rp({
        uri: 'https://interactive.guim.co.uk/docsdata-test/1zwT46a03E0_hgMeXyOw1IfXWW8zgTs-QyccWceKbIaQ.json',
        json: true
    }).then((data) => {
	
	       var html = Mustache.render(mainTemplate, data);
           return html;
    });

   
}


