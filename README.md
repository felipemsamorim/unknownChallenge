# unknownChallenge

localhost:3000/api/schedule/available/1 (DELETE) - deleta pelo index no array
localhost:3000/api/schedule/available (GET) - retorna todos os disponíveis
localhost:3000/api/schedule (POST) - cadastra um agendamento
exemplo1: {
	
	"typeSchedule": "day"
    "dateIni": "02-09-2019",
	"dateEnd": "06-09-2019",
    "intervals": [{ "start": "14:30", "end": "15:00" }, { "start": "15:10", "end": "15:30" }]
}

exemplo2: {
	"name":"week 1",
	"typeSchedule": "weekly",
    "dateIni": "02-09-2019",
	"dateEnd": "06-09-2019",
    "intervals": [{ "start": "14:30", "end": "15:00" }, { "start": "15:10", "end": "15:30" }]
}


exemplo3: {
	"name":"daily",
	"typeSchedule": "name":"daily",
    "dateIni": "02-09-2019",
	"dateEnd": "06-09-2019",
    "intervals": [{ "start": "14:30", "end": "15:00" }, { "start": "15:10", "end": "15:30" }]
}

localhost:3000/api/schedule/available (POST) - executa o getAvaiableByRange
exemplo: {
    "dtIni": "25-01-2018",
	"dtEnd": "26-01-2018"
}
