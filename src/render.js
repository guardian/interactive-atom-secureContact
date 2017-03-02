import mainTemplate from './src/templates/main.html!text'
import Mustache from 'mustache'
import rp from 'request-promise'

export function render() {
    return rp({
        uri: 'https://interactive.guim.co.uk/docsdata-test/1WLhHROz2EB2rW25ouywEmw_u-Bi_9W7UDoVlxTHy1Zs.json',
        json: true
    }).then((data) => {
	       var html = Mustache.render(mainTemplate, data);
           return html;
    });

   
}




