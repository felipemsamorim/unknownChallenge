import req from "supertest";
import server from "./server";
describe('Teste de rotas', () => {
  //testa getAvaiable()
  test("[GET] /api/schedule/available", async () => {
    const res = await req(server).get("/api/schedule/available");
    expect(res.status).toEqual(200);
    expect(typeof res.body).toBe("object");
  });

  //testa getAvaiableByRange()
  test("[POST] /api/schedule/available", async () => {
    const query = {
      "dtIni": "25-01-2018",
      "dtEnd": "26-01-2018"
    }
    const res = await req(server).post("/api/schedule/available").send(query);
    expect(res.status).toEqual(200);
    expect(typeof res.body).toBe("object");
  });

  //testa create()
  test("[POST] /api/schedule", async () => {
    const exemplo1 = {
      "typeSchedule": "day",
        "dateIni": "02-09-2019",
      "dateEnd": "06-09-2019",
        "intervals": [{ "start": "14:30", "end": "15:00" }, { "start": "15:10", "end": "15:30" }]
    }
    /* const exemplo2 = {
      "name":"week 1",
      "typeSchedule": "weekly",
        "dateIni": "02-09-2019",
      "dateEnd": "06-09-2019",
        "intervals": [{ "start": "14:30", "end": "15:00" }, { "start": "15:10", "end": "15:30" }]
    }
    */
    
    /*const exemplo3 = {
      "name":"daily",
      "typeSchedule": "daily",
        "dateIni": "02-09-2019",
      "dateEnd": "06-09-2019",
        "intervals": [{ "start": "14:30", "end": "15:00" }, { "start": "15:10", "end": "15:30" }]
    }*/
    const res = await req(server).post("/api/schedule").send(exemplo1);
    expect(res.status).toEqual(200);
    expect(typeof res.body).toBe("object");
  });

  //testa deleteByIndex()
  test("[DELETE] /api/schedule/available", async () => {
    const index = 1
    const res = await req(server).delete(`/api/schedule/available/${index}`);
    expect(res.status).toEqual(200);
    expect(typeof res.body).toBe("object");
  });
})
