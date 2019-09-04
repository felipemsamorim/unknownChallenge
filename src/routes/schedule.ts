import { ScheduleController } from '../controllers/schedule'
module.exports = (app: any) => {
    const url = `/api/schedule`
    app.route(url)
        .post(ScheduleController.create)

    app.route(url + '/available')
        .get(ScheduleController.getAvaiable)
        .post(ScheduleController.getAvaiableByRange)

        app.route(url + '/available/:index')
        .delete(ScheduleController.deleteByIndex)
    //  .get(Controller.findOne)
    //  .put(Controller.update)
    //  .delete(Controller._delete)


}
