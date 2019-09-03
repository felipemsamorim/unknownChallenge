import { TypeSchedule } from './typeSchedule.enum'
import { Intervals } from './intervals.class'
import fs from 'fs'
import path from 'path'
export class Schedule {


    private _name!: String
    get name(): String { return this._name }
    set name(value: String) { this._name = value || Date.now().toString() }

    private _typeSchedule!: TypeSchedule
    get typeSchedule(): TypeSchedule { return this._typeSchedule }
    set typeSchedule(value: TypeSchedule) { this._typeSchedule = value }

    private _dateIni!: String
    get dateIni(): String { return this._dateIni }
    set dateIni(value: String) { this._dateIni = value }

    private _dateEnd!: String
    get dateEnd(): String { return this._dateEnd }
    set dateEnd(value: String) { this._dateEnd = value }

    private _intervals!: Array<Intervals>
    get intervals(): Array<Intervals> { return this._intervals }
    set intervals(value: Array<Intervals>) { this._intervals = value }


    constructor(obj: any, callback: { (data: any): void }) {
        this.name = obj.name
        this.typeSchedule = obj.typeSchedule
        this.dateIni = obj.dateIni
        this.dateEnd = obj.dateEnd
        this.intervals = obj.intervals
        callback(this)
    }
    saveFile = (callback: { (data: any): void }): void => {
        try {
            fs.writeFile(path.join(__dirname, '../../content_files')
                + '/' + (this.name || Date.now()) + '.json', JSON.stringify(this), () =>
                    callback(`${this.name || Date.now()}.json save sucessfully`)
            )
        } catch (error) {
            callback({ error, status: 'fail' })
        }
    }
    public static getAvaiable = (callback: { (data: any): void }): void => {
        try {
            let r = JSON.parse(fs.readFileSync(path.join(__dirname, '../../content_files')
                + '/available.json').toString())
            callback(r)
        } catch (error) {
            callback({ error, status: 'fail' })
        }
    }

    public static deleteOne = (index: number, callback: { (data: any): void }): void => {
        try {
            let r = JSON.parse(fs.readFileSync(path.join(__dirname, '../../content_files')
                + '/available.json').toString())
            r.splice(index, 1)
            fs.unlink(path.join(__dirname, '../../content_files') + '/available.json', () => {
                fs.writeFile(path.join(__dirname, '../../content_files')
                    + '/available.json', JSON.stringify(r), () =>
                        callback(r)
                )
            })
        } catch (error) {
            callback({ error, status: 'fail' })
        }
    }

    public static getAvaiableByRange = (obj: any, callback: { (data: any): void }): void => {
        try {
            console.log(obj)
            let r = JSON.parse(fs.readFileSync(path.join(__dirname, '../../content_files')
                + '/available.json').toString())
            console.log(r)
            let dtIniF = Schedule.convertDateString(obj.dtIni)
            let dtEndF = Schedule.convertDateString(obj.dtEnd)
            console.log(dtIniF)
            console.log(dtEndF)
            Schedule.dateRangeSync(r, obj, (r) => {
                callback(r)
            })
        } catch (error) {
            callback({ error, status: 'fail' })
        }
    }

    static convertDateString(day: any): Date {
        try {
            let r: any = day.split("-")
            return new Date(r[2], r[1] - 1, r[0])
        } catch (error) {

            throw new Error(error);
        }
    }

    static dateRangeSync(arr: Array<any>, obj: any, callback: { (data: any): void }) {
        try {
            callback(arr.filter((e: any): any => {
                Schedule.convertDateString(e.day) <= Schedule.convertDateString(obj.dtIni)
                    &&
                    Schedule.convertDateString(e.day) >= Schedule.convertDateString(obj.dtEnd)
            }))
        } catch (error) {
            throw new Error(error);
        }
    }
}