export class TodoItem {
    uuid: number;
    text: string;
    completed: boolean = false;

    constructor(text: string) {
        this.text = text;
        this.uuid = new Date().getTime();
    }
}