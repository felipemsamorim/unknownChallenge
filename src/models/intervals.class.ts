export class Intervals {
    private _start!: String
    get start(): String { return this._start }
    set start(value: String) { this._start = value }

    private _end!: String
    get end(): String { return this._end }
    set end(value: String) { this._end = value }

    constructor(obj: any) {
        this.start = obj.start
        this.end = obj.end
    }
}