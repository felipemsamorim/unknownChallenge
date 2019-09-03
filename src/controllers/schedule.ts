import { Schedule } from '../models/schedule.class'
export const ScheduleController = {
    create: (req: { body: any; }, res: { status: { (arg0: number): { json: (arg0: any) => void; }; (arg0: number): { json: (arg0: any) => void; }; }; }) => {
        new Schedule(req.body, (r) => {
            r.saveFile((r: any) => {
                if (r.status == 'fail') {
                    res.status(500).json(r)
                } else {
                    res.status(200).json(r)
                }
            });
        });
    },
    getAvaiable: (_req: { body: any; }, res: { status: { (arg0: number): { json: (arg0: any) => void; }; (arg0: number): { json: (arg0: any) => void; }; }; }) => {
        Schedule.getAvaiable((r) => {
            if (r.status == 'fail') {
                res.status(500).json(r)
            } else {
                res.status(200).json(r)
            }
        });

    },
    getAvaiableByRange: (req: { body: any; }, res: { status: { (arg0: number): { json: (arg0: any) => void; }; (arg0: number): { json: (arg0: any) => void; }; }; }) => {
        Schedule.getAvaiableByRange(req.body, (r) => {
            if (r.status == 'fail') {
                res.status(500).json(r)
            } else {
                res.status(200).json(r)
            }
        });

    },
           
            deleteByIndex: (req: { params: any; }, res: any) => {
                Schedule.deleteOne(req.params.index, (r) => {
                    if (r.status == 'fail') {
                        res.status(500).json(r)
                    } else {
                        res.status(200).json(r)
                    }
                });
            }
}
