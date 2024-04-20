class HtmlElement {
    tagName: string;
    selfClosing: boolean;
    textContent: string;
    attributes: [string, string][];
    styles: [string, string][];
    children: HtmlElement[];

    constructor(tagName: string, selfClosing: boolean = false, textContent: string = '') {
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.textContent = textContent;
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }

    setAttribute(name: string, value: string) {
        this.attributes.push([name, value]);
    }

    setStyle(property: string, value: string) {
        this.styles.push([property, value]);
    }

    addChild(element: HtmlElement, atStart: boolean = false) {
        if (atStart) {
            this.children.unshift(element);
        } else {
            this.children.push(element);
        }
    }

    getHtml(): string {
        const attributesHtml = this.attributes.map(([name, value]) => `${name}="${value}"`).join(' ');
        const stylesHtml = this.styles.map(([property, value]) => `${property}:${value}`).join(';');

        let html = `<${this.tagName}`;
        if (attributesHtml) {
            html += ` ${attributesHtml}`;
        }
        if (stylesHtml) {
            html += ` style="${stylesHtml}"`;
        }
        if (this.selfClosing) {
            html += ` />`;
        } else {
            html += `>`;
            if (this.textContent) {
                html += this.textContent;
            }
            for (const child of this.children) {
                html += child.getHtml();
            }
            html += `</${this.tagName}>`;
        }
        return html;
    }
}

// Створюємо елемент wrapper
const wrapper = new HtmlElement('div');
wrapper.setAttribute('id', 'wrapper');
wrapper.setStyle('display', 'flex');

// Створюємо перший вкладений div
const firstDiv = new HtmlElement('div');
firstDiv.setStyle('width', '300px');
firstDiv.setStyle('margin', '10px');

const firstHeading = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
const firstImage = new HtmlElement('img', true);
firstImage.setAttribute('src', 'lipsum.jpg');
firstImage.setAttribute('alt', 'Lorem Ipsum');
firstImage.setStyle('width', '100%');

const firstParagraph = new HtmlElement('p');
firstParagraph.setStyle('text-align', 'justify');
firstParagraph.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. `;

const firstLink = new HtmlElement('a');
firstLink.setAttribute('href', 'https://www.lipsum.com');
firstLink.setAttribute('target', '_blank');
firstLink.textContent = 'More...';

firstParagraph.addChild(firstLink);

firstDiv.addChild(firstHeading);
firstDiv.addChild(firstImage);
firstDiv.addChild(firstParagraph);

wrapper.addChild(firstDiv);

// Створюємо другий вкладений div
const secondDiv = new HtmlElement('div');
secondDiv.setStyle('width', '300px');
secondDiv.setStyle('margin', '10px');

const secondHeading = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
const secondImage = new HtmlElement('img', true);
secondImage.setAttribute('src', 'lipsum.jpg');
secondImage.setAttribute('alt', 'Lorem Ipsum');
secondImage.setStyle('width', '100%');

const secondParagraph = new HtmlElement('p');
secondParagraph.setStyle('text-align', 'justify');
secondParagraph.textContent = `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type and
    scrambled it to make a type specimen book. `;

const secondLink = new HtmlElement('a');
secondLink.setAttribute('href', 'https://www.lipsum.com');
secondLink.setAttribute('target', '_blank');
secondLink.textContent = 'More...';

secondParagraph.addChild(secondLink);

secondDiv.addChild(secondHeading);
secondDiv.addChild(secondImage);
secondDiv.addChild(secondParagraph);

wrapper.addChild(secondDiv);

// Виводимо результат на сторінку
document.write(wrapper.getHtml());
