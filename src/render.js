import mainTemplate from './src/templates/main.html!text'
import mainEdit from './src/templates/mainEdit.html!text'
import Mustache from 'mustache'
import rp from 'request-promise'

export async function render() {

	let data = formatData(await rp({
        uri: "https://interactive.guim.co.uk/docsdata-test/1WLhHROz2EB2rW25ouywEmw_u-Bi_9W7UDoVlxTHy1Zs.json",
        json: true
    }));

    return buildEditView(data)

}

function buildEditView(d){
	let editHtml = Mustache.render(mainEdit, d );
    return `${editHtml}`;
}



function formatData(data) {
    data.cards.map((card) => {
        card.formattedReadMore = whitespaceFix(card);
        return card;
    });

    return data;
}


function whitespaceFix(card) {
    let text = card.readMoreCopy.replace(/\t\r/g, "").replace(/\n\s*\n/g, '</p><p>');
    return `<p>${text}</p>`
}