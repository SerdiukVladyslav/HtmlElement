var HtmlElement = /** @class */ (function () {
    function HtmlElement(tagName, selfClosing, textContent) {
        if (selfClosing === void 0) { selfClosing = false; }
        if (textContent === void 0) { textContent = ''; }
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.textContent = textContent;
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }
    HtmlElement.prototype.setAttribute = function (name, value) {
        this.attributes.push([name, value]);
    };
    HtmlElement.prototype.setStyle = function (property, value) {
        this.styles.push([property, value]);
    };
    HtmlElement.prototype.addChild = function (element, atStart) {
        if (atStart === void 0) { atStart = false; }
        if (atStart) {
            this.children.unshift(element);
        }
        else {
            this.children.push(element);
        }
    };
    HtmlElement.prototype.getHtml = function () {
        var attributesHtml = this.attributes.map(function (_a) {
            var name = _a[0], value = _a[1];
            return "".concat(name, "=\"").concat(value, "\"");
        }).join(' ');
        var stylesHtml = this.styles.map(function (_a) {
            var property = _a[0], value = _a[1];
            return "".concat(property, ":").concat(value);
        }).join(';');
        var html = "<".concat(this.tagName);
        if (attributesHtml) {
            html += " ".concat(attributesHtml);
        }
        if (stylesHtml) {
            html += " style=\"".concat(stylesHtml, "\"");
        }
        if (this.selfClosing) {
            html += " />";
        }
        else {
            html += ">";
            if (this.textContent) {
                html += this.textContent;
            }
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var child = _a[_i];
                html += child.getHtml();
            }
            html += "</".concat(this.tagName, ">");
        }
        return html;
    };
    return HtmlElement;
}());
// ��������� ������� wrapper
var wrapper = new HtmlElement('div');
wrapper.setAttribute('id', 'wrapper');
wrapper.setStyle('display', 'flex');
// ��������� ������ ��������� div
var firstDiv = new HtmlElement('div');
firstDiv.setStyle('width', '300px');
firstDiv.setStyle('margin', '10px');
var firstHeading = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
var firstImage = new HtmlElement('img', true);
firstImage.setAttribute('src', 'lipsum.jpg');
firstImage.setAttribute('alt', 'Lorem Ipsum');
firstImage.setStyle('width', '100%');
var firstParagraph = new HtmlElement('p');
firstParagraph.setStyle('text-align', 'justify');
firstParagraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting\n    industry. Lorem Ipsum has been the industry's standard dummy text ever\n    since the 1500s, when an unknown printer took a galley of type and\n    scrambled it to make a type specimen book. ";
var firstLink = new HtmlElement('a');
firstLink.setAttribute('href', 'https://www.lipsum.com');
firstLink.setAttribute('target', '_blank');
firstLink.textContent = 'More...';
firstParagraph.addChild(firstLink);
firstDiv.addChild(firstHeading);
firstDiv.addChild(firstImage);
firstDiv.addChild(firstParagraph);
wrapper.addChild(firstDiv);
// ��������� ������ ��������� div
var secondDiv = new HtmlElement('div');
secondDiv.setStyle('width', '300px');
secondDiv.setStyle('margin', '10px');
var secondHeading = new HtmlElement('h3', false, 'What is Lorem Ipsum?');
var secondImage = new HtmlElement('img', true);
secondImage.setAttribute('src', 'lipsum.jpg');
secondImage.setAttribute('alt', 'Lorem Ipsum');
secondImage.setStyle('width', '100%');
var secondParagraph = new HtmlElement('p');
secondParagraph.setStyle('text-align', 'justify');
secondParagraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting\n    industry. Lorem Ipsum has been the industry's standard dummy text ever\n    since the 1500s, when an unknown printer took a galley of type and\n    scrambled it to make a type specimen book. ";
var secondLink = new HtmlElement('a');
secondLink.setAttribute('href', 'https://www.lipsum.com');
secondLink.setAttribute('target', '_blank');
secondLink.textContent = 'More...';
secondParagraph.addChild(secondLink);
secondDiv.addChild(secondHeading);
secondDiv.addChild(secondImage);
secondDiv.addChild(secondParagraph);
wrapper.addChild(secondDiv);
// �������� ��������� �� �������
document.write(wrapper.getHtml());
//# sourceMappingURL=app.js.map