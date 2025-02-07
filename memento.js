class Memento {
    constructor(state) {
        this.state = state;
    }
    getSavedState() {
        return this.state;
    }
}

class TextEditor {
    constructor() {
        this.text = "";
    }
    write(text) {
        this.text += text + " ";
    }
    save() {
        return new Memento(this.text);
    }
    restore(memento) {
        this.text = memento.getSavedState();
    }
    showText() {
        console.log(`Texto: ${this.text}`);
    }
}

class History {
    constructor() {
        this.mementos = [];
    }
    push(memento) {
        this.mementos.push(memento);
    }
    pop() {
        return this.mementos.pop();
    }
}

const editor = new TextEditor();
const history = new History();

editor.write("Oi, tudo bem?");
editor.showText();
history.push(editor.save());

editor.write("Eu sou o Memento.");
editor.showText();
history.push(editor.save());

editor.write("Prazer em te conhecer.");
editor.showText();


editor.restore(history.pop());
editor.showText();

editor.restore(history.pop());
editor.showText();