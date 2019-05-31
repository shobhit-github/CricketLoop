/* eslint consistent-return: 0, no-else-return: 0*/
import * as types from '../types';

const dummyData = [
    {
        "created_at": "2018-02-09T12:38:23.386Z",
        "updated_at": "2018-02-09T12:38:23.386Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16db",
        "status": "completed",
        "related_name": "18th Match",
        "expires": 10800,
        "name": "Dolphins vs Cape Cobras",
        "short_name": "DOL vs COB",
        "title": "Dolphins vs Cape Cobras - 18th Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Kingsmead, Durban, South Africa",
        "approx_completed_ts": 1512159361,
        "teams": {
            "a": {
                "name": "Dolphins",
                "key": "dol"
            },
            "b": {
                "name": "Cape Cobras",
                "key": "cob"
            }
        },
        "winner_team": "",
        "key": "csat20_2017_g18",
        "msgs": {
            "info": "No result",
            "completed": "No result",
            "result": "No result",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g18/",
        "start_date": {
            "iso": "2017-12-01T16:00+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.392Z",
        "updated_at": "2018-02-09T12:38:23.392Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16dc",
        "status": "completed",
        "related_name": "20th Match",
        "expires": 10800,
        "name": "Titans vs Warriors",
        "short_name": "TTN vs WAR",
        "title": "Titans vs Warriors - 20th Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Willowmoore Park, Benoni, South Africa",
        "approx_completed_ts": 1512157830,
        "teams": {
            "a": {
                "name": "Titans",
                "key": "ttn"
            },
            "b": {
                "name": "Warriors",
                "key": "war"
            }
        },
        "winner_team": "a",
        "key": "csat20_2017_g20",
        "msgs": {
            "info": "Titans won by 56 runs (Match reduced to 13 overs per side due to rain)",
            "completed": "Titans won by 56 runs (Match reduced to 13 overs per side due to rain)",
            "result": "Titans beat Warriors by 56 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g20/",
        "start_date": {
            "iso": "2017-12-01T16:00+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.393Z",
        "updated_at": "2018-02-09T12:38:23.393Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16dd",
        "status": "completed",
        "related_name": "19th Match",
        "expires": 10800,
        "name": "Knights vs Lions",
        "short_name": "KNI vs LIO",
        "title": "Knights vs Lions - 19th Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Mangaung Oval, Bloemfontein, South Africa",
        "approx_completed_ts": 1512153569,
        "teams": {
            "a": {
                "name": "Knights",
                "key": "kni"
            },
            "b": {
                "name": "Lions",
                "key": "lio"
            }
        },
        "winner_team": "",
        "key": "csat20_2017_g19",
        "msgs": {
            "info": "No result",
            "completed": "No result",
            "result": "No result",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g19/",
        "start_date": {
            "iso": "2017-12-01T16:00+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.393Z",
        "updated_at": "2018-02-09T12:38:23.393Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16de",
        "status": "completed",
        "related_name": "2nd Test Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 2nd Test Match - Australia vs England - The Ashes 2017-2018",
        "season": {
            "name": "Australia vs England - The Ashes 2017-2018"
        },
        "format": "test",
        "venue": "Adelaide Oval, Australia",
        "approx_completed_ts": 1512537868,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": "a",
        "key": "auseng_2017_test_02",
        "msgs": {
            "info": "Australia won by 120 runs",
            "completed": "Australia won by 120 runs",
            "result": "Australia beat England by 120 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/auseng_2017/auseng_2017_test_02/",
        "start_date": {
            "iso": "2017-12-02T03:30+00:00"
        },
        "dateFilter": 2,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.393Z",
        "updated_at": "2018-02-09T12:38:23.393Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16df",
        "status": "completed",
        "related_name": "3rd Test Match",
        "expires": 10800,
        "name": "India vs Sri Lanka",
        "short_name": "IND vs SL",
        "title": "India vs Sri Lanka - 3rd Test Match - India vs Sri Lanka 2017",
        "season": {
            "name": "India vs Sri Lanka 2017"
        },
        "format": "test",
        "venue": "Feroz Shah Kotla, Delhi, India",
        "approx_completed_ts": 1512556345,
        "teams": {
            "a": {
                "name": "India",
                "key": "ind"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "",
        "key": "indsl_2017_test_03",
        "msgs": {
            "info": "Match drawn",
            "completed": "Match drawn",
            "result": "Match drawn",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/indsl_2017/indsl_2017_test_03/",
        "start_date": {
            "iso": "2017-12-02T04:00+00:00"
        },
        "dateFilter": 2,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.394Z",
        "updated_at": "2018-02-09T12:38:23.394Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16e0",
        "status": "completed",
        "related_name": "35th Match",
        "expires": 10800,
        "name": "Comilla Victorians vs Rangpur Riders",
        "short_name": "CVS vs RRS",
        "title": "Comilla Victorians vs Rangpur Riders - 35th Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1512210439,
        "teams": {
            "a": {
                "name": "Comilla Victorians",
                "key": "cvs"
            },
            "b": {
                "name": "Rangpur Riders",
                "key": "rrs"
            }
        },
        "winner_team": "a",
        "key": "bplt20_2017_g35",
        "msgs": {
            "info": "Comilla Victorians won by 4 Wickets",
            "completed": "Comilla Victorians won by 4 Wickets",
            "result": "Comilla Victorians beat Rangpur Riders by 3 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_g35/",
        "start_date": {
            "iso": "2017-12-02T07:00+00:00"
        },
        "dateFilter": 2,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.395Z",
        "updated_at": "2018-02-09T12:38:23.395Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16e1",
        "status": "completed",
        "related_name": "36th Match",
        "expires": 10800,
        "name": "Dhaka Dynamites vs Rajshahi Kings",
        "short_name": "DDS vs RKS",
        "title": "Dhaka Dynamites vs Rajshahi Kings - 36th Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1512228074,
        "teams": {
            "a": {
                "name": "Dhaka Dynamites",
                "key": "dds"
            },
            "b": {
                "name": "Rajshahi Kings",
                "key": "rks"
            }
        },
        "winner_team": "a",
        "key": "bplt20_2017_g36",
        "msgs": {
            "info": "Dhaka Dynamites won by 99 runs.",
            "completed": "Dhaka Dynamites won by 99 runs.",
            "result": "Dhaka Dynamites beat Rajshahi Kings by 99 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_g36/",
        "start_date": {
            "iso": "2017-12-02T12:00+00:00"
        },
        "dateFilter": 2,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.395Z",
        "updated_at": "2018-02-09T12:38:23.395Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16e2",
        "status": "completed",
        "related_name": "37th Match",
        "expires": 10800,
        "name": "Sylhet Sixers vs Chittagong Vikings",
        "short_name": "SHS vs CGV",
        "title": "Sylhet Sixers vs Chittagong Vikings - 37th Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1512291601,
        "teams": {
            "a": {
                "name": "Sylhet Sixers",
                "key": "shs"
            },
            "b": {
                "name": "Chittagong Vikings",
                "key": "cgv"
            }
        },
        "winner_team": "a",
        "key": "bplt20_2017_g37",
        "msgs": {
            "info": "Sylhet Sixers won by 10 wickets.",
            "completed": "Sylhet Sixers won by 10 wickets.",
            "result": "Sylhet Sixers beat Chittagong Vikings by 10 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_g37/",
        "start_date": {
            "iso": "2017-12-03T07:00+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.398Z",
        "updated_at": "2018-02-09T12:38:23.398Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16e3",
        "status": "completed",
        "related_name": "21st Match",
        "expires": 10800,
        "name": "Titans vs Knights",
        "short_name": "TTN vs KNI",
        "title": "Titans vs Knights - 21st Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "St George's Park, Port Elizabeth, South Africa",
        "approx_completed_ts": 1512307433,
        "teams": {
            "a": {
                "name": "Titans",
                "key": "ttn"
            },
            "b": {
                "name": "Knights",
                "key": "kni"
            }
        },
        "winner_team": "a",
        "key": "csat20_2017_g21",
        "msgs": {
            "info": "Titans won by 5 wickets.",
            "completed": "Titans won by 5 wickets.",
            "result": "Titans beat Knights by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g21/",
        "start_date": {
            "iso": "2017-12-03T10:00+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.398Z",
        "updated_at": "2018-02-09T12:38:23.398Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16e4",
        "status": "completed",
        "related_name": "38th Match",
        "expires": 10800,
        "name": "Rangpur Riders vs Khulna Titans",
        "short_name": "RRS vs KTS",
        "title": "Rangpur Riders vs Khulna Titans - 38th Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1512315278,
        "teams": {
            "a": {
                "name": "Rangpur Riders",
                "key": "rrs"
            },
            "b": {
                "name": "Khulna Titans",
                "key": "kts"
            }
        },
        "winner_team": "a",
        "key": "bplt20_2017_g38",
        "msgs": {
            "info": "Rangpur Riders won by 19 runs.",
            "completed": "Rangpur Riders won by 19 runs.",
            "result": "Rangpur Riders beat Khulna Titans by 19 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_g38/",
        "start_date": {
            "iso": "2017-12-03T12:00+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.400Z",
        "updated_at": "2018-02-09T12:38:23.400Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16e5",
        "status": "completed",
        "related_name": "22nd Match",
        "expires": 10800,
        "name": "Warriors vs Dolphins",
        "short_name": "WAR vs DOL",
        "title": "Warriors vs Dolphins - 22nd Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "St George's Park, Port Elizabeth, South Africa",
        "approx_completed_ts": 1512322386,
        "teams": {
            "a": {
                "name": "Warriors",
                "key": "war"
            },
            "b": {
                "name": "Dolphins",
                "key": "dol"
            }
        },
        "winner_team": "a",
        "key": "csat20_2017_g22",
        "msgs": {
            "info": "Warriors won by 1 run",
            "completed": "Warriors won by 1 run",
            "result": "Warriors beat Dolphins by 1 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g22/",
        "start_date": {
            "iso": "2017-12-03T14:00+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.400Z",
        "updated_at": "2018-02-09T12:38:23.400Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16e6",
        "status": "completed",
        "related_name": "39th Match",
        "expires": 10800,
        "name": "Comilla Victorians vs Khulna Titans",
        "short_name": "CVS vs KTS",
        "title": "Comilla Victorians vs Khulna Titans - 39th Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1512470215,
        "teams": {
            "a": {
                "name": "Comilla Victorians",
                "key": "cvs"
            },
            "b": {
                "name": "Khulna Titans",
                "key": "kts"
            }
        },
        "winner_team": "b",
        "key": "bplt20_2017_g39",
        "msgs": {
            "info": "Titans won by 14 runs",
            "completed": "Titans won by 14 runs",
            "result": "Khulna Titans beat Comilla Victorians by 14 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_g39/",
        "start_date": {
            "iso": "2017-12-05T07:00+00:00"
        },
        "dateFilter": 5,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.400Z",
        "updated_at": "2018-02-09T12:38:23.400Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16e7",
        "status": "completed",
        "related_name": "1st ODI Match",
        "expires": 10800,
        "name": "Afghanistan vs Ireland",
        "short_name": "AFG vs IRE",
        "title": "Afghanistan vs Ireland - 1st ODI Match - Afghanistan vs Ireland 2017",
        "season": {
            "name": "Afghanistan vs Ireland 2017"
        },
        "format": "one-day",
        "venue": "Sharjah Cricket Stadium, Sharjah, Dubai",
        "approx_completed_ts": 1512492604,
        "teams": {
            "a": {
                "name": "Afghanistan",
                "key": "afg"
            },
            "b": {
                "name": "Ireland",
                "key": "ire"
            }
        },
        "winner_team": "a",
        "key": "afgire_2017_one-day_01",
        "msgs": {
            "info": "Afghanistan won by 138 runs.",
            "completed": "Afghanistan won by 138 runs.",
            "result": "Afghanistan beat Ireland by 138 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/afgire_2017/afgire_2017_one-day_01/",
        "start_date": {
            "iso": "2017-12-05T10:30+00:00"
        },
        "dateFilter": 5,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.401Z",
        "updated_at": "2018-02-09T12:38:23.401Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16e8",
        "status": "completed",
        "related_name": "40th Match",
        "expires": 10800,
        "name": "Rajshahi Kings vs Chittagong Vikings",
        "short_name": "RKS vs CGV",
        "title": "Rajshahi Kings vs Chittagong Vikings - 40th Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1512488075,
        "teams": {
            "a": {
                "name": "Rajshahi Kings",
                "key": "rks"
            },
            "b": {
                "name": "Chittagong Vikings",
                "key": "cgv"
            }
        },
        "winner_team": "b",
        "key": "bplt20_2017_g40",
        "msgs": {
            "info": "Chittagong Vikings won by 45 runs.",
            "completed": "Chittagong Vikings won by 45 runs.",
            "result": "Chittagong Vikings beat Rajshahi Kings by 45 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_g40/",
        "start_date": {
            "iso": "2017-12-05T12:00+00:00"
        },
        "dateFilter": 5,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.401Z",
        "updated_at": "2018-02-09T12:38:23.401Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16e9",
        "status": "completed",
        "related_name": "41st Match",
        "expires": 10800,
        "name": "Dhaka Dynamites vs Rangpur Riders",
        "short_name": "DDS vs RRS",
        "title": "Dhaka Dynamites vs Rangpur Riders - 41st Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1512555676,
        "teams": {
            "a": {
                "name": "Dhaka Dynamites",
                "key": "dds"
            },
            "b": {
                "name": "Rangpur Riders",
                "key": "rrs"
            }
        },
        "winner_team": "a",
        "key": "bplt20_2017_g41",
        "msgs": {
            "info": "Dhaka Dynamites won by 43 runs.",
            "completed": "Dhaka Dynamites won by 43 runs.",
            "result": "Dhaka Dynamites beat Rangpur Riders by 43 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_g41/",
        "start_date": {
            "iso": "2017-12-06T07:00+00:00"
        },
        "dateFilter": 6,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.402Z",
        "updated_at": "2018-02-09T12:38:23.402Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16ea",
        "status": "completed",
        "related_name": "42nd Match",
        "expires": 10800,
        "name": "Comilla Victorians vs Sylhet Sixers",
        "short_name": "CVS vs SHS",
        "title": "Comilla Victorians vs Sylhet Sixers - 42nd Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1512574466,
        "teams": {
            "a": {
                "name": "Comilla Victorians",
                "key": "cvs"
            },
            "b": {
                "name": "Sylhet Sixers",
                "key": "shs"
            }
        },
        "winner_team": "a",
        "key": "bplt20_2017_g42",
        "msgs": {
            "info": "Comilla Victorians won by 25 runs.",
            "completed": "Comilla Victorians won by 25 runs.",
            "result": "Comilla Victorians beat Sylhet Sixers by 25 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_g42/",
        "start_date": {
            "iso": "2017-12-06T12:00+00:00"
        },
        "dateFilter": 6,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.402Z",
        "updated_at": "2018-02-09T12:38:23.402Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16eb",
        "status": "completed",
        "related_name": "24th Match",
        "expires": 10800,
        "name": "Knights vs Cape Cobras",
        "short_name": "KNI vs COB",
        "title": "Knights vs Cape Cobras - 24th Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Diamond Oval, Kimberley, South Africa",
        "approx_completed_ts": 1512588167,
        "teams": {
            "a": {
                "name": "Knights",
                "key": "kni"
            },
            "b": {
                "name": "Cape Cobras",
                "key": "cob"
            }
        },
        "winner_team": "b",
        "key": "csat20_2017_g24",
        "msgs": {
            "info": "Cape Cobras won by 5 runs.",
            "completed": "Cape Cobras won by 5 runs.",
            "result": "Cape Cobras beat Knights by 5 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g24/",
        "start_date": {
            "iso": "2017-12-06T16:00+00:00"
        },
        "dateFilter": 6,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.403Z",
        "updated_at": "2018-02-09T12:38:23.403Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16ec",
        "status": "completed",
        "related_name": "23rd Match",
        "expires": 10800,
        "name": "Dolphins vs Lions",
        "short_name": "DOL vs LIO",
        "title": "Dolphins vs Lions - 23rd Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Kingsmead, Durban, South Africa",
        "approx_completed_ts": 1512577499,
        "teams": {
            "a": {
                "name": "Dolphins",
                "key": "dol"
            },
            "b": {
                "name": "Lions",
                "key": "lio"
            }
        },
        "winner_team": "",
        "key": "csat20_2017_g23",
        "msgs": {
            "info": "Match abandoned without a ball being bowled due to rain (no toss).",
            "completed": "Match abandoned without a ball being bowled due to rain (no toss).",
            "result": "Match abandoned without a ball being bowled (no toss)",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g23/",
        "start_date": {
            "iso": "2017-12-06T16:00+00:00"
        },
        "dateFilter": 6,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.403Z",
        "updated_at": "2018-02-09T12:38:23.403Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16ed",
        "status": "completed",
        "related_name": "2nd ODI Match",
        "expires": 10800,
        "name": "Afghanistan vs Ireland",
        "short_name": "AFG vs IRE",
        "title": "Afghanistan vs Ireland - 2nd ODI Match - Afghanistan vs Ireland 2017",
        "season": {
            "name": "Afghanistan vs Ireland 2017"
        },
        "format": "one-day",
        "venue": "Sharjah Cricket Stadium, Sharjah, Dubai",
        "approx_completed_ts": 1512670784,
        "teams": {
            "a": {
                "name": "Afghanistan",
                "key": "afg"
            },
            "b": {
                "name": "Ireland",
                "key": "ire"
            }
        },
        "winner_team": "b",
        "key": "afgire_2017_one-day_02",
        "msgs": {
            "info": "Ireland won by 51 runs.",
            "completed": "Ireland won by 51 runs.",
            "result": "Ireland beat Afghanistan by 51 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/afgire_2017/afgire_2017_one-day_02/",
        "start_date": {
            "iso": "2017-12-07T10:30+00:00"
        },
        "dateFilter": 7,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.404Z",
        "updated_at": "2018-02-09T12:38:23.404Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16ee",
        "status": "completed",
        "related_name": "Eliminator Match",
        "expires": 10800,
        "name": "Khulna Titans vs Rangpur Riders",
        "short_name": "KTS vs RRS",
        "title": "Khulna Titans vs Rangpur Riders - Eliminator Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1512731961,
        "teams": {
            "a": {
                "name": "Khulna Titans",
                "key": "kts"
            },
            "b": {
                "name": "Rangpur Riders",
                "key": "rrs"
            }
        },
        "winner_team": "b",
        "key": "bplt20_2017_e",
        "msgs": {
            "info": "Rangpur Riders won by 8 wickets.",
            "completed": "Rangpur Riders won by 8 wickets.",
            "result": "Rangpur Riders beat Khulna Titans by 8 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_e/",
        "start_date": {
            "iso": "2017-12-08T08:00+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.404Z",
        "updated_at": "2018-02-09T12:38:23.404Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16ef",
        "status": "completed",
        "related_name": "1st Qualifier Match",
        "expires": 10800,
        "name": "Comilla Victorians vs Dhaka Dynamites",
        "short_name": "CVS vs DDS",
        "title": "Comilla Victorians vs Dhaka Dynamites - 1st Qualifier Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1512749919,
        "teams": {
            "a": {
                "name": "Comilla Victorians",
                "key": "cvs"
            },
            "b": {
                "name": "Dhaka Dynamites",
                "key": "dds"
            }
        },
        "winner_team": "b",
        "key": "bplt20_2017_q1",
        "msgs": {
            "info": "Dhaka Dynamites won by 95 runs",
            "completed": "Dhaka Dynamites won by 95 runs",
            "result": "Dhaka Dynamites beat Comilla Victorians by 95 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_q1/",
        "start_date": {
            "iso": "2017-12-08T13:00+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.405Z",
        "updated_at": "2018-02-09T12:38:23.405Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16f0",
        "status": "completed",
        "related_name": "27th Match",
        "expires": 10800,
        "name": "Lions vs Warriors",
        "short_name": "LIO vs WAR",
        "title": "Lions vs Warriors - 27th Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Senwes Park, Potchefstroom, South Africa",
        "approx_completed_ts": 1512763238,
        "teams": {
            "a": {
                "name": "Lions",
                "key": "lio"
            },
            "b": {
                "name": "Warriors",
                "key": "war"
            }
        },
        "winner_team": "b",
        "key": "csat20_2017_g27",
        "msgs": {
            "info": "Warriors won by 4 runs (D/L method)",
            "completed": "Warriors won by 4 runs (D/L method)",
            "result": "Warriors beat Lions by 38 runs (D/L method)",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g27/",
        "start_date": {
            "iso": "2017-12-08T16:00+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.405Z",
        "updated_at": "2018-02-09T12:38:23.405Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16f1",
        "status": "completed",
        "related_name": "25th Match",
        "expires": 10800,
        "name": "Cape Cobras vs Titans",
        "short_name": "COB vs TTN",
        "title": "Cape Cobras vs Titans - 25th Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Newlands, Cape Town, South Africa",
        "approx_completed_ts": 1512761150,
        "teams": {
            "a": {
                "name": "Cape Cobras",
                "key": "cob"
            },
            "b": {
                "name": "Titans",
                "key": "ttn"
            }
        },
        "winner_team": "a",
        "key": "csat20_2017_g25",
        "msgs": {
            "info": "Cape Cobras won by 3 wickets.",
            "completed": "Cape Cobras won by 3 wickets.",
            "result": "Cape Cobras beat Titans by 3 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g25/",
        "start_date": {
            "iso": "2017-12-08T16:00+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.405Z",
        "updated_at": "2018-02-09T12:38:23.405Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16f2",
        "status": "completed",
        "related_name": "26th Match",
        "expires": 10800,
        "name": "Knights vs Dolphins",
        "short_name": "KNI vs DOL",
        "title": "Knights vs Dolphins - 26th Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Mangaung Oval, Bloemfontein, South Africa",
        "approx_completed_ts": 1512762660,
        "teams": {
            "a": {
                "name": "Knights",
                "key": "kni"
            },
            "b": {
                "name": "Dolphins",
                "key": "dol"
            }
        },
        "winner_team": "b",
        "key": "csat20_2017_g26",
        "msgs": {
            "info": "Dolphins won by 6 wkts (D/L method)",
            "completed": "Dolphins won by 6 wkts (D/L method)",
            "result": "Dolphins beat Knights (D/L method)",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g26/",
        "start_date": {
            "iso": "2017-12-08T16:00+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.406Z",
        "updated_at": "2018-02-09T12:38:23.406Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16f3",
        "status": "completed",
        "related_name": "2nd Test Match",
        "expires": 10800,
        "name": "New Zealand vs West Indies",
        "short_name": "NZ vs WI",
        "title": "New Zealand vs West Indies - 2nd Test Match - New Zealand vs West Indies 2017",
        "season": {
            "name": "New Zealand vs West Indies 2017"
        },
        "format": "test",
        "venue": "Seddon Park, Hamilton, New Zealand",
        "approx_completed_ts": 1513047278,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "West Indies",
                "key": "wi"
            }
        },
        "winner_team": "a",
        "key": "nzwi_2017_test_02",
        "msgs": {
            "info": "New Zealand won by 240 runs.",
            "completed": "New Zealand won by 240 runs.",
            "result": "New Zealand beat West Indies by 240 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzwi_2017/nzwi_2017_test_02/",
        "start_date": {
            "iso": "2017-12-08T22:00+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.406Z",
        "updated_at": "2018-02-09T12:38:23.406Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16f4",
        "status": "completed",
        "related_name": "1st ODI Match",
        "expires": 10800,
        "name": "India vs Sri Lanka",
        "short_name": "IND vs SL",
        "title": "India vs Sri Lanka - 1st ODI Match - India vs Sri Lanka 2017",
        "season": {
            "name": "India vs Sri Lanka 2017"
        },
        "format": "one-day",
        "venue": "Himachal Pradesh Cricket Association Stadium, Dharamsala, India",
        "approx_completed_ts": 1512905941,
        "teams": {
            "a": {
                "name": "India",
                "key": "ind"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "b",
        "key": "indsl_2017_one-day_01",
        "msgs": {
            "info": "Sri Lanka won by 7 wickets.",
            "completed": "Sri Lanka won by 7 wickets.",
            "result": "Sri Lanka beat India by 7 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/indsl_2017/indsl_2017_one-day_01/",
        "start_date": {
            "iso": "2017-12-10T06:00+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.407Z",
        "updated_at": "2018-02-09T12:38:23.407Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16f5",
        "status": "completed",
        "related_name": "3rd ODI Match",
        "expires": 10800,
        "name": "Afghanistan vs Ireland",
        "short_name": "AFG vs IRE",
        "title": "Afghanistan vs Ireland - 3rd ODI Match - Afghanistan vs Ireland 2017",
        "season": {
            "name": "Afghanistan vs Ireland 2017"
        },
        "format": "one-day",
        "venue": "Sharjah Cricket Stadium, Sharjah, Dubai",
        "approx_completed_ts": 1512925867,
        "teams": {
            "a": {
                "name": "Afghanistan",
                "key": "afg"
            },
            "b": {
                "name": "Ireland",
                "key": "ire"
            }
        },
        "winner_team": "b",
        "key": "afgire_2017_one-day_03",
        "msgs": {
            "info": "Ireland won by 5 wickets",
            "completed": "Ireland won by 5 wickets",
            "result": "Ireland beat Afghanistan by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/afgire_2017/afgire_2017_one-day_03/",
        "start_date": {
            "iso": "2017-12-10T10:30+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.407Z",
        "updated_at": "2018-02-09T12:38:23.407Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16f6",
        "status": "completed",
        "related_name": "2nd Qualifier Match",
        "expires": 10800,
        "name": "Rangpur Riders vs Comilla Victorians",
        "short_name": "RRS vs CVS",
        "title": "Rangpur Riders vs Comilla Victorians - 2nd Qualifier Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1513005874,
        "teams": {
            "a": {
                "name": "Rangpur Riders",
                "key": "rrs"
            },
            "b": {
                "name": "Comilla Victorians",
                "key": "cvs"
            }
        },
        "winner_team": "a",
        "key": "bplt20_2017_q2",
        "msgs": {
            "info": "Rangpur Riders won by 36 runs",
            "completed": "Rangpur Riders won by 36 runs",
            "result": "Rangpur Riders beat Comilla Victorians by 36 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_q2/",
        "start_date": {
            "iso": "2017-12-10T12:00+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.407Z",
        "updated_at": "2018-02-09T12:38:23.407Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16f7",
        "status": "completed",
        "related_name": "29th Match",
        "expires": 10800,
        "name": "Dolphins vs Titans",
        "short_name": "DOL vs TTN",
        "title": "Dolphins vs Titans - 29th Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Kingsmead, Durban, South Africa",
        "approx_completed_ts": 1512921768,
        "teams": {
            "a": {
                "name": "Dolphins",
                "key": "dol"
            },
            "b": {
                "name": "Titans",
                "key": "ttn"
            }
        },
        "winner_team": "a",
        "key": "csat20_2017_g29",
        "msgs": {
            "info": "Dolphins won by 89 runs",
            "completed": "Dolphins won by 89 runs",
            "result": "Dolphins beat Titans by 89 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g29/",
        "start_date": {
            "iso": "2017-12-10T12:30+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.408Z",
        "updated_at": "2018-02-09T12:38:23.408Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16f8",
        "status": "completed",
        "related_name": "28th Match",
        "expires": 10800,
        "name": "Warriors vs Cape Cobras",
        "short_name": "WAR vs COB",
        "title": "Warriors vs Cape Cobras - 28th Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Buffalo Park, East London, South Africa",
        "approx_completed_ts": 1512920809,
        "teams": {
            "a": {
                "name": "Warriors",
                "key": "war"
            },
            "b": {
                "name": "Cape Cobras",
                "key": "cob"
            }
        },
        "winner_team": "a",
        "key": "csat20_2017_g28",
        "msgs": {
            "info": "Warriors won by 18 runs",
            "completed": "Warriors won by 18 runs",
            "result": "Warriors beat Cape Cobras by 18 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g28/",
        "start_date": {
            "iso": "2017-12-10T12:30+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.409Z",
        "updated_at": "2018-02-09T12:38:23.409Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16f9",
        "status": "completed",
        "related_name": "30th Match",
        "expires": 10800,
        "name": "Lions vs Knights",
        "short_name": "LIO vs KNI",
        "title": "Lions vs Knights - 30th Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Willowmoore Park, Benoni, South Africa",
        "approx_completed_ts": 1512918596,
        "teams": {
            "a": {
                "name": "Lions",
                "key": "lio"
            },
            "b": {
                "name": "Knights",
                "key": "kni"
            }
        },
        "winner_team": "",
        "key": "csat20_2017_g30",
        "msgs": {
            "info": "No Result.",
            "completed": "No Result.",
            "result": "No result",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_g30/",
        "start_date": {
            "iso": "2017-12-10T12:30+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.409Z",
        "updated_at": "2018-02-09T12:38:23.409Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16fa",
        "status": "completed",
        "related_name": "Final Match",
        "expires": 10800,
        "name": "Dhaka Dynamites vs Rangpur Riders",
        "short_name": "DDS vs RRS",
        "title": "Dhaka Dynamites vs Rangpur Riders - Final Match - Bangladesh Premier League 2017 (BPL T20 2017)",
        "season": {
            "name": "Bangladesh Premier League 2017 (BPL T20 2017)"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1513093523,
        "teams": {
            "a": {
                "name": "Dhaka Dynamites",
                "key": "dds"
            },
            "b": {
                "name": "Rangpur Riders",
                "key": "rrs"
            }
        },
        "winner_team": "b",
        "key": "bplt20_2017_final",
        "msgs": {
            "info": "Rangpur Riders won by 57 runs.",
            "completed": "Rangpur Riders won by 57 runs",
            "result": "Rangpur Riders beat Dhaka Dynamites by 57 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bplt20_2017/bplt20_2017_final/",
        "start_date": {
            "iso": "2017-12-12T12:00+00:00"
        },
        "dateFilter": 12,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.409Z",
        "updated_at": "2018-02-09T12:38:23.409Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16fb",
        "status": "completed",
        "related_name": "2nd ODI Match",
        "expires": 10800,
        "name": "India vs Sri Lanka",
        "short_name": "IND vs SL",
        "title": "India vs Sri Lanka - 2nd ODI Match - India vs Sri Lanka 2017",
        "season": {
            "name": "India vs Sri Lanka 2017"
        },
        "format": "one-day",
        "venue": "Punjab Cricket Association Stadium, Mohali, India",
        "approx_completed_ts": 1513173237,
        "teams": {
            "a": {
                "name": "India",
                "key": "ind"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "a",
        "key": "indsl_2017_one-day_02",
        "msgs": {
            "info": "India won by 141 runs",
            "completed": "India won by 141 runs",
            "result": "India beat Sri Lanka by 141 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/indsl_2017/indsl_2017_one-day_02/",
        "start_date": {
            "iso": "2017-12-13T06:00+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.411Z",
        "updated_at": "2018-02-09T12:38:23.411Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16fc",
        "status": "completed",
        "related_name": "1st Semi-Final Match",
        "expires": 10800,
        "name": "Titans vs Warriors",
        "short_name": "TTN vs WAR",
        "title": "Titans vs Warriors - 1st Semi-Final Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Kingsmead, Durban",
        "approx_completed_ts": 1513190735,
        "teams": {
            "a": {
                "name": "Titans",
                "key": "ttn"
            },
            "b": {
                "name": "Warriors",
                "key": "war"
            }
        },
        "winner_team": "a",
        "key": "csat20_2017_sf1",
        "msgs": {
            "info": "Titans won by 8 wkts",
            "completed": "Titans won by 8 wkts",
            "result": "Titans beat Warriors by 8 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_sf1/",
        "start_date": {
            "iso": "2017-12-13T16:00+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.411Z",
        "updated_at": "2018-02-09T12:38:23.411Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16fd",
        "status": "completed",
        "related_name": "3rd Test Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 3rd Test Match - Australia vs England - The Ashes 2017-2018",
        "season": {
            "name": "Australia vs England - The Ashes 2017-2018"
        },
        "format": "test",
        "venue": "Western Australia Cricket Association Ground, Perth",
        "approx_completed_ts": 1513583392,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": "a",
        "key": "auseng_2017_test_03",
        "msgs": {
            "info": "Australia won by an innings and 41 runs",
            "completed": "Australia won by an innings and 41 runs",
            "result": "Australia beat England by 41 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/auseng_2017/auseng_2017_test_03/",
        "start_date": {
            "iso": "2017-12-14T02:30+00:00"
        },
        "dateFilter": 14,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.411Z",
        "updated_at": "2018-02-09T12:38:23.411Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16fe",
        "status": "completed",
        "related_name": "2nd Semi-Final Match",
        "expires": 10800,
        "name": "Dolphins vs Cape Cobras",
        "short_name": "DOL vs COB",
        "title": "Dolphins vs Cape Cobras - 2nd Semi-Final Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "Kingsmead, Durban",
        "approx_completed_ts": 1513275769,
        "teams": {
            "a": {
                "name": "Dolphins",
                "key": "dol"
            },
            "b": {
                "name": "Cape Cobras",
                "key": "cob"
            }
        },
        "winner_team": "",
        "key": "csat20_2017_sf2",
        "msgs": {
            "info": "Match abandoned without a ball bowled.",
            "completed": "Match abandoned without a ball bowled.",
            "result": "Match abandoned without a ball being bowled (no toss)",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_sf2/",
        "start_date": {
            "iso": "2017-12-14T16:00+00:00"
        },
        "dateFilter": 14,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.413Z",
        "updated_at": "2018-02-09T12:38:23.413Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd16ff",
        "status": "completed",
        "related_name": "Final Match",
        "expires": 10800,
        "name": "Titans vs Dolphins",
        "short_name": "TTN vs DOL",
        "title": "Titans vs Dolphins - Final Match - CSA T20 Challenge 2017 (CSA T20)",
        "season": {
            "name": "CSA T20 Challenge 2017 (CSA T20)"
        },
        "format": "t20",
        "venue": "SuperSport Park, Centurion",
        "approx_completed_ts": 1513449839,
        "teams": {
            "a": {
                "name": "Titans",
                "key": "ttn"
            },
            "b": {
                "name": "Dolphins",
                "key": "dol"
            }
        },
        "winner_team": "a",
        "key": "csat20_2017_final",
        "msgs": {
            "info": "Titans won by 7 wickets.",
            "completed": "Titans won by 7 wickets.",
            "result": "Titans beat Dolphins by 7 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/csat20_2017/csat20_2017_final/",
        "start_date": {
            "iso": "2017-12-16T16:00+00:00"
        },
        "dateFilter": 16,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.413Z",
        "updated_at": "2018-02-09T12:38:23.413Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1700",
        "status": "completed",
        "related_name": "3rd ODI Match",
        "expires": 10800,
        "name": "India vs Sri Lanka",
        "short_name": "IND vs SL",
        "title": "India vs Sri Lanka - 3rd ODI Match - India vs Sri Lanka 2017",
        "season": {
            "name": "India vs Sri Lanka 2017"
        },
        "format": "one-day",
        "venue": "Dr. Y.S. Rajasekhara Reddy ACA-VDCA Cricket Stadium, Visakhapatnam, India",
        "approx_completed_ts": 1513520813,
        "teams": {
            "a": {
                "name": "India",
                "key": "ind"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "a",
        "key": "indsl_2017_one-day_03",
        "msgs": {
            "info": "India won by 8 wkts",
            "completed": "India won by 8 wkts",
            "result": "India beat Sri Lanka by 8 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/indsl_2017/indsl_2017_one-day_03/",
        "start_date": {
            "iso": "2017-12-17T08:00+00:00"
        },
        "dateFilter": 17,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.414Z",
        "updated_at": "2018-02-09T12:38:23.414Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1701",
        "status": "completed",
        "related_name": "1st Match",
        "expires": 10800,
        "name": "Sydney Thunder vs Sydney Sixers",
        "short_name": "SYT vs SYD",
        "title": "Sydney Thunder vs Sydney Sixers - 1st Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Sydney Showground Stadium, Sydney, Australia",
        "approx_completed_ts": 1513685427,
        "teams": {
            "a": {
                "name": "Sydney Thunder",
                "key": "syt"
            },
            "b": {
                "name": "Sydney Sixers",
                "key": "syd"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g1",
        "msgs": {
            "info": "Sydney Thunder won by 5 wickets.",
            "completed": "Sydney Thunder won by 5 wickets.",
            "result": "Sydney Thunder beat Sydney Sixers by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g1/",
        "start_date": {
            "iso": "2017-12-19T08:40+00:00"
        },
        "dateFilter": 19,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.414Z",
        "updated_at": "2018-02-09T12:38:23.414Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1702",
        "status": "completed",
        "related_name": "1st ODI Match",
        "expires": 10800,
        "name": "New Zealand vs West Indies",
        "short_name": "NZ vs WI",
        "title": "New Zealand vs West Indies - 1st ODI Match - New Zealand vs West Indies 2017",
        "season": {
            "name": "New Zealand vs West Indies 2017"
        },
        "format": "one-day",
        "venue": "Cobham Oval (New) , Whangarei, New Zealand",
        "approx_completed_ts": 1513749361,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "West Indies",
                "key": "wi"
            }
        },
        "winner_team": "a",
        "key": "nzwi_2017_one-day_01",
        "msgs": {
            "info": "New Zealand won by 5 wickets (with 24 balls remaining)",
            "completed": "New Zealand won by 5 wickets (with 24 balls remaining)",
            "result": "New Zealand beat West Indies by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzwi_2017/nzwi_2017_one-day_01/",
        "start_date": {
            "iso": "2017-12-19T22:00+00:00"
        },
        "dateFilter": 19,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.414Z",
        "updated_at": "2018-02-09T12:38:23.414Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1703",
        "status": "completed",
        "related_name": "2nd Match",
        "expires": 10800,
        "name": "Brisbane Heat vs Melbourne Stars",
        "short_name": "BH vs MLS",
        "title": "Brisbane Heat vs Melbourne Stars - 2nd Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "The Gabba, Brisbane, Australia",
        "approx_completed_ts": 1513771731,
        "teams": {
            "a": {
                "name": "Brisbane Heat",
                "key": "bh"
            },
            "b": {
                "name": "Melbourne Stars",
                "key": "mls"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g2",
        "msgs": {
            "info": "Brisbane Heat won by 15 runs",
            "completed": "Brisbane Heat won by 15 runs",
            "result": "Brisbane Heat beat Melbourne Stars by 15 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g2/",
        "start_date": {
            "iso": "2017-12-20T08:40+00:00"
        },
        "dateFilter": 20,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.414Z",
        "updated_at": "2018-02-09T12:38:23.414Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1704",
        "status": "completed",
        "related_name": "1st T20 Match",
        "expires": 10800,
        "name": "India vs Sri Lanka",
        "short_name": "IND vs SL",
        "title": "India vs Sri Lanka - 1st T20 Match - India vs Sri Lanka 2017",
        "season": {
            "name": "India vs Sri Lanka 2017"
        },
        "format": "t20",
        "venue": "Barabati Stadium, Cuttack, India",
        "approx_completed_ts": 1513788417,
        "teams": {
            "a": {
                "name": "India",
                "key": "ind"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "a",
        "key": "indsl_2017_t20_01",
        "msgs": {
            "info": "India won by 93 runs.",
            "completed": "India won by 93 runs.",
            "result": "India beat Sri Lanka by 93 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/indsl_2017/indsl_2017_t20_01/",
        "start_date": {
            "iso": "2017-12-20T13:30+00:00"
        },
        "dateFilter": 20,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.414Z",
        "updated_at": "2018-02-09T12:38:23.414Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1705",
        "status": "completed",
        "related_name": "3rd Match",
        "expires": 10800,
        "name": "Hobart Hurricanes vs Melbourne Renegades",
        "short_name": "HBH vs MLR",
        "title": "Hobart Hurricanes vs Melbourne Renegades - 3rd Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Bellerive Oval, Hobart, Australia",
        "approx_completed_ts": 1513856999,
        "teams": {
            "a": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            },
            "b": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g3",
        "msgs": {
            "info": "Melbourne Renegades won by 7 wkts",
            "completed": "Melbourne Renegades won by 7 wkts",
            "result": "Melbourne Renegades beat Hobart Hurricanes by 7 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g3/",
        "start_date": {
            "iso": "2017-12-21T08:40+00:00"
        },
        "dateFilter": 21,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.415Z",
        "updated_at": "2018-02-09T12:38:23.415Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1706",
        "status": "completed",
        "related_name": "4th Match",
        "expires": 10800,
        "name": "Adelaide Strikers vs Sydney Thunder",
        "short_name": "ADS vs SYT",
        "title": "Adelaide Strikers vs Sydney Thunder - 4th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Adelaide Oval, Adelaide, Australia",
        "approx_completed_ts": 1513943025,
        "teams": {
            "a": {
                "name": "Adelaide Strikers",
                "key": "ads"
            },
            "b": {
                "name": "Sydney Thunder",
                "key": "syt"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g4",
        "msgs": {
            "info": "Adelaide Strikers won by 53 runs",
            "completed": "Adelaide Strikers won by 53 runs",
            "result": "Adelaide Strikers beat Sydney Thunder by 53 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g4/",
        "start_date": {
            "iso": "2017-12-22T08:40+00:00"
        },
        "dateFilter": 22,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.415Z",
        "updated_at": "2018-02-09T12:38:23.415Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1707",
        "status": "completed",
        "related_name": "2nd T20 Match",
        "expires": 10800,
        "name": "India vs Sri Lanka",
        "short_name": "IND vs SL",
        "title": "India vs Sri Lanka - 2nd T20 Match - India vs Sri Lanka 2017",
        "season": {
            "name": "India vs Sri Lanka 2017"
        },
        "format": "t20",
        "venue": "Holkar Cricket Stadium, Indore, India",
        "approx_completed_ts": 1513961428,
        "teams": {
            "a": {
                "name": "India",
                "key": "ind"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "a",
        "key": "indsl_2017_t20_02",
        "msgs": {
            "info": "India won by 88 runs.",
            "completed": "India won by 88 runs.",
            "result": "India beat Sri Lanka by 88 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/indsl_2017/indsl_2017_t20_02/",
        "start_date": {
            "iso": "2017-12-22T13:30+00:00"
        },
        "dateFilter": 22,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.415Z",
        "updated_at": "2018-02-09T12:38:23.415Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1708",
        "status": "completed",
        "related_name": "2nd ODI Match",
        "expires": 10800,
        "name": "New Zealand vs West Indies",
        "short_name": "NZ vs WI",
        "title": "New Zealand vs West Indies - 2nd ODI Match - New Zealand vs West Indies 2017",
        "season": {
            "name": "New Zealand vs West Indies 2017"
        },
        "format": "one-day",
        "venue": "Hagley Oval, Christchurch, New Zealand",
        "approx_completed_ts": 1514003007,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "West Indies",
                "key": "wi"
            }
        },
        "winner_team": "a",
        "key": "nzwi_2017_one-day_02",
        "msgs": {
            "info": "New Zealand won by 204 runs",
            "completed": "New Zealand won by 204 runs",
            "result": "New Zealand beat West Indies by 204 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzwi_2017/nzwi_2017_one-day_02/",
        "start_date": {
            "iso": "2017-12-22T22:00+00:00"
        },
        "dateFilter": 22,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.415Z",
        "updated_at": "2018-02-09T12:38:23.415Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1709",
        "status": "completed",
        "related_name": "5th Match",
        "expires": 10800,
        "name": "Sydney Sixers vs Perth Scorchers",
        "short_name": "SYD vs PER",
        "title": "Sydney Sixers vs Perth Scorchers - 5th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Sydney Cricket Ground, Sydney, Australia",
        "approx_completed_ts": 1514016368,
        "teams": {
            "a": {
                "name": "Sydney Sixers",
                "key": "syd"
            },
            "b": {
                "name": "Perth Scorchers",
                "key": "per"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g5",
        "msgs": {
            "info": "Perth Scorchers won by 6 wickets.",
            "completed": "Perth Scorchers won by 6 wickets.",
            "result": "Perth Scorchers beat Sydney Sixers by 6 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g5/",
        "start_date": {
            "iso": "2017-12-23T05:10+00:00"
        },
        "dateFilter": 23,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.415Z",
        "updated_at": "2018-02-09T12:38:23.415Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd170a",
        "status": "completed",
        "related_name": "6th Match",
        "expires": 10800,
        "name": "Melbourne Renegades vs Brisbane Heat",
        "short_name": "MLR vs BH",
        "title": "Melbourne Renegades vs Brisbane Heat - 6th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Docklands Stadium, Melbourne, Australia",
        "approx_completed_ts": 1514028151,
        "teams": {
            "a": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            },
            "b": {
                "name": "Brisbane Heat",
                "key": "bh"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g6",
        "msgs": {
            "info": "Melbourne Renegades won by 7 wkts",
            "completed": "Melbourne Renegades won by 7 wkts",
            "result": "Melbourne Renegades beat Brisbane Heat by 7 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g6/",
        "start_date": {
            "iso": "2017-12-23T08:25+00:00"
        },
        "dateFilter": 23,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.416Z",
        "updated_at": "2018-02-09T12:38:23.416Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd170b",
        "status": "completed",
        "related_name": "3rd T20 Match",
        "expires": 10800,
        "name": "India vs Sri Lanka",
        "short_name": "IND vs SL",
        "title": "India vs Sri Lanka - 3rd T20 Match - India vs Sri Lanka 2017",
        "season": {
            "name": "India vs Sri Lanka 2017"
        },
        "format": "t20",
        "venue": "Wankhede Stadium, Mumbai, India",
        "approx_completed_ts": 1514134659,
        "teams": {
            "a": {
                "name": "India",
                "key": "ind"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "a",
        "key": "indsl_2017_t20_03",
        "msgs": {
            "info": "India won by 5 wickets.",
            "completed": "India won by 5 wickets.",
            "result": "India beat Sri Lanka by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/indsl_2017/indsl_2017_t20_03/",
        "start_date": {
            "iso": "2017-12-24T13:30+00:00"
        },
        "dateFilter": 24,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.416Z",
        "updated_at": "2018-02-09T12:38:23.416Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd170c",
        "status": "completed",
        "related_name": "3rd ODI Match",
        "expires": 10800,
        "name": "New Zealand vs West Indies",
        "short_name": "NZ vs WI",
        "title": "New Zealand vs West Indies - 3rd ODI Match - New Zealand vs West Indies 2017",
        "season": {
            "name": "New Zealand vs West Indies 2017"
        },
        "format": "one-day",
        "venue": "Hagley Oval, Christchurch, New Zealand",
        "approx_completed_ts": 1514269822,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "West Indies",
                "key": "wi"
            }
        },
        "winner_team": "a",
        "key": "nzwi_2017_one-day_03",
        "msgs": {
            "info": "New Zealand won by 66 runs (D/L method)",
            "completed": "New Zealand won by 66 runs (D/L method)",
            "result": "New Zealand beat West Indies by 33 runs (D/L method)",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzwi_2017/nzwi_2017_one-day_03/",
        "start_date": {
            "iso": "2017-12-25T22:00+00:00"
        },
        "dateFilter": 25,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.416Z",
        "updated_at": "2018-02-09T12:38:23.416Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd170d",
        "status": "completed",
        "related_name": "4th Test Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 4th Test Match - Australia vs England - The Ashes 2017-2018",
        "season": {
            "name": "Australia vs England - The Ashes 2017-2018"
        },
        "format": "test",
        "venue": "Melbourne Cricket Ground, Australia",
        "approx_completed_ts": 1514613144,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": "",
        "key": "auseng_2017_test_04",
        "msgs": {
            "info": "Match drawn.",
            "completed": "Match drawn.",
            "result": "Match drawn",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/auseng_2017/auseng_2017_test_04/",
        "start_date": {
            "iso": "2017-12-25T23:30+00:00"
        },
        "dateFilter": 25,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.416Z",
        "updated_at": "2018-02-09T12:38:23.416Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd170e",
        "status": "completed",
        "related_name": "7th Match",
        "expires": 10800,
        "name": "Perth Scorchers vs Melbourne Stars",
        "short_name": "PER vs MLS",
        "title": "Perth Scorchers vs Melbourne Stars - 7th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "W.A.C.A. Ground, Perth, Australia",
        "approx_completed_ts": 1514286749,
        "teams": {
            "a": {
                "name": "Perth Scorchers",
                "key": "per"
            },
            "b": {
                "name": "Melbourne Stars",
                "key": "mls"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g7",
        "msgs": {
            "info": "Perth Scorchers won by 13 runs.",
            "completed": "Perth Scorchers won by 13 runs.",
            "result": "Perth Scorchers beat Melbourne Stars by 13 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g7/",
        "start_date": {
            "iso": "2017-12-26T08:10+00:00"
        },
        "dateFilter": 26,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.416Z",
        "updated_at": "2018-02-09T12:38:23.416Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd170f",
        "status": "completed",
        "related_name": "Only Test Match",
        "expires": 10800,
        "name": "South Africa vs Zimbabwe",
        "short_name": "RSA vs ZIM",
        "title": "South Africa vs Zimbabwe - Only Test Match - South Africa vs Zimbabwe 2017",
        "season": {
            "name": "South Africa vs Zimbabwe 2017"
        },
        "format": "test",
        "venue": "St George's Park, Port Elizabeth, South Africa",
        "approx_completed_ts": 1514390871,
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": "a",
        "key": "rsazim_2017_test_01",
        "msgs": {
            "info": "South Africa won by an innings and 120 runs",
            "completed": "South Africa won by an innings and 120 runs",
            "result": "South Africa beat Zimbabwe by 120 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsazim_2017/rsazim_2017_test_01/",
        "start_date": {
            "iso": "2017-12-26T11:30+00:00"
        },
        "dateFilter": 26,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.416Z",
        "updated_at": "2018-02-09T12:38:23.416Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1710",
        "status": "completed",
        "related_name": "8th Match",
        "expires": 10800,
        "name": "Brisbane Heat vs Sydney Thunder",
        "short_name": "BH vs SYT",
        "title": "Brisbane Heat vs Sydney Thunder - 8th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "The Gabba, Brisbane, Australia",
        "approx_completed_ts": 1514374351,
        "teams": {
            "a": {
                "name": "Brisbane Heat",
                "key": "bh"
            },
            "b": {
                "name": "Sydney Thunder",
                "key": "syt"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g8",
        "msgs": {
            "info": "Brisbane Heat won by 6 wickets.(D/L method).",
            "completed": "Brisbane Heat won by 6 wickets.(D/L method).",
            "match_comments": "Match reduced to 17 overs due to rain.",
            "result": "Brisbane Heat beat Sydney Thunder by 6 wickets (D/L method)",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g8/",
        "start_date": {
            "iso": "2017-12-27T08:10+00:00"
        },
        "dateFilter": 27,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.417Z",
        "updated_at": "2018-02-09T12:38:23.417Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1711",
        "status": "completed",
        "related_name": "9th Match",
        "expires": 10800,
        "name": "Sydney Sixers vs Adelaide Strikers",
        "short_name": "SYD vs ADS",
        "title": "Sydney Sixers vs Adelaide Strikers - 9th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Sydney Cricket Ground, Sydney, Australia",
        "approx_completed_ts": 1514459568,
        "teams": {
            "a": {
                "name": "Sydney Sixers",
                "key": "syd"
            },
            "b": {
                "name": "Adelaide Strikers",
                "key": "ads"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g9",
        "msgs": {
            "info": "Adelaide Strikers won by 6 runs",
            "completed": "Adelaide Strikers won by 6 runs",
            "result": "Adelaide Strikers beat Sydney Sixers by 6 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g9/",
        "start_date": {
            "iso": "2017-12-28T08:10+00:00"
        },
        "dateFilter": 28,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.417Z",
        "updated_at": "2018-02-09T12:38:23.417Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1712",
        "status": "completed",
        "related_name": "1st T20 Match",
        "expires": 10800,
        "name": "New Zealand vs West Indies",
        "short_name": "NZ vs WI",
        "title": "New Zealand vs West Indies - 1st T20 Match - New Zealand vs West Indies 2017",
        "season": {
            "name": "New Zealand vs West Indies 2017"
        },
        "format": "t20",
        "venue": "Saxton Oval, Nelson, New Zealand",
        "approx_completed_ts": 1514524596,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "West Indies",
                "key": "wi"
            }
        },
        "winner_team": "a",
        "key": "nzwi_2017_t20_01",
        "msgs": {
            "info": "New Zealand won by 47 runs.",
            "completed": "New Zealand won by 47 runs.",
            "result": "New Zealand beat West Indies by 47 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzwi_2017/nzwi_2017_t20_01/",
        "start_date": {
            "iso": "2017-12-29T02:00+00:00"
        },
        "dateFilter": 29,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.417Z",
        "updated_at": "2018-02-09T12:38:23.417Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1713",
        "status": "completed",
        "related_name": "10th Match",
        "expires": 10800,
        "name": "Melbourne Renegades vs Perth Scorchers",
        "short_name": "MLR vs PER",
        "title": "Melbourne Renegades vs Perth Scorchers - 10th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Docklands Stadium, Melbourne, Australia",
        "approx_completed_ts": 1514546574,
        "teams": {
            "a": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            },
            "b": {
                "name": "Perth Scorchers",
                "key": "per"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g10",
        "msgs": {
            "info": "Scorchers won by 3 wickets (with 6 balls remaining)",
            "completed": "Scorchers won by 3 wickets (with 6 balls remaining)",
            "result": "Perth Scorchers beat Melbourne Renegades by 3 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g10/",
        "start_date": {
            "iso": "2017-12-29T08:10+00:00"
        },
        "dateFilter": 29,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.418Z",
        "updated_at": "2018-02-09T12:38:23.418Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1714",
        "status": "completed",
        "related_name": "11th Match",
        "expires": 10800,
        "name": "Hobart Hurricanes vs Sydney Thunder",
        "short_name": "HBH vs SYT",
        "title": "Hobart Hurricanes vs Sydney Thunder - 11th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Aurora Stadium, Launceston, Australia",
        "approx_completed_ts": 1514632657,
        "teams": {
            "a": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            },
            "b": {
                "name": "Sydney Thunder",
                "key": "syt"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g11",
        "msgs": {
            "info": "Sydney Thunder won by 57 runs.",
            "completed": "Sydney Thunder won by 57 runs.",
            "result": "Sydney Thunder beat Hobart Hurricanes by 57 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g11/",
        "start_date": {
            "iso": "2017-12-30T08:10+00:00"
        },
        "dateFilter": 30,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:38:23.418Z",
        "updated_at": "2018-02-09T12:38:23.418Z",
        "active": 1,
        "_id": "5a7d963f8884a43780cd1715",
        "status": "completed",
        "related_name": "12th Match",
        "expires": 10800,
        "name": "Adelaide Strikers vs Brisbane Heat",
        "short_name": "ADS vs BH",
        "title": "Adelaide Strikers vs Brisbane Heat - 12th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Adelaide Oval, Adelaide, Australia",
        "approx_completed_ts": 1514718127,
        "teams": {
            "a": {
                "name": "Adelaide Strikers",
                "key": "ads"
            },
            "b": {
                "name": "Brisbane Heat",
                "key": "bh"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g12",
        "msgs": {
            "info": "Adelaide Strikers won by 56 runs",
            "completed": "Adelaide Strikers won by 56 runs",
            "result": "Adelaide Strikers beat Brisbane Heat by 56 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g12/",
        "start_date": {
            "iso": "2017-12-31T08:10+00:00"
        },
        "dateFilter": 31,
        "monthFilter": "2017-12",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.366Z",
        "updated_at": "2018-02-09T12:39:07.366Z",
        "active": 1,
        "_id": "5a7d966b2850991620635025",
        "status": "completed",
        "related_name": "2nd T20 Match",
        "expires": 10800,
        "name": "New Zealand vs West Indies",
        "short_name": "NZ vs WI",
        "title": "New Zealand vs West Indies - 2nd T20 Match - New Zealand vs West Indies 2017",
        "season": {
            "name": "New Zealand vs West Indies 2017"
        },
        "format": "t20",
        "venue": "Bay Oval, Mount Maunganui, New Zealand",
        "approx_completed_ts": 1514798030,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "West Indies",
                "key": "wi"
            }
        },
        "winner_team": "",
        "key": "nzwi_2017_t20_02",
        "msgs": {
            "info": "No Result",
            "completed": "No Result",
            "match_comments": "Rain stops play",
            "result": "No result",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzwi_2017/nzwi_2017_t20_02/",
        "start_date": {
            "iso": "2018-01-01T06:00+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.371Z",
        "updated_at": "2018-02-09T12:39:07.371Z",
        "active": 1,
        "_id": "5a7d966b2850991620635026",
        "status": "completed",
        "related_name": "13th Match",
        "expires": 10800,
        "name": "Sydney Thunder vs Hobart Hurricanes",
        "short_name": "SYT vs HBH",
        "title": "Sydney Thunder vs Hobart Hurricanes - 13th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Sydney Showground Stadium, Sydney, Australia",
        "approx_completed_ts": 1514802251,
        "teams": {
            "a": {
                "name": "Sydney Thunder",
                "key": "syt"
            },
            "b": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g13",
        "msgs": {
            "info": "Hobart Hurricanes won by 9 runs",
            "completed": "Hobart Hurricanes won by 9 runs",
            "result": "Hobart Hurricanes beat Sydney Thunder by 9 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g13/",
        "start_date": {
            "iso": "2018-01-01T07:10+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.372Z",
        "updated_at": "2018-02-09T12:39:07.372Z",
        "active": 1,
        "_id": "5a7d966b2850991620635027",
        "status": "completed",
        "related_name": "14th Match",
        "expires": 10800,
        "name": "Perth Scorchers vs Sydney Sixers",
        "short_name": "PER vs SYD",
        "title": "Perth Scorchers vs Sydney Sixers - 14th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "W.A.C.A. Ground, Perth, Australia",
        "approx_completed_ts": 1514813274,
        "teams": {
            "a": {
                "name": "Perth Scorchers",
                "key": "per"
            },
            "b": {
                "name": "Sydney Sixers",
                "key": "syd"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g14",
        "msgs": {
            "info": "Perth Scorchers won by 6 wkts",
            "completed": "Perth Scorchers won by 6 wkts",
            "result": "Perth Scorchers beat Sydney Sixers by 6 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g14/",
        "start_date": {
            "iso": "2018-01-01T10:20+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.372Z",
        "updated_at": "2018-02-09T12:39:07.372Z",
        "active": 1,
        "_id": "5a7d966b2850991620635028",
        "status": "completed",
        "related_name": "15th Match",
        "expires": 10800,
        "name": "Melbourne Stars vs Brisbane Heat",
        "short_name": "MLS vs BH",
        "title": "Melbourne Stars vs Brisbane Heat - 15th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Melbourne Cricket Ground, Melbourne, Australia",
        "approx_completed_ts": 1514890711,
        "teams": {
            "a": {
                "name": "Melbourne Stars",
                "key": "mls"
            },
            "b": {
                "name": "Brisbane Heat",
                "key": "bh"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g15",
        "msgs": {
            "info": "Brisbane Heat won by 9 wickets.",
            "completed": "Brisbane Heat won by 9 wickets.",
            "result": "Brisbane Heat beat Melbourne Stars by 9 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g15/",
        "start_date": {
            "iso": "2018-01-02T08:10+00:00"
        },
        "dateFilter": 2,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.373Z",
        "updated_at": "2018-02-09T12:39:07.373Z",
        "active": 1,
        "_id": "5a7d966b2850991620635029",
        "status": "completed",
        "related_name": "3rd T20 Match",
        "expires": 10800,
        "name": "New Zealand vs West Indies",
        "short_name": "NZ vs WI",
        "title": "New Zealand vs West Indies - 3rd T20 Match - New Zealand vs West Indies 2017",
        "season": {
            "name": "New Zealand vs West Indies 2017"
        },
        "format": "t20",
        "venue": "Bay Oval, Mount Maunganui, New Zealand",
        "approx_completed_ts": 1514970155,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "West Indies",
                "key": "wi"
            }
        },
        "winner_team": "a",
        "key": "nzwi_2017_t20_03",
        "msgs": {
            "info": "New Zealand won by 119 runs.",
            "completed": "New Zealand won by 119 runs.",
            "result": "New Zealand beat West Indies by 119 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzwi_2017/nzwi_2017_t20_03/",
        "start_date": {
            "iso": "2018-01-03T06:00+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.374Z",
        "updated_at": "2018-02-09T12:39:07.374Z",
        "active": 1,
        "_id": "5a7d966b285099162063502a",
        "status": "completed",
        "related_name": "16th Match",
        "expires": 10800,
        "name": "Melbourne Renegades vs Sydney Sixers",
        "short_name": "MLR vs SYD",
        "title": "Melbourne Renegades vs Sydney Sixers - 16th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Simonds Stadium, Geelong, Australia",
        "approx_completed_ts": 1514977481,
        "teams": {
            "a": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            },
            "b": {
                "name": "Sydney Sixers",
                "key": "syd"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g16",
        "msgs": {
            "info": "Melbourne Renegades won by 8 wickets.",
            "completed": "Melbourne Renegades won by 8 wickets.",
            "result": "Melbourne Renegades beat Sydney Sixers by 8 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g16/",
        "start_date": {
            "iso": "2018-01-03T08:10+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.374Z",
        "updated_at": "2018-02-09T12:39:07.374Z",
        "active": 1,
        "_id": "5a7d966b285099162063502b",
        "status": "completed",
        "related_name": "5th Test Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 5th Test Match - Australia vs England - The Ashes 2017-2018",
        "season": {
            "name": "Australia vs England - The Ashes 2017-2018"
        },
        "format": "test",
        "venue": "Sydney Cricket Ground, Australia",
        "approx_completed_ts": 1515381417,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": "a",
        "key": "auseng_2017_test_05",
        "msgs": {
            "info": "Australia won by an innings and 123 runs.",
            "completed": "Australia won by an innings and 123 runs.",
            "result": "Australia beat England by 123 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/auseng_2017/auseng_2017_test_05/",
        "start_date": {
            "iso": "2018-01-03T23:30+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.375Z",
        "updated_at": "2018-02-09T12:39:07.375Z",
        "active": 1,
        "_id": "5a7d966b285099162063502c",
        "status": "completed",
        "related_name": "17th Match",
        "expires": 10800,
        "name": "Hobart Hurricanes vs Adelaide Strikers",
        "short_name": "HBH vs ADS",
        "title": "Hobart Hurricanes vs Adelaide Strikers - 17th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Bellerive Oval, Hobart, Australia",
        "approx_completed_ts": 1515064746,
        "teams": {
            "a": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            },
            "b": {
                "name": "Adelaide Strikers",
                "key": "ads"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g17",
        "msgs": {
            "info": "Hobart Hurricanes won by 7 runs",
            "completed": "Hobart Hurricanes won by 7 runs",
            "result": "Hobart Hurricanes beat Adelaide Strikers by 7 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g17/",
        "start_date": {
            "iso": "2018-01-04T08:10+00:00"
        },
        "dateFilter": 4,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.377Z",
        "updated_at": "2018-02-09T12:39:07.377Z",
        "active": 1,
        "_id": "5a7d966b285099162063502d",
        "status": "completed",
        "related_name": "18th Match",
        "expires": 10800,
        "name": "Brisbane Heat vs Perth Scorchers",
        "short_name": "BH vs PER",
        "title": "Brisbane Heat vs Perth Scorchers - 18th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "The Gabba, Brisbane, Australia",
        "approx_completed_ts": 1515151675,
        "teams": {
            "a": {
                "name": "Brisbane Heat",
                "key": "bh"
            },
            "b": {
                "name": "Perth Scorchers",
                "key": "per"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g18",
        "msgs": {
            "info": "Brisbane Heat won by 49 runs",
            "completed": "Brisbane Heat won by 49 runs",
            "result": "Brisbane Heat beat Perth Scorchers by 49 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g18/",
        "start_date": {
            "iso": "2018-01-05T08:10+00:00"
        },
        "dateFilter": 5,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.377Z",
        "updated_at": "2018-02-09T12:39:07.377Z",
        "active": 1,
        "_id": "5a7d966b285099162063502e",
        "status": "completed",
        "related_name": "1st Test Match",
        "expires": 10800,
        "name": "India vs South Africa",
        "short_name": "IND vs RSA",
        "title": "India vs South Africa - 1st Test Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "test",
        "venue": "Newlands, Cape Town, South Africa",
        "approx_completed_ts": 1515423077,
        "teams": {
            "a": {
                "name": "India",
                "key": "ind"
            },
            "b": {
                "name": "South Africa",
                "key": "rsa"
            }
        },
        "winner_team": "b",
        "key": "rsaind_2017_test_01",
        "msgs": {
            "info": "South Africa won by 72 runs.",
            "completed": "South Africa won by 72 runs.",
            "result": "South Africa beat India by 72 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_test_01/",
        "start_date": {
            "iso": "2018-01-05T08:30+00:00"
        },
        "dateFilter": 5,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.378Z",
        "updated_at": "2018-02-09T12:39:07.378Z",
        "active": 1,
        "_id": "5a7d966b285099162063502f",
        "status": "completed",
        "related_name": "1st ODI Match",
        "expires": 10800,
        "name": "New Zealand vs Pakistan",
        "short_name": "NZ vs PAK",
        "title": "New Zealand vs Pakistan - 1st ODI Match - New Zealand vs Pakistan 2018",
        "season": {
            "name": "New Zealand vs Pakistan 2018"
        },
        "format": "one-day",
        "venue": "Basin Reserve, Wellington, New Zealand",
        "approx_completed_ts": 1515217395,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "Pakistan",
                "key": "pak"
            }
        },
        "winner_team": "a",
        "key": "nzpak_2018_one-day_01",
        "msgs": {
            "info": "New Zealand won by 61 runs (DLS method due to rain delay)",
            "completed": "New Zealand won by 61 runs (DLS method due to rain delay)",
            "result": "New Zealand beat Pakistan (D/L method)",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzpak_2018/nzpak_2018_one-day_01/",
        "start_date": {
            "iso": "2018-01-05T22:00+00:00"
        },
        "dateFilter": 5,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.378Z",
        "updated_at": "2018-02-09T12:39:07.378Z",
        "active": 1,
        "_id": "5a7d966b2850991620635030",
        "status": "completed",
        "related_name": "19th Match",
        "expires": 10800,
        "name": "Melbourne Stars vs Melbourne Renegades",
        "short_name": "MLS vs MLR",
        "title": "Melbourne Stars vs Melbourne Renegades - 19th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Melbourne Cricket Ground, Melbourne, Australia",
        "approx_completed_ts": 1515237374,
        "teams": {
            "a": {
                "name": "Melbourne Stars",
                "key": "mls"
            },
            "b": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g19",
        "msgs": {
            "info": "Melbourne Renegades won by 6 wkts",
            "completed": "Melbourne Renegades won by 6 wkts",
            "result": "Melbourne Renegades beat Melbourne Stars by 6 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g19/",
        "start_date": {
            "iso": "2018-01-06T08:10+00:00"
        },
        "dateFilter": 6,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.379Z",
        "updated_at": "2018-02-09T12:39:07.379Z",
        "active": 1,
        "_id": "5a7d966b2850991620635031",
        "status": "completed",
        "related_name": "20th Match",
        "expires": 10800,
        "name": "Sydney Thunder vs Adelaide Strikers",
        "short_name": "SYT vs ADS",
        "title": "Sydney Thunder vs Adelaide Strikers - 20th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Sydney Showground Stadium, Sydney, Australia",
        "approx_completed_ts": 1515323835,
        "teams": {
            "a": {
                "name": "Sydney Thunder",
                "key": "syt"
            },
            "b": {
                "name": "Adelaide Strikers",
                "key": "ads"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g20",
        "msgs": {
            "info": "Adelaide Strikers won by 25 runs",
            "completed": "Adelaide Strikers won by 25 runs",
            "result": "Adelaide Strikers beat Sydney Thunder by 25 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g20/",
        "start_date": {
            "iso": "2018-01-07T08:10+00:00"
        },
        "dateFilter": 7,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.379Z",
        "updated_at": "2018-02-09T12:39:07.379Z",
        "active": 1,
        "_id": "5a7d966b2850991620635032",
        "status": "completed",
        "related_name": "21st Match",
        "expires": 10800,
        "name": "Hobart Hurricanes vs Sydney Sixers",
        "short_name": "HBH vs SYD",
        "title": "Hobart Hurricanes vs Sydney Sixers - 21st Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Bellerive Oval, Hobart, Australia",
        "approx_completed_ts": 1515406734,
        "teams": {
            "a": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            },
            "b": {
                "name": "Sydney Sixers",
                "key": "syd"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g21",
        "msgs": {
            "info": "Hobart Hurricanes won by 5 runs",
            "completed": "Hobart Hurricanes won by 5 runs",
            "result": "Hobart Hurricanes beat Sydney Sixers by 5 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g21/",
        "start_date": {
            "iso": "2018-01-08T07:10+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.380Z",
        "updated_at": "2018-02-09T12:39:07.380Z",
        "active": 1,
        "_id": "5a7d966b2850991620635033",
        "status": "completed",
        "related_name": "22nd Match",
        "expires": 10800,
        "name": "Perth Scorchers vs Melbourne Renegades",
        "short_name": "PER vs MLR",
        "title": "Perth Scorchers vs Melbourne Renegades - 22nd Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "W.A.C.A. Ground, Perth, Australia",
        "approx_completed_ts": 1515418995,
        "teams": {
            "a": {
                "name": "Perth Scorchers",
                "key": "per"
            },
            "b": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g22",
        "msgs": {
            "info": "Perth Scorchers won by 5 Wicket",
            "completed": "Perth Scorchers won by 5 Wicket",
            "result": "Perth Scorchers beat Melbourne Renegades by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g22/",
        "start_date": {
            "iso": "2018-01-08T10:20+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.380Z",
        "updated_at": "2018-02-09T12:39:07.380Z",
        "active": 1,
        "_id": "5a7d966b2850991620635034",
        "status": "completed",
        "related_name": "2nd ODI Match",
        "expires": 10800,
        "name": "New Zealand vs Pakistan",
        "short_name": "NZ vs PAK",
        "title": "New Zealand vs Pakistan - 2nd ODI Match - New Zealand vs Pakistan 2018",
        "season": {
            "name": "New Zealand vs Pakistan 2018"
        },
        "format": "one-day",
        "venue": "Saxton Oval, Nelson, New Zealand",
        "approx_completed_ts": 1515478702,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "Pakistan",
                "key": "pak"
            }
        },
        "winner_team": "a",
        "key": "nzpak_2018_one-day_02",
        "msgs": {
            "info": "New Zealand won by 8 wkts (Match reduced to 25 overs due to rain)",
            "completed": "New Zealand won by 8 wkts (Match reduced to 25 overs due to rain)",
            "result": "New Zealand beat Pakistan (D/L method)",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzpak_2018/nzpak_2018_one-day_02/",
        "start_date": {
            "iso": "2018-01-08T22:00+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.380Z",
        "updated_at": "2018-02-09T12:39:07.380Z",
        "active": 1,
        "_id": "5a7d966b2850991620635035",
        "status": "completed",
        "related_name": "23rd Match",
        "expires": 10800,
        "name": "Adelaide Strikers vs Melbourne Stars",
        "short_name": "ADS vs MLS",
        "title": "Adelaide Strikers vs Melbourne Stars - 23rd Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Adelaide Oval, Adelaide, Australia",
        "approx_completed_ts": 1515497812,
        "teams": {
            "a": {
                "name": "Adelaide Strikers",
                "key": "ads"
            },
            "b": {
                "name": "Melbourne Stars",
                "key": "mls"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g23",
        "msgs": {
            "info": "Adelaide Strikers won by 8 Wickets",
            "completed": "Adelaide Strikers won by 8 Wickets",
            "result": "Adelaide Strikers beat Melbourne Stars by 8 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g23/",
        "start_date": {
            "iso": "2018-01-09T08:40+00:00"
        },
        "dateFilter": 9,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.381Z",
        "updated_at": "2018-02-09T12:39:07.381Z",
        "active": 1,
        "_id": "5a7d966b2850991620635036",
        "status": "completed",
        "related_name": "24th Match",
        "expires": 10800,
        "name": "Brisbane Heat vs Hobart Hurricanes",
        "short_name": "BH vs HBH",
        "title": "Brisbane Heat vs Hobart Hurricanes - 24th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "The Gabba, Brisbane, Australia",
        "approx_completed_ts": 1515585359,
        "teams": {
            "a": {
                "name": "Brisbane Heat",
                "key": "bh"
            },
            "b": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g24",
        "msgs": {
            "info": "Hobart Hurricanes won by 3 runs.",
            "completed": "Hobart Hurricanes won by 3 runs.",
            "result": "Hobart Hurricanes beat Brisbane Heat by 3 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g24/",
        "start_date": {
            "iso": "2018-01-10T08:40+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.381Z",
        "updated_at": "2018-02-09T12:39:07.381Z",
        "active": 1,
        "_id": "5a7d966b2850991620635037",
        "status": "completed",
        "related_name": "1st Match",
        "expires": 10800,
        "name": "United Arab Emirates vs Ireland",
        "short_name": "UAE vs IRE",
        "title": "United Arab Emirates vs Ireland - 1st Match - Tri Series 2018 in UAE",
        "season": {
            "name": "Tri Series 2018 in UAE"
        },
        "format": "one-day",
        "venue": "ICC Academy, Dubai, UAE",
        "approx_completed_ts": 1515676679,
        "teams": {
            "a": {
                "name": "United Arab Emirates",
                "key": "uae"
            },
            "b": {
                "name": "Ireland",
                "key": "ire"
            }
        },
        "winner_team": "b",
        "key": "uaetriseries_2018_g1",
        "msgs": {
            "info": "Ireland won by 4 wickets.",
            "completed": "Ireland won by 4 wickets.",
            "result": "Ireland beat United Arab Emirates by 4 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/uaetriseries_2018/uaetriseries_2018_g1/",
        "start_date": {
            "iso": "2018-01-11T05:30+00:00"
        },
        "dateFilter": 11,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.381Z",
        "updated_at": "2018-02-09T12:39:07.381Z",
        "active": 1,
        "_id": "5a7d966b2850991620635038",
        "status": "completed",
        "related_name": "25th Match",
        "expires": 10800,
        "name": "Sydney Thunder vs Perth Scorchers",
        "short_name": "SYT vs PER",
        "title": "Sydney Thunder vs Perth Scorchers - 25th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Sydney Showground Stadium, Sydney, Australia",
        "approx_completed_ts": 1515671764,
        "teams": {
            "a": {
                "name": "Sydney Thunder",
                "key": "syt"
            },
            "b": {
                "name": "Perth Scorchers",
                "key": "per"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g25",
        "msgs": {
            "info": "Sydney Thunder won by 3 runs.",
            "completed": "Sydney Thunder won by 3 runs.",
            "result": "Sydney Thunder beat Perth Scorchers by 3 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g25/",
        "start_date": {
            "iso": "2018-01-11T08:40+00:00"
        },
        "dateFilter": 11,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.382Z",
        "updated_at": "2018-02-09T12:39:07.382Z",
        "active": 1,
        "_id": "5a7d966b2850991620635039",
        "status": "completed",
        "related_name": "26th Match",
        "expires": 10800,
        "name": "Melbourne Renegades vs Melbourne Stars",
        "short_name": "MLR vs MLS",
        "title": "Melbourne Renegades vs Melbourne Stars - 26th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Docklands Stadium, Melbourne, Australia",
        "approx_completed_ts": 1515757535,
        "teams": {
            "a": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            },
            "b": {
                "name": "Melbourne Stars",
                "key": "mls"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g26",
        "msgs": {
            "info": "Melbourne Stars won by 23 runs",
            "completed": "Melbourne Stars won by 23 runs",
            "result": "Melbourne Stars beat Melbourne Renegades by 23 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g26/",
        "start_date": {
            "iso": "2018-01-12T08:40+00:00"
        },
        "dateFilter": 12,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.382Z",
        "updated_at": "2018-02-09T12:39:07.382Z",
        "active": 1,
        "_id": "5a7d966b285099162063503a",
        "status": "completed",
        "related_name": "3rd ODI Match",
        "expires": 10800,
        "name": "New Zealand vs Pakistan",
        "short_name": "NZ vs PAK",
        "title": "New Zealand vs Pakistan - 3rd ODI Match - New Zealand vs Pakistan 2018",
        "season": {
            "name": "New Zealand vs Pakistan 2018"
        },
        "format": "one-day",
        "venue": "University Oval, Dunedin, New Zealand",
        "approx_completed_ts": 1515816557,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "Pakistan",
                "key": "pak"
            }
        },
        "winner_team": "a",
        "key": "nzpak_2018_one-day_03",
        "msgs": {
            "info": "New Zealand won by 183 runs.",
            "completed": "New Zealand won by 183 runs.",
            "result": "New Zealand beat Pakistan by 183 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzpak_2018/nzpak_2018_one-day_03/",
        "start_date": {
            "iso": "2018-01-12T22:00+00:00"
        },
        "dateFilter": 12,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.384Z",
        "updated_at": "2018-02-09T12:39:07.384Z",
        "active": 1,
        "_id": "5a7d966b285099162063503b",
        "status": "completed",
        "related_name": "27th Match",
        "expires": 10800,
        "name": "Adelaide Strikers vs Perth Scorchers",
        "short_name": "ADS vs PER",
        "title": "Adelaide Strikers vs Perth Scorchers - 27th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Traeger Park, Alice Springs, Australia",
        "approx_completed_ts": 1515830826,
        "teams": {
            "a": {
                "name": "Adelaide Strikers",
                "key": "ads"
            },
            "b": {
                "name": "Perth Scorchers",
                "key": "per"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g27",
        "msgs": {
            "info": "Perth Scorchers won by 6 Wickets",
            "completed": "Perth Scorchers won by 6 Wickets",
            "result": "Perth Scorchers beat Adelaide Strikers by 6 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g27/",
        "start_date": {
            "iso": "2018-01-13T05:10+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.384Z",
        "updated_at": "2018-02-09T12:39:07.384Z",
        "active": 1,
        "_id": "5a7d966b285099162063503c",
        "status": "completed",
        "related_name": "2nd Match",
        "expires": 10800,
        "name": "United Arab Emirates vs Ireland",
        "short_name": "UAE vs IRE",
        "title": "United Arab Emirates vs Ireland - 2nd Match - Tri Series 2018 in UAE",
        "season": {
            "name": "Tri Series 2018 in UAE"
        },
        "format": "one-day",
        "venue": "ICC Academy, Dubai, UAE",
        "approx_completed_ts": 1515849527,
        "teams": {
            "a": {
                "name": "United Arab Emirates",
                "key": "uae"
            },
            "b": {
                "name": "Ireland",
                "key": "ire"
            }
        },
        "winner_team": "b",
        "key": "uaetriseries_2018_g2",
        "msgs": {
            "info": "Ireland won by 67 runs.",
            "completed": "Ireland won by 67 runs.",
            "result": "Ireland beat United Arab Emirates by 67 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/uaetriseries_2018/uaetriseries_2018_g2/",
        "start_date": {
            "iso": "2018-01-13T05:30+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.385Z",
        "updated_at": "2018-02-09T12:39:07.385Z",
        "active": 1,
        "_id": "5a7d966b285099162063503d",
        "status": "completed",
        "related_name": "2nd Test Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 2nd Test Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "test",
        "venue": "SuperSport Park, Centurion, South Africa",
        "approx_completed_ts": 1516184225,
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": "a",
        "key": "rsaind_2017_test_02",
        "msgs": {
            "info": "South Africa won by 135 runs",
            "completed": "South Africa won by 135 runs",
            "result": "South Africa beat India by 135 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_test_02/",
        "start_date": {
            "iso": "2018-01-13T08:00+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.387Z",
        "updated_at": "2018-02-09T12:39:07.387Z",
        "active": 1,
        "_id": "5a7d966b285099162063503e",
        "status": "completed",
        "related_name": "28th Match",
        "expires": 10800,
        "name": "Sydney Sixers vs Sydney Thunder",
        "short_name": "SYD vs SYT",
        "title": "Sydney Sixers vs Sydney Thunder - 28th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Sydney Cricket Ground, Sydney, Australia",
        "approx_completed_ts": 1515843099,
        "teams": {
            "a": {
                "name": "Sydney Sixers",
                "key": "syd"
            },
            "b": {
                "name": "Sydney Thunder",
                "key": "syt"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g28",
        "msgs": {
            "info": "Sydney Sixers won by 8 wickets.",
            "completed": "Sydney Sixers won by 8 wickets.",
            "result": "Sydney Sixers beat Sydney Thunder by 8 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g28/",
        "start_date": {
            "iso": "2018-01-13T08:20+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.387Z",
        "updated_at": "2018-02-09T12:39:07.387Z",
        "active": 1,
        "_id": "5a7d966b285099162063503f",
        "status": "completed",
        "related_name": "1st ODI Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 1st ODI Match - Australia vs England 2018",
        "season": {
            "name": "Australia vs England 2018"
        },
        "format": "one-day",
        "venue": "Melbourne Cricket Ground, Melbourne, Australia",
        "approx_completed_ts": 1515928384,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": "b",
        "key": "auseng_2018_one-day_01",
        "msgs": {
            "info": "England won by 5 Wickets",
            "completed": "England won by 5 Wickets",
            "result": "England beat Australia by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/auseng_2018/auseng_2018_one-day_01/",
        "start_date": {
            "iso": "2018-01-14T03:20+00:00"
        },
        "dateFilter": 14,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.387Z",
        "updated_at": "2018-02-09T12:39:07.387Z",
        "active": 1,
        "_id": "5a7d966b2850991620635040",
        "status": "completed",
        "related_name": "1st Match",
        "expires": 10800,
        "name": "Bangladesh vs Zimbabwe",
        "short_name": "BAN vs ZIM",
        "title": "Bangladesh vs Zimbabwe - 1st Match - Tri Series 2018 in Bangladesh",
        "season": {
            "name": "Tri Series 2018 in Bangladesh"
        },
        "format": "one-day",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1516017882,
        "teams": {
            "a": {
                "name": "Bangladesh",
                "key": "ban"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": "a",
        "key": "triseries_2018_g1",
        "msgs": {
            "info": "Bangladesh won by 8 wickets.",
            "completed": "Bangladesh won by 8 wickets.",
            "result": "Bangladesh beat Zimbabwe by 8 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseries_2018/triseries_2018_g1/",
        "start_date": {
            "iso": "2018-01-15T06:00+00:00"
        },
        "dateFilter": 15,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.388Z",
        "updated_at": "2018-02-09T12:39:07.388Z",
        "active": 1,
        "_id": "5a7d966b2850991620635041",
        "status": "completed",
        "related_name": "29th Match",
        "expires": 10800,
        "name": "Hobart Hurricanes vs Brisbane Heat",
        "short_name": "HBH vs BH",
        "title": "Hobart Hurricanes vs Brisbane Heat - 29th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Bellerive Oval, Hobart, Australia",
        "approx_completed_ts": 1516016298,
        "teams": {
            "a": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            },
            "b": {
                "name": "Brisbane Heat",
                "key": "bh"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g29",
        "msgs": {
            "info": "Hobart Hurricanes won by 6 wickets.",
            "completed": "Hobart Hurricanes won by 6 wickets.",
            "result": "Hobart Hurricanes beat Brisbane Heat by 6 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g29/",
        "start_date": {
            "iso": "2018-01-15T08:40+00:00"
        },
        "dateFilter": 15,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.389Z",
        "updated_at": "2018-02-09T12:39:07.389Z",
        "active": 1,
        "_id": "5a7d966b2850991620635042",
        "status": "completed",
        "related_name": "4th ODI Match",
        "expires": 10800,
        "name": "New Zealand vs Pakistan",
        "short_name": "NZ vs PAK",
        "title": "New Zealand vs Pakistan - 4th ODI Match - New Zealand vs Pakistan 2018",
        "season": {
            "name": "New Zealand vs Pakistan 2018"
        },
        "format": "one-day",
        "venue": "Seddon Park, Hamilton, New Zealand",
        "approx_completed_ts": 1516089977,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "Pakistan",
                "key": "pak"
            }
        },
        "winner_team": "a",
        "key": "nzpak_2018_one-day_04",
        "msgs": {
            "info": "New Zealand won by 5 wickets.",
            "completed": "New Zealand won by 5 wickets.",
            "result": "New Zealand beat Pakistan by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzpak_2018/nzpak_2018_one-day_04/",
        "start_date": {
            "iso": "2018-01-16T01:00+00:00"
        },
        "dateFilter": 16,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.390Z",
        "updated_at": "2018-02-09T12:39:07.390Z",
        "active": 1,
        "_id": "5a7d966b2850991620635043",
        "status": "completed",
        "related_name": "3rd Match",
        "expires": 10800,
        "name": "Ireland vs Scotland",
        "short_name": "IRE vs SCT",
        "title": "Ireland vs Scotland - 3rd Match - Tri Series 2018 in UAE",
        "season": {
            "name": "Tri Series 2018 in UAE"
        },
        "format": "one-day",
        "venue": "ICC Academy, Dubai, UAE",
        "approx_completed_ts": 1516105026,
        "teams": {
            "a": {
                "name": "Ireland",
                "key": "ire"
            },
            "b": {
                "name": "Scotland",
                "key": "sct"
            }
        },
        "winner_team": "a",
        "key": "uaetriseries_2018_g3",
        "msgs": {
            "info": "Ireland won by 6 wickets (with 91 balls remaining)",
            "completed": "Ireland won by 6 wickets (with 91 balls remaining)",
            "result": "Ireland beat Scotland by 6 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/uaetriseries_2018/uaetriseries_2018_g3/",
        "start_date": {
            "iso": "2018-01-16T05:30+00:00"
        },
        "dateFilter": 16,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.390Z",
        "updated_at": "2018-02-09T12:39:07.390Z",
        "active": 1,
        "_id": "5a7d966b2850991620635044",
        "status": "completed",
        "related_name": "30th Match",
        "expires": 10800,
        "name": "Melbourne Stars vs Sydney Sixers",
        "short_name": "MLS vs SYD",
        "title": "Melbourne Stars vs Sydney Sixers - 30th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Melbourne Cricket Ground, Melbourne, Australia",
        "approx_completed_ts": 1516101824,
        "teams": {
            "a": {
                "name": "Melbourne Stars",
                "key": "mls"
            },
            "b": {
                "name": "Sydney Sixers",
                "key": "syd"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g30",
        "msgs": {
            "info": "Sydney Sixers won by 8 Wickets",
            "completed": "Sydney Sixers won by 8 Wickets",
            "result": "Sydney Sixers beat Melbourne Stars by 8 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g30/",
        "start_date": {
            "iso": "2018-01-16T08:40+00:00"
        },
        "dateFilter": 16,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.390Z",
        "updated_at": "2018-02-09T12:39:07.390Z",
        "active": 1,
        "_id": "5a7d966b2850991620635045",
        "status": "completed",
        "related_name": "2nd Match",
        "expires": 10800,
        "name": "Sri Lanka vs Zimbabwe",
        "short_name": "SL vs ZIM",
        "title": "Sri Lanka vs Zimbabwe - 2nd Match - Tri Series 2018 in Bangladesh",
        "season": {
            "name": "Tri Series 2018 in Bangladesh"
        },
        "format": "one-day",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1516197634,
        "teams": {
            "a": {
                "name": "Sri Lanka",
                "key": "sl"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": "b",
        "key": "triseries_2018_g2",
        "msgs": {
            "info": "Zimbabwe won by 12 runs.",
            "completed": "Zimbabwe won by 12 runs.",
            "result": "Zimbabwe beat Sri Lanka by 12 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseries_2018/triseries_2018_g2/",
        "start_date": {
            "iso": "2018-01-17T06:00+00:00"
        },
        "dateFilter": 17,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.391Z",
        "updated_at": "2018-02-09T12:39:07.391Z",
        "active": 1,
        "_id": "5a7d966b2850991620635046",
        "status": "completed",
        "related_name": "31st Match",
        "expires": 10800,
        "name": "Adelaide Strikers vs Hobart Hurricanes",
        "short_name": "ADS vs HBH",
        "title": "Adelaide Strikers vs Hobart Hurricanes - 31st Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Adelaide Oval, Adelaide, Australia",
        "approx_completed_ts": 1516189030,
        "teams": {
            "a": {
                "name": "Adelaide Strikers",
                "key": "ads"
            },
            "b": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g31",
        "msgs": {
            "info": "Adelaide Strikers won by 11 runs.",
            "completed": "Adelaide Strikers won by 11 runs.",
            "result": "Adelaide Strikers beat Hobart Hurricanes by 11 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g31/",
        "start_date": {
            "iso": "2018-01-17T08:40+00:00"
        },
        "dateFilter": 17,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.392Z",
        "updated_at": "2018-02-09T12:39:07.392Z",
        "active": 1,
        "_id": "5a7d966b2850991620635047",
        "status": "completed",
        "related_name": "4th Match",
        "expires": 10800,
        "name": "Ireland vs Scotland",
        "short_name": "IRE vs SCT",
        "title": "Ireland vs Scotland - 4th Match - Tri Series 2018 in UAE",
        "season": {
            "name": "Tri Series 2018 in UAE"
        },
        "format": "one-day",
        "venue": "ICC Academy, Dubai, UAE",
        "approx_completed_ts": 1516283164,
        "teams": {
            "a": {
                "name": "Ireland",
                "key": "ire"
            },
            "b": {
                "name": "Scotland",
                "key": "sct"
            }
        },
        "winner_team": "a",
        "key": "uaetriseries_2018_g4",
        "msgs": {
            "info": "Ireland won by 24 runs.",
            "completed": "Ireland won by 24 runs.",
            "result": "Ireland beat Scotland by 24 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/uaetriseries_2018/uaetriseries_2018_g4/",
        "start_date": {
            "iso": "2018-01-18T05:30+00:00"
        },
        "dateFilter": 18,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.393Z",
        "updated_at": "2018-02-09T12:39:07.393Z",
        "active": 1,
        "_id": "5a7d966b2850991620635048",
        "status": "completed",
        "related_name": "32nd Match",
        "expires": 10800,
        "name": "Sydney Sixers vs Brisbane Heat",
        "short_name": "SYD vs BH",
        "title": "Sydney Sixers vs Brisbane Heat - 32nd Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Sydney Cricket Ground, Sydney, Australia",
        "approx_completed_ts": 1516272328,
        "teams": {
            "a": {
                "name": "Sydney Sixers",
                "key": "syd"
            },
            "b": {
                "name": "Brisbane Heat",
                "key": "bh"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g32",
        "msgs": {
            "info": "Sydney Sixers won by 9 wickets.",
            "completed": "Sydney Sixers won by 9 wickets.",
            "result": "Sydney Sixers beat Brisbane Heat by 9 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g32/",
        "start_date": {
            "iso": "2018-01-18T08:40+00:00"
        },
        "dateFilter": 18,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.394Z",
        "updated_at": "2018-02-09T12:39:07.394Z",
        "active": 1,
        "_id": "5a7d966b2850991620635049",
        "status": "completed",
        "related_name": "5th ODI Match",
        "expires": 10800,
        "name": "New Zealand vs Pakistan",
        "short_name": "NZ vs PAK",
        "title": "New Zealand vs Pakistan - 5th ODI Match - New Zealand vs Pakistan 2018",
        "season": {
            "name": "New Zealand vs Pakistan 2018"
        },
        "format": "one-day",
        "venue": "Basin Reserve, Wellington, New Zealand",
        "approx_completed_ts": 1516341189,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "Pakistan",
                "key": "pak"
            }
        },
        "winner_team": "a",
        "key": "nzpak_2018_one-day_05",
        "msgs": {
            "info": "New Zealand won by 15 runs.",
            "completed": "New Zealand won by 15 runs.",
            "result": "New Zealand beat Pakistan by 15 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzpak_2018/nzpak_2018_one-day_05/",
        "start_date": {
            "iso": "2018-01-18T22:00+00:00"
        },
        "dateFilter": 18,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.394Z",
        "updated_at": "2018-02-09T12:39:07.394Z",
        "active": 1,
        "_id": "5a7d966b285099162063504a",
        "status": "completed",
        "related_name": "2nd ODI Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 2nd ODI Match - Australia vs England 2018",
        "season": {
            "name": "Australia vs England 2018"
        },
        "format": "one-day",
        "venue": "The Gabba, Brisbane, Australia",
        "approx_completed_ts": 1516359016,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": "b",
        "key": "auseng_2018_one-day_02",
        "msgs": {
            "info": "England won by 4 wickets (with 34 balls remaining)",
            "completed": "England won by 4 wickets (with 34 balls remaining)",
            "result": "England beat Australia by 4 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/auseng_2018/auseng_2018_one-day_02/",
        "start_date": {
            "iso": "2018-01-19T03:20+00:00"
        },
        "dateFilter": 19,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.394Z",
        "updated_at": "2018-02-09T12:39:07.394Z",
        "active": 1,
        "_id": "5a7d966b285099162063504b",
        "status": "completed",
        "related_name": "3rd Match",
        "expires": 10800,
        "name": "Bangladesh vs Sri Lanka",
        "short_name": "BAN vs SL",
        "title": "Bangladesh vs Sri Lanka - 3rd Match - Tri Series 2018 in Bangladesh",
        "season": {
            "name": "Tri Series 2018 in Bangladesh"
        },
        "format": "one-day",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1516366004,
        "teams": {
            "a": {
                "name": "Bangladesh",
                "key": "ban"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "a",
        "key": "triseries_2018_g3",
        "msgs": {
            "info": "Bangladesh won by 163 runs",
            "completed": "Bangladesh won by 163 runs",
            "result": "Bangladesh beat Sri Lanka by 163 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseries_2018/triseries_2018_g3/",
        "start_date": {
            "iso": "2018-01-19T06:00+00:00"
        },
        "dateFilter": 19,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.395Z",
        "updated_at": "2018-02-09T12:39:07.395Z",
        "active": 1,
        "_id": "5a7d966b285099162063504c",
        "status": "completed",
        "related_name": "33rd Match",
        "expires": 10800,
        "name": "Melbourne Stars vs Sydney Thunder",
        "short_name": "MLS vs SYT",
        "title": "Melbourne Stars vs Sydney Thunder - 33rd Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Melbourne Cricket Ground, Melbourne, Australia",
        "approx_completed_ts": 1516442593,
        "teams": {
            "a": {
                "name": "Melbourne Stars",
                "key": "mls"
            },
            "b": {
                "name": "Sydney Thunder",
                "key": "syt"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g33",
        "msgs": {
            "info": "Sydney Thunder won by 7 Wickets",
            "completed": "Sydney Thunder won by 7 Wickets",
            "result": "Sydney Thunder beat Melbourne Stars by 7 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g33/",
        "start_date": {
            "iso": "2018-01-20T07:10+00:00"
        },
        "dateFilter": 20,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.395Z",
        "updated_at": "2018-02-09T12:39:07.395Z",
        "active": 1,
        "_id": "5a7d966b285099162063504d",
        "status": "completed",
        "related_name": "34th Match",
        "expires": 10800,
        "name": "Perth Scorchers vs Hobart Hurricanes",
        "short_name": "PER vs HBH",
        "title": "Perth Scorchers vs Hobart Hurricanes - 34th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "W.A.C.A. Ground, Perth, Australia",
        "approx_completed_ts": 1516454795,
        "teams": {
            "a": {
                "name": "Perth Scorchers",
                "key": "per"
            },
            "b": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g34",
        "msgs": {
            "info": "Perth Scorchers won by 5 wkts",
            "completed": "Perth Scorchers won by 5 wkts",
            "result": "Perth Scorchers beat Hobart Hurricanes by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g34/",
        "start_date": {
            "iso": "2018-01-20T10:20+00:00"
        },
        "dateFilter": 20,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.395Z",
        "updated_at": "2018-02-09T12:39:07.395Z",
        "active": 1,
        "_id": "5a7d966b285099162063504e",
        "status": "completed",
        "related_name": "3rd ODI Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 3rd ODI Match - Australia vs England 2018",
        "season": {
            "name": "Australia vs England 2018"
        },
        "format": "one-day",
        "venue": "Sydney Cricket Ground, Sydney, Australia",
        "approx_completed_ts": 1516533036,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": "b",
        "key": "auseng_2018_one-day_03",
        "msgs": {
            "info": "England won by 16 runs.",
            "completed": "England won by 16 runs.",
            "result": "England beat Australia by 16 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/auseng_2018/auseng_2018_one-day_03/",
        "start_date": {
            "iso": "2018-01-21T03:20+00:00"
        },
        "dateFilter": 21,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.395Z",
        "updated_at": "2018-02-09T12:39:07.395Z",
        "active": 1,
        "_id": "5a7d966b285099162063504f",
        "status": "completed",
        "related_name": "5th Match",
        "expires": 10800,
        "name": "United Arab Emirates vs Scotland",
        "short_name": "UAE vs SCT",
        "title": "United Arab Emirates vs Scotland - 5th Match - Tri Series 2018 in UAE",
        "season": {
            "name": "Tri Series 2018 in UAE"
        },
        "format": "one-day",
        "venue": "ICC Academy, Dubai, UAE",
        "approx_completed_ts": 1516540769,
        "teams": {
            "a": {
                "name": "United Arab Emirates",
                "key": "uae"
            },
            "b": {
                "name": "Scotland",
                "key": "sct"
            }
        },
        "winner_team": "b",
        "key": "uaetriseries_2018_g5",
        "msgs": {
            "info": "Scotland won by 31 runs.",
            "completed": "Scotland won by 31 runs.",
            "result": "Scotland beat United Arab Emirates by 31 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/uaetriseries_2018/uaetriseries_2018_g5/",
        "start_date": {
            "iso": "2018-01-21T05:30+00:00"
        },
        "dateFilter": 21,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.396Z",
        "updated_at": "2018-02-09T12:39:07.396Z",
        "active": 1,
        "_id": "5a7d966b2850991620635050",
        "status": "completed",
        "related_name": "4th Match",
        "expires": 10800,
        "name": "Sri Lanka vs Zimbabwe",
        "short_name": "SL vs ZIM",
        "title": "Sri Lanka vs Zimbabwe - 4th Match - Tri Series 2018 in Bangladesh",
        "season": {
            "name": "Tri Series 2018 in Bangladesh"
        },
        "format": "one-day",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1516541007,
        "teams": {
            "a": {
                "name": "Sri Lanka",
                "key": "sl"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": "a",
        "key": "triseries_2018_g4",
        "msgs": {
            "info": "Sri Lanka won by 5 wickets.",
            "completed": "Sri Lanka won by 5 wickets.",
            "result": "Sri Lanka beat Zimbabwe by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseries_2018/triseries_2018_g4/",
        "start_date": {
            "iso": "2018-01-21T06:00+00:00"
        },
        "dateFilter": 21,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.396Z",
        "updated_at": "2018-02-09T12:39:07.396Z",
        "active": 1,
        "_id": "5a7d966b2850991620635051",
        "status": "completed",
        "related_name": "1st T20 Match",
        "expires": 10800,
        "name": "New Zealand vs Pakistan",
        "short_name": "NZ vs PAK",
        "title": "New Zealand vs Pakistan - 1st T20 Match - New Zealand vs Pakistan 2018",
        "season": {
            "name": "New Zealand vs Pakistan 2018"
        },
        "format": "t20",
        "venue": "Westpac Stadium, Wellington, New Zealand",
        "approx_completed_ts": 1516600748,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "Pakistan",
                "key": "pak"
            }
        },
        "winner_team": "a",
        "key": "nzpak_2018_t20_01",
        "msgs": {
            "info": "New Zealand won by 7 wickets.",
            "completed": "New Zealand won by 7 wickets.",
            "result": "New Zealand beat Pakistan by 7 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzpak_2018/nzpak_2018_t20_01/",
        "start_date": {
            "iso": "2018-01-22T03:00+00:00"
        },
        "dateFilter": 22,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.396Z",
        "updated_at": "2018-02-09T12:39:07.396Z",
        "active": 1,
        "_id": "5a7d966b2850991620635052",
        "status": "completed",
        "related_name": "35th Match",
        "expires": 10800,
        "name": "Melbourne Renegades vs Adelaide Strikers",
        "short_name": "MLR vs ADS",
        "title": "Melbourne Renegades vs Adelaide Strikers - 35th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Docklands Stadium, Melbourne, Australia",
        "approx_completed_ts": 1516622834,
        "teams": {
            "a": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            },
            "b": {
                "name": "Adelaide Strikers",
                "key": "ads"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g35",
        "msgs": {
            "info": "Adelaide Strikers won by 26 runs",
            "completed": "Adelaide Strikers won by 26 runs",
            "result": "Adelaide Strikers beat Melbourne Renegades by 26 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g35/",
        "start_date": {
            "iso": "2018-01-22T08:40+00:00"
        },
        "dateFilter": 22,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.396Z",
        "updated_at": "2018-02-09T12:39:07.396Z",
        "active": 1,
        "_id": "5a7d966b2850991620635053",
        "status": "completed",
        "related_name": "6th Match",
        "expires": 10800,
        "name": "United Arab Emirates vs Scotland",
        "short_name": "UAE vs SCT",
        "title": "United Arab Emirates vs Scotland - 6th Match - Tri Series 2018 in UAE",
        "season": {
            "name": "Tri Series 2018 in UAE"
        },
        "format": "one-day",
        "venue": "ICC Academy, Dubai, UAE",
        "approx_completed_ts": 1516715469,
        "teams": {
            "a": {
                "name": "United Arab Emirates",
                "key": "uae"
            },
            "b": {
                "name": "Scotland",
                "key": "sct"
            }
        },
        "winner_team": "a",
        "key": "uaetriseries_2018_g6",
        "msgs": {
            "info": "United Arab Emirates won by 4 wickets.",
            "completed": "United Arab Emirates won by 4 wickets.",
            "result": "United Arab Emirates beat Scotland by 4 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/uaetriseries_2018/uaetriseries_2018_g6/",
        "start_date": {
            "iso": "2018-01-23T05:30+00:00"
        },
        "dateFilter": 23,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.396Z",
        "updated_at": "2018-02-09T12:39:07.396Z",
        "active": 1,
        "_id": "5a7d966b2850991620635054",
        "status": "completed",
        "related_name": "5th Match",
        "expires": 10800,
        "name": "Bangladesh vs Zimbabwe",
        "short_name": "BAN vs ZIM",
        "title": "Bangladesh vs Zimbabwe - 5th Match - Tri Series 2018 in Bangladesh",
        "season": {
            "name": "Tri Series 2018 in Bangladesh"
        },
        "format": "one-day",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1516711889,
        "teams": {
            "a": {
                "name": "Bangladesh",
                "key": "ban"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": "a",
        "key": "triseries_2018_g5",
        "msgs": {
            "info": "Bangladesh won by 91 runs",
            "completed": "Bangladesh won by 91 runs",
            "result": "Bangladesh beat Zimbabwe by 91 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseries_2018/triseries_2018_g5/",
        "start_date": {
            "iso": "2018-01-23T06:00+00:00"
        },
        "dateFilter": 23,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.397Z",
        "updated_at": "2018-02-09T12:39:07.397Z",
        "active": 1,
        "_id": "5a7d966b2850991620635055",
        "status": "completed",
        "related_name": "36th Match",
        "expires": 10800,
        "name": "Sydney Sixers vs Melbourne Stars",
        "short_name": "SYD vs MLS",
        "title": "Sydney Sixers vs Melbourne Stars - 36th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Sydney Cricket Ground, Sydney, Australia",
        "approx_completed_ts": 1516708052,
        "teams": {
            "a": {
                "name": "Sydney Sixers",
                "key": "syd"
            },
            "b": {
                "name": "Melbourne Stars",
                "key": "mls"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g36",
        "msgs": {
            "info": "Sydney Sixers won by 5 wickets.",
            "completed": "Sydney Sixers won by 5 wickets.",
            "result": "Sydney Sixers beat Melbourne Stars by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g36/",
        "start_date": {
            "iso": "2018-01-23T08:40+00:00"
        },
        "dateFilter": 23,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.397Z",
        "updated_at": "2018-02-09T12:39:07.397Z",
        "active": 1,
        "_id": "5a7d966b2850991620635056",
        "status": "completed",
        "related_name": "3rd Test Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 3rd Test Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "test",
        "venue": "New Wanderers Stadium, Johannesburg, South Africa",
        "approx_completed_ts": 1517066013,
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": "b",
        "key": "rsaind_2017_test_03",
        "msgs": {
            "info": "India won by 63 runs",
            "completed": "India won by 63 runs",
            "result": "India beat South Africa by 63 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_test_03/",
        "start_date": {
            "iso": "2018-01-24T08:00+00:00"
        },
        "dateFilter": 24,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.397Z",
        "updated_at": "2018-02-09T12:39:07.397Z",
        "active": 1,
        "_id": "5a7d966b2850991620635057",
        "status": "completed",
        "related_name": "37th Match",
        "expires": 10800,
        "name": "Sydney Thunder vs Melbourne Renegades",
        "short_name": "SYT vs MLR",
        "title": "Sydney Thunder vs Melbourne Renegades - 37th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Manuka Oval, Canberra, Australia",
        "approx_completed_ts": 1516795378,
        "teams": {
            "a": {
                "name": "Sydney Thunder",
                "key": "syt"
            },
            "b": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g37",
        "msgs": {
            "info": "Melbourne Renegades won by 9 runs",
            "completed": "Melbourne Renegades won by 9 runs",
            "result": "Melbourne Renegades beat Sydney Thunder by 9 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g37/",
        "start_date": {
            "iso": "2018-01-24T08:40+00:00"
        },
        "dateFilter": 24,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.397Z",
        "updated_at": "2018-02-09T12:39:07.397Z",
        "active": 1,
        "_id": "5a7d966b2850991620635058",
        "status": "completed",
        "related_name": "2nd T20 Match",
        "expires": 10800,
        "name": "New Zealand vs Pakistan",
        "short_name": "NZ vs PAK",
        "title": "New Zealand vs Pakistan - 2nd T20 Match - New Zealand vs Pakistan 2018",
        "season": {
            "name": "New Zealand vs Pakistan 2018"
        },
        "format": "t20",
        "venue": "Eden Park, Auckland, New Zealand",
        "approx_completed_ts": 1516871557,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "Pakistan",
                "key": "pak"
            }
        },
        "winner_team": "b",
        "key": "nzpak_2018_t20_02",
        "msgs": {
            "info": "Pakistan won by 48 runs.",
            "completed": "Pakistan won by 48 runs.",
            "result": "Pakistan beat New Zealand by 48 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzpak_2018/nzpak_2018_t20_02/",
        "start_date": {
            "iso": "2018-01-25T06:00+00:00"
        },
        "dateFilter": 25,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.397Z",
        "updated_at": "2018-02-09T12:39:07.397Z",
        "active": 1,
        "_id": "5a7d966b2850991620635059",
        "status": "completed",
        "related_name": "6th Match",
        "expires": 10800,
        "name": "Bangladesh vs Sri Lanka",
        "short_name": "BAN vs SL",
        "title": "Bangladesh vs Sri Lanka - 6th Match - Tri Series 2018 in Bangladesh",
        "season": {
            "name": "Tri Series 2018 in Bangladesh"
        },
        "format": "one-day",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1516871416,
        "teams": {
            "a": {
                "name": "Bangladesh",
                "key": "ban"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "b",
        "key": "triseries_2018_g6",
        "msgs": {
            "info": "Sri Lanka won by 10 wickets.",
            "completed": "Sri Lanka won by 10 wickets.",
            "result": "Sri Lanka beat Bangladesh by 10 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseries_2018/triseries_2018_g6/",
        "start_date": {
            "iso": "2018-01-25T06:00+00:00"
        },
        "dateFilter": 25,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.397Z",
        "updated_at": "2018-02-09T12:39:07.397Z",
        "active": 1,
        "_id": "5a7d966b285099162063505a",
        "status": "completed",
        "related_name": "38th Match",
        "expires": 10800,
        "name": "Perth Scorchers vs Adelaide Strikers",
        "short_name": "PER vs ADS",
        "title": "Perth Scorchers vs Adelaide Strikers - 38th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "W.A.C.A. Ground, Perth, Australia",
        "approx_completed_ts": 1516880697,
        "teams": {
            "a": {
                "name": "Perth Scorchers",
                "key": "per"
            },
            "b": {
                "name": "Adelaide Strikers",
                "key": "ads"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g38",
        "msgs": {
            "info": "Perth Scorchers won by 4 wkts",
            "completed": "Perth Scorchers won by 4 wkts",
            "result": "Perth Scorchers beat Adelaide Strikers by 4 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g38/",
        "start_date": {
            "iso": "2018-01-25T08:40+00:00"
        },
        "dateFilter": 25,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.398Z",
        "updated_at": "2018-02-09T12:39:07.398Z",
        "active": 1,
        "_id": "5a7d966b285099162063505b",
        "status": "completed",
        "related_name": "4th ODI Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 4th ODI Match - Australia vs England 2018",
        "season": {
            "name": "Australia vs England 2018"
        },
        "format": "one-day",
        "venue": "Adelaide Oval, Adelaide, Australia",
        "approx_completed_ts": 1516961949,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": "a",
        "key": "auseng_2018_one-day_04",
        "msgs": {
            "info": "Australia won by 3 wkts",
            "completed": "Australia won by 3 wkts",
            "result": "Australia beat England by 3 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/auseng_2018/auseng_2018_one-day_04/",
        "start_date": {
            "iso": "2018-01-26T03:20+00:00"
        },
        "dateFilter": 26,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.398Z",
        "updated_at": "2018-02-09T12:39:07.398Z",
        "active": 1,
        "_id": "5a7d966b285099162063505c",
        "status": "completed",
        "related_name": "39th Match",
        "expires": 10800,
        "name": "Melbourne Stars vs Hobart Hurricanes",
        "short_name": "MLS vs HBH",
        "title": "Melbourne Stars vs Hobart Hurricanes - 39th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Melbourne Cricket Ground, Melbourne, Australia",
        "approx_completed_ts": 1517041274,
        "teams": {
            "a": {
                "name": "Melbourne Stars",
                "key": "mls"
            },
            "b": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_g39",
        "msgs": {
            "info": "Melbourne Stars won by 3 wickets.",
            "completed": "Melbourne Stars won by 3 wickets.",
            "result": "Melbourne Stars beat Hobart Hurricanes by 3 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g39/",
        "start_date": {
            "iso": "2018-01-27T05:10+00:00"
        },
        "dateFilter": 27,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.398Z",
        "updated_at": "2018-02-09T12:39:07.398Z",
        "active": 1,
        "_id": "5a7d966b285099162063505d",
        "status": "completed",
        "related_name": "Final Match",
        "expires": 10800,
        "name": "Bangladesh vs Sri Lanka",
        "short_name": "BAN vs SL",
        "title": "Bangladesh vs Sri Lanka - Final Match - Tri Series 2018 in Bangladesh",
        "season": {
            "name": "Tri Series 2018 in Bangladesh"
        },
        "format": "one-day",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "approx_completed_ts": 1517060531,
        "teams": {
            "a": {
                "name": "Bangladesh",
                "key": "ban"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "b",
        "key": "triseries_2018_final",
        "msgs": {
            "info": "Sri Lanka won by 79 runs.",
            "completed": "Sri Lanka won by 79 runs.",
            "result": "Sri Lanka beat Bangladesh by 79 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseries_2018/triseries_2018_final/",
        "start_date": {
            "iso": "2018-01-27T06:00+00:00"
        },
        "dateFilter": 27,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.398Z",
        "updated_at": "2018-02-09T12:39:07.398Z",
        "active": 1,
        "_id": "5a7d966b285099162063505e",
        "status": "completed",
        "related_name": "40th Match",
        "expires": 10800,
        "name": "Brisbane Heat vs Melbourne Renegades",
        "short_name": "BH vs MLR",
        "title": "Brisbane Heat vs Melbourne Renegades - 40th Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "The Gabba, Brisbane, Australia",
        "approx_completed_ts": 1517053071,
        "teams": {
            "a": {
                "name": "Brisbane Heat",
                "key": "bh"
            },
            "b": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_g40",
        "msgs": {
            "info": "Melbourne Renegades won by 26 runs",
            "completed": "Melbourne Renegades won by 26 runs",
            "result": "Melbourne Renegades beat Brisbane Heat by 26 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_g40/",
        "start_date": {
            "iso": "2018-01-27T08:20+00:00"
        },
        "dateFilter": 27,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.398Z",
        "updated_at": "2018-02-09T12:39:07.398Z",
        "active": 1,
        "_id": "5a7d966b285099162063505f",
        "status": "completed",
        "related_name": "5th ODI Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 5th ODI Match - Australia vs England 2018",
        "season": {
            "name": "Australia vs England 2018"
        },
        "format": "one-day",
        "venue": "Optus Stadium, Perth, Australia",
        "approx_completed_ts": 1517138502,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": "b",
        "key": "auseng_2018_one-day_05",
        "msgs": {
            "info": "England won by 12 runs.",
            "completed": "England won by 12 runs.",
            "result": "England beat Australia by 12 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/auseng_2018/auseng_2018_one-day_05/",
        "start_date": {
            "iso": "2018-01-28T03:20+00:00"
        },
        "dateFilter": 28,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.398Z",
        "updated_at": "2018-02-09T12:39:07.398Z",
        "active": 1,
        "_id": "5a7d966b2850991620635060",
        "status": "completed",
        "related_name": "3rd T20 Match",
        "expires": 10800,
        "name": "New Zealand vs Pakistan",
        "short_name": "NZ vs PAK",
        "title": "New Zealand vs Pakistan - 3rd T20 Match - New Zealand vs Pakistan 2018",
        "season": {
            "name": "New Zealand vs Pakistan 2018"
        },
        "format": "t20",
        "venue": "Bay Oval, Mount Maunganui, New Zealand",
        "approx_completed_ts": 1517131519,
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "Pakistan",
                "key": "pak"
            }
        },
        "winner_team": "b",
        "key": "nzpak_2018_t20_03",
        "msgs": {
            "info": "Pakistan won by 18 runs",
            "completed": "Pakistan won by 18 runs",
            "result": "Pakistan beat New Zealand by 19 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzpak_2018/nzpak_2018_t20_03/",
        "start_date": {
            "iso": "2018-01-28T06:00+00:00"
        },
        "dateFilter": 28,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:39:07.399Z",
        "updated_at": "2018-02-09T12:39:07.399Z",
        "active": 1,
        "_id": "5a7d966b2850991620635061",
        "status": "completed",
        "related_name": "1st Test Match",
        "expires": 10800,
        "name": "Bangladesh vs Sri Lanka",
        "short_name": "BAN vs SL",
        "title": "Bangladesh vs Sri Lanka - 1st Test Match - Bangladesh vs Sri Lanka 2018",
        "season": {
            "name": "Bangladesh vs Sri Lanka 2018"
        },
        "format": "test",
        "venue": "Zahur Ahmed Chowdhury Stadium, Chittagong, Bangladesh",
        "approx_completed_ts": 1517736148,
        "teams": {
            "a": {
                "name": "Bangladesh",
                "key": "ban"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "",
        "key": "bansl_2018_test_01",
        "msgs": {
            "info": "Match drawn",
            "completed": "Match drawn",
            "result": "Match drawn",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bansl_2018/bansl_2018_test_01/",
        "start_date": {
            "iso": "2018-01-31T03:30+00:00"
        },
        "dateFilter": 31,
        "monthFilter": "2018-01",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.217Z",
        "updated_at": "2018-02-09T12:40:02.218Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c10c",
        "status": "completed",
        "related_name": "1st Semi-Final Match",
        "expires": 10800,
        "name": "Perth Scorchers vs Hobart Hurricanes",
        "short_name": "PER vs HBH",
        "title": "Perth Scorchers vs Hobart Hurricanes - 1st Semi-Final Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Perth Stadium, Perth, Australia",
        "approx_completed_ts": 1517485586,
        "teams": {
            "a": {
                "name": "Perth Scorchers",
                "key": "per"
            },
            "b": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_sf1",
        "msgs": {
            "info": "Hobart Hurricanes won by 71 runs.",
            "completed": "Hobart Hurricanes won by 71 runs.",
            "result": "Hobart Hurricanes beat Perth Scorchers by 71 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_sf1/",
        "start_date": {
            "iso": "2018-02-01T08:40+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.226Z",
        "updated_at": "2018-02-09T12:40:02.226Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c10d",
        "status": "completed",
        "related_name": "1st ODI Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 1st ODI Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "one-day",
        "venue": "Kingsmead, Durban, South Africa",
        "approx_completed_ts": 1517510076,
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": "b",
        "key": "rsaind_2017_one-day_01",
        "msgs": {
            "info": "India won by 6 wickets",
            "completed": "India won by 6 wickets",
            "result": "India beat South Africa by 6 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_one-day_01/",
        "start_date": {
            "iso": "2018-02-01T11:00+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.226Z",
        "updated_at": "2018-02-09T12:40:02.226Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c10e",
        "status": "completed",
        "related_name": "2nd Semi-Final Match",
        "expires": 10800,
        "name": "Adelaide Strikers vs Melbourne Renegades",
        "short_name": "ADS vs MLR",
        "title": "Adelaide Strikers vs Melbourne Renegades - 2nd Semi-Final Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Adelaide Oval, Adelaide, Australia",
        "approx_completed_ts": 1517571742,
        "teams": {
            "a": {
                "name": "Adelaide Strikers",
                "key": "ads"
            },
            "b": {
                "name": "Melbourne Renegades",
                "key": "mlr"
            }
        },
        "winner_team": "a",
        "key": "bblt20_2017_sf2",
        "msgs": {
            "info": "Adelaide Strikers won by 1 run.",
            "completed": "Adelaide Strikers won by 1 run.",
            "result": "Adelaide Strikers beat Melbourne Renegades by 1 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_sf2/",
        "start_date": {
            "iso": "2018-02-02T08:40+00:00"
        },
        "dateFilter": 2,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.227Z",
        "updated_at": "2018-02-09T12:40:02.227Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c10f",
        "status": "completed",
        "related_name": "Final Match",
        "expires": 10800,
        "name": "Australia Under 19 vs India Under 19",
        "short_name": "AUSU19 vs INDU19",
        "title": "Australia Under 19 vs India Under 19 - Final Match - ICC Under 19 World Cup 2018",
        "season": {
            "name": "ICC Under 19 World Cup 2018"
        },
        "format": "one-day",
        "venue": "Bay Oval, Mount Maunganui, New Zealand",
        "approx_completed_ts": 1517644649,
        "teams": {
            "a": {
                "name": "Australia Under 19",
                "key": "ausu19"
            },
            "b": {
                "name": "India Under 19",
                "key": "indu19"
            }
        },
        "winner_team": "b",
        "key": "iccwcu19_2018_final",
        "msgs": {
            "info": "India U19 won by 8 Wickets",
            "completed": "India U19 won by 8 Wickets",
            "result": "India Under 19 beat Australia Under 19 by 8 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/iccwcu19_2018/iccwcu19_2018_final/",
        "start_date": {
            "iso": "2018-02-03T01:00+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.227Z",
        "updated_at": "2018-02-09T12:40:02.227Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c110",
        "status": "completed",
        "related_name": "1st Match",
        "expires": 10800,
        "name": "Australia vs New Zealand",
        "short_name": "AUS vs NZ",
        "title": "Australia vs New Zealand - 1st Match - T20I Tri Series 2018",
        "season": {
            "name": "T20I Tri Series 2018"
        },
        "format": "t20",
        "venue": "Sydney Cricket Ground, Sydney, Australia",
        "approx_completed_ts": 1517658460,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "New Zealand",
                "key": "nz"
            }
        },
        "winner_team": "a",
        "key": "triseriest20_2018_g1",
        "msgs": {
            "info": "Australia won by 7 wkts (Match reduced to 15 ovs due to rain target 95)",
            "completed": "Australia won by 7 wkts (Match reduced to 15 ovs due to rain target 95)",
            "match_comments": "Rain stops play",
            "result": "Australia beat New Zealand (D/L method)",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseriest20_2018/triseriest20_2018_g1/",
        "start_date": {
            "iso": "2018-02-03T08:20+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.228Z",
        "updated_at": "2018-02-09T12:40:02.228Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c111",
        "status": "completed",
        "related_name": "Final Match",
        "expires": 10800,
        "name": "Hobart Hurricanes vs Adelaide Strikers",
        "short_name": "HBH vs ADS",
        "title": "Hobart Hurricanes vs Adelaide Strikers - Final Match - BIG BASH LEAGUE 2017-18",
        "season": {
            "name": "BIG BASH LEAGUE 2017-18"
        },
        "format": "t20",
        "venue": "Adelaide Oval, Adelaide, Australia",
        "approx_completed_ts": 1517732837,
        "teams": {
            "a": {
                "name": "Hobart Hurricanes",
                "key": "hbh"
            },
            "b": {
                "name": "Adelaide Strikers",
                "key": "ads"
            }
        },
        "winner_team": "b",
        "key": "bblt20_2017_final",
        "msgs": {
            "info": "Adelaide Strikers won by 25 runs.",
            "completed": "Adelaide Strikers won by 25 runs.",
            "result": "Adelaide Strikers beat Hobart Hurricanes by 25 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bblt20_2017/bblt20_2017_final/",
        "start_date": {
            "iso": "2018-02-04T05:30+00:00"
        },
        "dateFilter": 4,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.229Z",
        "updated_at": "2018-02-09T12:40:02.229Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c112",
        "status": "completed",
        "related_name": "2nd ODI Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 2nd ODI Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "one-day",
        "venue": "SuperSport Park, Centurion, South Africa",
        "approx_completed_ts": 1517747947,
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": "b",
        "key": "rsaind_2017_one-day_02",
        "msgs": {
            "info": "India won by 9 wkts",
            "completed": "India won by 9 wkts",
            "result": "India beat South Africa by 9 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_one-day_02/",
        "start_date": {
            "iso": "2018-02-04T08:00+00:00"
        },
        "dateFilter": 4,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.229Z",
        "updated_at": "2018-02-09T12:40:02.229Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c113",
        "status": "completed",
        "related_name": "1st T20 Match",
        "expires": 10800,
        "name": "Afghanistan vs Zimbabwe",
        "short_name": "AFG vs ZIM",
        "title": "Afghanistan vs Zimbabwe - 1st T20 Match - Afghanistan vs Zimbabwe 2018",
        "season": {
            "name": "Afghanistan vs Zimbabwe 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "approx_completed_ts": 1517853631,
        "teams": {
            "a": {
                "name": "Afghanistan",
                "key": "afg"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": "a",
        "key": "afgzim_2018_t20_01",
        "msgs": {
            "info": "Afghanistan won by 5 wickets.",
            "completed": "Afghanistan won by 5 wickets.",
            "result": "Afghanistan beat Zimbabwe by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/afgzim_2018/afgzim_2018_t20_01/",
        "start_date": {
            "iso": "2018-02-05T15:00+00:00"
        },
        "dateFilter": 5,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.230Z",
        "updated_at": "2018-02-09T12:40:02.231Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c114",
        "status": "completed",
        "related_name": "2nd T20 Match",
        "expires": 10800,
        "name": "Afghanistan vs Zimbabwe",
        "short_name": "AFG vs ZIM",
        "title": "Afghanistan vs Zimbabwe - 2nd T20 Match - Afghanistan vs Zimbabwe 2018",
        "season": {
            "name": "Afghanistan vs Zimbabwe 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "approx_completed_ts": 1517941631,
        "teams": {
            "a": {
                "name": "Afghanistan",
                "key": "afg"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": "a",
        "key": "afgzim_2018_t20_02",
        "msgs": {
            "info": "Afghanistan won by 17 runs",
            "completed": "Afghanistan won by 17 runs",
            "result": "Afghanistan beat Zimbabwe by 17 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/afgzim_2018/afgzim_2018_t20_02/",
        "start_date": {
            "iso": "2018-02-06T15:00+00:00"
        },
        "dateFilter": 6,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.231Z",
        "updated_at": "2018-02-09T12:40:02.231Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c115",
        "status": "completed",
        "related_name": "2nd Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 2nd Match - T20I Tri Series 2018",
        "season": {
            "name": "T20I Tri Series 2018"
        },
        "format": "t20",
        "venue": "Bellerive Oval, Hobart, Australia",
        "approx_completed_ts": 1518005096,
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": "a",
        "key": "triseriest20_2018_g2",
        "msgs": {
            "info": "Australia won by 5 Wickets",
            "completed": "Australia won by 5 Wickets",
            "result": "Australia beat England by 5 wickets",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseriest20_2018/triseriest20_2018_g2/",
        "start_date": {
            "iso": "2018-02-07T08:40+00:00"
        },
        "dateFilter": 7,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.231Z",
        "updated_at": "2018-02-09T12:40:02.231Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c116",
        "status": "completed",
        "related_name": "3rd ODI Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 3rd ODI Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "one-day",
        "venue": "Newlands, Cape Town, South Africa",
        "approx_completed_ts": 1518026820,
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": "b",
        "key": "rsaind_2017_one-day_03",
        "msgs": {
            "info": "India won by 124 runs.",
            "completed": "India won by 124 runs.",
            "result": "India beat South Africa by 124 runs",
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_one-day_03/",
        "start_date": {
            "iso": "2018-02-07T11:00+00:00"
        },
        "dateFilter": 7,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.232Z",
        "updated_at": "2018-02-09T12:40:02.232Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c117",
        "status": "started",
        "related_name": "2nd Test Match",
        "expires": 3600,
        "name": "Bangladesh vs Sri Lanka",
        "short_name": "BAN vs SL",
        "title": "Bangladesh vs Sri Lanka - 2nd Test Match - Bangladesh vs Sri Lanka 2018",
        "season": {
            "name": "Bangladesh vs Sri Lanka 2018"
        },
        "format": "test",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "teams": {
            "a": {
                "name": "Bangladesh",
                "key": "ban"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": "",
        "key": "bansl_2018_test_02",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bansl_2018/bansl_2018_test_02/",
        "start_date": {
            "iso": "2018-02-08T03:30+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.232Z",
        "updated_at": "2018-02-09T12:40:02.232Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c118",
        "status": "started",
        "related_name": "1st ODI Match",
        "expires": 1,
        "name": "Afghanistan vs Zimbabwe",
        "short_name": "AFG vs ZIM",
        "title": "Afghanistan vs Zimbabwe - 1st ODI Match - Afghanistan vs Zimbabwe 2018",
        "season": {
            "name": "Afghanistan vs Zimbabwe 2018"
        },
        "format": "one-day",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Afghanistan",
                "key": "afg"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": "",
        "key": "afgzim_2018_one-day_01",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/afgzim_2018/afgzim_2018_one-day_01/",
        "start_date": {
            "iso": "2018-02-09T10:30+00:00"
        },
        "dateFilter": 9,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.232Z",
        "updated_at": "2018-02-09T12:40:02.232Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c119",
        "status": "notstarted",
        "related_name": "3rd Match",
        "expires": 10800,
        "name": "Australia vs England",
        "short_name": "AUS vs ENG",
        "title": "Australia vs England - 3rd Match - T20I Tri Series 2018",
        "season": {
            "name": "T20I Tri Series 2018"
        },
        "format": "t20",
        "venue": "Melbourne Cricket Ground, Melbourne, Australia",
        "teams": {
            "a": {
                "name": "Australia",
                "key": "aus"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": null,
        "key": "triseriest20_2018_g3",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseriest20_2018/triseriest20_2018_g3/",
        "start_date": {
            "iso": "2018-02-10T08:20+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.233Z",
        "updated_at": "2018-02-09T12:40:02.233Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c11a",
        "status": "notstarted",
        "related_name": "4th ODI Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 4th ODI Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "one-day",
        "venue": "New Wanderers Stadium, Johannesburg, South Africa",
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": null,
        "key": "rsaind_2017_one-day_04",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_one-day_04/",
        "start_date": {
            "iso": "2018-02-10T11:00+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.234Z",
        "updated_at": "2018-02-09T12:40:02.234Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c11b",
        "status": "notstarted",
        "related_name": "2nd ODI Match",
        "expires": 10800,
        "name": "Afghanistan vs Zimbabwe",
        "short_name": "AFG vs ZIM",
        "title": "Afghanistan vs Zimbabwe - 2nd ODI Match - Afghanistan vs Zimbabwe 2018",
        "season": {
            "name": "Afghanistan vs Zimbabwe 2018"
        },
        "format": "one-day",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Afghanistan",
                "key": "afg"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": null,
        "key": "afgzim_2018_one-day_02",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/afgzim_2018/afgzim_2018_one-day_02/",
        "start_date": {
            "iso": "2018-02-11T10:30+00:00"
        },
        "dateFilter": 11,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.234Z",
        "updated_at": "2018-02-09T12:40:02.234Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c11c",
        "status": "notstarted",
        "related_name": "4th Match",
        "expires": 10800,
        "name": "New Zealand vs England",
        "short_name": "NZ vs ENG",
        "title": "New Zealand vs England - 4th Match - T20I Tri Series 2018",
        "season": {
            "name": "T20I Tri Series 2018"
        },
        "format": "t20",
        "venue": "Westpac Stadium, Wellington, New Zealand",
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": null,
        "key": "triseriest20_2018_g4",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseriest20_2018/triseriest20_2018_g4/",
        "start_date": {
            "iso": "2018-02-13T06:00+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.235Z",
        "updated_at": "2018-02-09T12:40:02.235Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c11d",
        "status": "notstarted",
        "related_name": "3rd ODI Match",
        "expires": 10800,
        "name": "Afghanistan vs Zimbabwe",
        "short_name": "AFG vs ZIM",
        "title": "Afghanistan vs Zimbabwe - 3rd ODI Match - Afghanistan vs Zimbabwe 2018",
        "season": {
            "name": "Afghanistan vs Zimbabwe 2018"
        },
        "format": "one-day",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Afghanistan",
                "key": "afg"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": null,
        "key": "afgzim_2018_one-day_03",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/afgzim_2018/afgzim_2018_one-day_03/",
        "start_date": {
            "iso": "2018-02-13T10:00+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.235Z",
        "updated_at": "2018-02-09T12:40:02.235Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c11e",
        "status": "notstarted",
        "related_name": "5th ODI Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 5th ODI Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "one-day",
        "venue": "St George's Park, Port Elizabeth, South Africa",
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": null,
        "key": "rsaind_2017_one-day_05",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_one-day_05/",
        "start_date": {
            "iso": "2018-02-13T11:00+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.236Z",
        "updated_at": "2018-02-09T12:40:02.236Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c11f",
        "status": "notstarted",
        "related_name": "1st T20 Match",
        "expires": 10800,
        "name": "South Africa Women vs India Women",
        "short_name": "RSAW vs INDW",
        "title": "South Africa Women vs India Women - 1st T20 Match - South Africa Women vs India Women 2018",
        "season": {
            "name": "South Africa Women vs India Women 2018"
        },
        "format": "t20",
        "venue": "Senwes Park, Potchefstroom, South Africa",
        "teams": {
            "a": {
                "name": "South Africa Women",
                "key": "rsaw"
            },
            "b": {
                "name": "India Women",
                "key": "indw"
            }
        },
        "winner_team": null,
        "key": "rsawindw_2018_t20_01",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsawindw_2018/rsawindw_2018_t20_01/",
        "start_date": {
            "iso": "2018-02-13T11:00+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.236Z",
        "updated_at": "2018-02-09T12:40:02.236Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c120",
        "status": "notstarted",
        "related_name": "1st T20 Match",
        "expires": 10800,
        "name": "Bangladesh vs Sri Lanka",
        "short_name": "BAN vs SL",
        "title": "Bangladesh vs Sri Lanka - 1st T20 Match - Bangladesh vs Sri Lanka 2018",
        "season": {
            "name": "Bangladesh vs Sri Lanka 2018"
        },
        "format": "t20",
        "venue": "Shere Bangla National Stadium, Dhaka, Bangladesh",
        "teams": {
            "a": {
                "name": "Bangladesh",
                "key": "ban"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": null,
        "key": "bansl_2018_t20_01",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bansl_2018/bansl_2018_t20_01/",
        "start_date": {
            "iso": "2018-02-15T11:00+00:00"
        },
        "dateFilter": 15,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.236Z",
        "updated_at": "2018-02-09T12:40:02.236Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c121",
        "status": "notstarted",
        "related_name": "5th Match",
        "expires": 10800,
        "name": "New Zealand vs Australia",
        "short_name": "NZ vs AUS",
        "title": "New Zealand vs Australia - 5th Match - T20I Tri Series 2018",
        "season": {
            "name": "T20I Tri Series 2018"
        },
        "format": "t20",
        "venue": "Eden Park, Auckland, New Zealand",
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "Australia",
                "key": "aus"
            }
        },
        "winner_team": null,
        "key": "triseriest20_2018_g5",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseriest20_2018/triseriest20_2018_g5/",
        "start_date": {
            "iso": "2018-02-16T06:00+00:00"
        },
        "dateFilter": 16,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.237Z",
        "updated_at": "2018-02-09T12:40:02.237Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c122",
        "status": "notstarted",
        "related_name": "2nd T20 Match",
        "expires": 10800,
        "name": "South Africa Women vs India Women",
        "short_name": "RSAW vs INDW",
        "title": "South Africa Women vs India Women - 2nd T20 Match - South Africa Women vs India Women 2018",
        "season": {
            "name": "South Africa Women vs India Women 2018"
        },
        "format": "t20",
        "venue": "Buffalo Park, East London, South Africa",
        "teams": {
            "a": {
                "name": "South Africa Women",
                "key": "rsaw"
            },
            "b": {
                "name": "India Women",
                "key": "indw"
            }
        },
        "winner_team": null,
        "key": "rsawindw_2018_t20_02",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsawindw_2018/rsawindw_2018_t20_02/",
        "start_date": {
            "iso": "2018-02-16T07:45+00:00"
        },
        "dateFilter": 16,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.237Z",
        "updated_at": "2018-02-09T12:40:02.237Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c123",
        "status": "notstarted",
        "related_name": "4th ODI Match",
        "expires": 10800,
        "name": "Afghanistan vs Zimbabwe",
        "short_name": "AFG vs ZIM",
        "title": "Afghanistan vs Zimbabwe - 4th ODI Match - Afghanistan vs Zimbabwe 2018",
        "season": {
            "name": "Afghanistan vs Zimbabwe 2018"
        },
        "format": "one-day",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Afghanistan",
                "key": "afg"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": null,
        "key": "afgzim_2018_one-day_04",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/afgzim_2018/afgzim_2018_one-day_04/",
        "start_date": {
            "iso": "2018-02-16T10:00+00:00"
        },
        "dateFilter": 16,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.237Z",
        "updated_at": "2018-02-09T12:40:02.237Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c124",
        "status": "notstarted",
        "related_name": "6th ODI Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 6th ODI Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "one-day",
        "venue": "SuperSport Park, Centurion, South Africa",
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": null,
        "key": "rsaind_2017_one-day_06",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_one-day_06/",
        "start_date": {
            "iso": "2018-02-16T11:00+00:00"
        },
        "dateFilter": 16,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.237Z",
        "updated_at": "2018-02-09T12:40:02.237Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c125",
        "status": "notstarted",
        "related_name": "6th Match",
        "expires": 10800,
        "name": "New Zealand vs England",
        "short_name": "NZ vs ENG",
        "title": "New Zealand vs England - 6th Match - T20I Tri Series 2018",
        "season": {
            "name": "T20I Tri Series 2018"
        },
        "format": "t20",
        "venue": "Seddon Park, Hamilton, New Zealand",
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": null,
        "key": "triseriest20_2018_g6",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseriest20_2018/triseriest20_2018_g6/",
        "start_date": {
            "iso": "2018-02-18T06:00+00:00"
        },
        "dateFilter": 18,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.237Z",
        "updated_at": "2018-02-09T12:40:02.237Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c126",
        "status": "notstarted",
        "related_name": "3rd T20 Match",
        "expires": 10800,
        "name": "South Africa Women vs India Women",
        "short_name": "RSAW vs INDW",
        "title": "South Africa Women vs India Women - 3rd T20 Match - South Africa Women vs India Women 2018",
        "season": {
            "name": "South Africa Women vs India Women 2018"
        },
        "format": "t20",
        "venue": "New Wanderers Stadium, Johannesburg, South Africa",
        "teams": {
            "a": {
                "name": "South Africa Women",
                "key": "rsaw"
            },
            "b": {
                "name": "India Women",
                "key": "indw"
            }
        },
        "winner_team": null,
        "key": "rsawindw_2018_t20_03",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsawindw_2018/rsawindw_2018_t20_03/",
        "start_date": {
            "iso": "2018-02-18T07:45+00:00"
        },
        "dateFilter": 18,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.238Z",
        "updated_at": "2018-02-09T12:40:02.238Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c127",
        "status": "notstarted",
        "related_name": "2nd T20 Match",
        "expires": 10800,
        "name": "Bangladesh vs Sri Lanka",
        "short_name": "BAN vs SL",
        "title": "Bangladesh vs Sri Lanka - 2nd T20 Match - Bangladesh vs Sri Lanka 2018",
        "season": {
            "name": "Bangladesh vs Sri Lanka 2018"
        },
        "format": "t20",
        "venue": "Sylhet International Cricket Stadium, Sylhet, Bangladesh",
        "teams": {
            "a": {
                "name": "Bangladesh",
                "key": "ban"
            },
            "b": {
                "name": "Sri Lanka",
                "key": "sl"
            }
        },
        "winner_team": null,
        "key": "bansl_2018_t20_02",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/bansl_2018/bansl_2018_t20_02/",
        "start_date": {
            "iso": "2018-02-18T11:00+00:00"
        },
        "dateFilter": 18,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.239Z",
        "updated_at": "2018-02-09T12:40:02.239Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c128",
        "status": "notstarted",
        "related_name": "1st T20 Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 1st T20 Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "t20",
        "venue": "New Wanderers Stadium, Johannesburg, South Africa",
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": null,
        "key": "rsaind_2017_t20_01",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_t20_01/",
        "start_date": {
            "iso": "2018-02-18T12:30+00:00"
        },
        "dateFilter": 18,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.240Z",
        "updated_at": "2018-02-09T12:40:02.240Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c129",
        "status": "notstarted",
        "related_name": "5th ODI Match",
        "expires": 10800,
        "name": "Afghanistan vs Zimbabwe",
        "short_name": "AFG vs ZIM",
        "title": "Afghanistan vs Zimbabwe - 5th ODI Match - Afghanistan vs Zimbabwe 2018",
        "season": {
            "name": "Afghanistan vs Zimbabwe 2018"
        },
        "format": "one-day",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Afghanistan",
                "key": "afg"
            },
            "b": {
                "name": "Zimbabwe",
                "key": "zim"
            }
        },
        "winner_team": null,
        "key": "afgzim_2018_one-day_05",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/afgzim_2018/afgzim_2018_one-day_05/",
        "start_date": {
            "iso": "2018-02-19T10:00+00:00"
        },
        "dateFilter": 19,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.241Z",
        "updated_at": "2018-02-09T12:40:02.241Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c12a",
        "status": "notstarted",
        "related_name": "Final Match",
        "expires": 10800,
        "name": "TBC vs TBC",
        "short_name": "TBC vs TBC",
        "title": "TBC vs TBC - Final Match - T20I Tri Series 2018",
        "season": {
            "name": "T20I Tri Series 2018"
        },
        "format": "t20",
        "venue": "Eden Park, Auckland, New Zealand",
        "teams": {
            "a": {
                "name": "TBC",
                "key": "tbc"
            },
            "b": {
                "name": "TBC",
                "key": "tbc"
            }
        },
        "winner_team": null,
        "key": "triseriest20_2018_final",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/triseriest20_2018/triseriest20_2018_final/",
        "start_date": {
            "iso": "2018-02-21T06:00+00:00"
        },
        "dateFilter": 21,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.241Z",
        "updated_at": "2018-02-09T12:40:02.241Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c12b",
        "status": "notstarted",
        "related_name": "4th T20 Match",
        "expires": 10800,
        "name": "South Africa Women vs India Women",
        "short_name": "RSAW vs INDW",
        "title": "South Africa Women vs India Women - 4th T20 Match - South Africa Women vs India Women 2018",
        "season": {
            "name": "South Africa Women vs India Women 2018"
        },
        "format": "t20",
        "venue": "SuperSport Park, Centurion, South Africa",
        "teams": {
            "a": {
                "name": "South Africa Women",
                "key": "rsaw"
            },
            "b": {
                "name": "India Women",
                "key": "indw"
            }
        },
        "winner_team": null,
        "key": "rsawindw_2018_t20_04",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsawindw_2018/rsawindw_2018_t20_04/",
        "start_date": {
            "iso": "2018-02-21T11:00+00:00"
        },
        "dateFilter": 21,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.242Z",
        "updated_at": "2018-02-09T12:40:02.242Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c12c",
        "status": "notstarted",
        "related_name": "2nd T20 Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 2nd T20 Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "t20",
        "venue": "SuperSport Park, Centurion, South Africa",
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": null,
        "key": "rsaind_2017_t20_02",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_t20_02/",
        "start_date": {
            "iso": "2018-02-21T16:00+00:00"
        },
        "dateFilter": 21,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.242Z",
        "updated_at": "2018-02-09T12:40:02.242Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c12d",
        "status": "notstarted",
        "related_name": "1st Match",
        "expires": 10800,
        "name": "Peshawar Zalmi vs Multan Sultans",
        "short_name": "PZ vs MS",
        "title": "Peshawar Zalmi vs Multan Sultans - 1st Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Peshawar Zalmi",
                "key": "pz"
            },
            "b": {
                "name": "Multan Sultans",
                "key": "ms"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g1",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g1/",
        "start_date": {
            "iso": "2018-02-22T17:00+00:00"
        },
        "dateFilter": 22,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.244Z",
        "updated_at": "2018-02-09T12:40:02.244Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c12e",
        "status": "notstarted",
        "related_name": "2nd Match",
        "expires": 10800,
        "name": "Karachi Kings vs Quetta Gladiators",
        "short_name": "KK vs QG",
        "title": "Karachi Kings vs Quetta Gladiators - 2nd Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Karachi Kings",
                "key": "kk"
            },
            "b": {
                "name": "Quetta Gladiators",
                "key": "qg"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g2",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g2/",
        "start_date": {
            "iso": "2018-02-23T11:30+00:00"
        },
        "dateFilter": 23,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.244Z",
        "updated_at": "2018-02-09T12:40:02.244Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c12f",
        "status": "notstarted",
        "related_name": "3rd Match",
        "expires": 10800,
        "name": "Multan Sultans vs Lahore Qalandars",
        "short_name": "MS vs LQ",
        "title": "Multan Sultans vs Lahore Qalandars - 3rd Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Multan Sultans",
                "key": "ms"
            },
            "b": {
                "name": "Lahore Qalandars",
                "key": "lq"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g3",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g3/",
        "start_date": {
            "iso": "2018-02-23T16:00+00:00"
        },
        "dateFilter": 23,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.244Z",
        "updated_at": "2018-02-09T12:40:02.244Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c130",
        "status": "notstarted",
        "related_name": "5th T20 Match",
        "expires": 10800,
        "name": "South Africa Women vs India Women",
        "short_name": "RSAW vs INDW",
        "title": "South Africa Women vs India Women - 5th T20 Match - South Africa Women vs India Women 2018",
        "season": {
            "name": "South Africa Women vs India Women 2018"
        },
        "format": "t20",
        "venue": "Newlands, Cape Town, South Africa",
        "teams": {
            "a": {
                "name": "South Africa Women",
                "key": "rsaw"
            },
            "b": {
                "name": "India Women",
                "key": "indw"
            }
        },
        "winner_team": null,
        "key": "rsawindw_2018_t20_05",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsawindw_2018/rsawindw_2018_t20_05/",
        "start_date": {
            "iso": "2018-02-24T11:00+00:00"
        },
        "dateFilter": 24,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.245Z",
        "updated_at": "2018-02-09T12:40:02.245Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c131",
        "status": "notstarted",
        "related_name": "4th Match",
        "expires": 10800,
        "name": "Islamabad United vs Peshawar Zalmi",
        "short_name": "IU vs PZ",
        "title": "Islamabad United vs Peshawar Zalmi - 4th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Islamabad United",
                "key": "iu"
            },
            "b": {
                "name": "Peshawar Zalmi",
                "key": "pz"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g4",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g4/",
        "start_date": {
            "iso": "2018-02-24T11:30+00:00"
        },
        "dateFilter": 24,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.246Z",
        "updated_at": "2018-02-09T12:40:02.246Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c132",
        "status": "notstarted",
        "related_name": "3rd T20 Match",
        "expires": 10800,
        "name": "South Africa vs India",
        "short_name": "RSA vs IND",
        "title": "South Africa vs India - 3rd T20 Match - South Africa vs India 2017",
        "season": {
            "name": "South Africa vs India 2017"
        },
        "format": "t20",
        "venue": "Newlands, Cape Town, South Africa",
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "India",
                "key": "ind"
            }
        },
        "winner_team": null,
        "key": "rsaind_2017_t20_03",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaind_2017/rsaind_2017_t20_03/",
        "start_date": {
            "iso": "2018-02-24T16:00+00:00"
        },
        "dateFilter": 24,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.247Z",
        "updated_at": "2018-02-09T12:40:02.247Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c133",
        "status": "notstarted",
        "related_name": "5th Match",
        "expires": 10800,
        "name": "Quetta Gladiators vs Lahore Qalandars",
        "short_name": "QG vs LQ",
        "title": "Quetta Gladiators vs Lahore Qalandars - 5th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Quetta Gladiators",
                "key": "qg"
            },
            "b": {
                "name": "Lahore Qalandars",
                "key": "lq"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g5",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g5/",
        "start_date": {
            "iso": "2018-02-24T16:00+00:00"
        },
        "dateFilter": 24,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.247Z",
        "updated_at": "2018-02-09T12:40:02.247Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c134",
        "status": "notstarted",
        "related_name": "1st ODI Match",
        "expires": 10800,
        "name": "New Zealand vs England",
        "short_name": "NZ vs ENG",
        "title": "New Zealand vs England - 1st ODI Match - New Zealand vs England 2018",
        "season": {
            "name": "New Zealand vs England 2018"
        },
        "format": "one-day",
        "venue": "Seddon Park, Hamilton, New Zealand",
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": null,
        "key": "nzeng_2018_one-day_01",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzeng_2018/nzeng_2018_one-day_01/",
        "start_date": {
            "iso": "2018-02-25T01:00+00:00"
        },
        "dateFilter": 25,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.247Z",
        "updated_at": "2018-02-09T12:40:02.247Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c135",
        "status": "notstarted",
        "related_name": "6th Match",
        "expires": 10800,
        "name": "Multan Sultans vs Islamabad United",
        "short_name": "MS vs IU",
        "title": "Multan Sultans vs Islamabad United - 6th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Multan Sultans",
                "key": "ms"
            },
            "b": {
                "name": "Islamabad United",
                "key": "iu"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g6",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g6/",
        "start_date": {
            "iso": "2018-02-25T11:30+00:00"
        },
        "dateFilter": 25,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.247Z",
        "updated_at": "2018-02-09T12:40:02.247Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c136",
        "status": "notstarted",
        "related_name": "7th Match",
        "expires": 10800,
        "name": "Karachi Kings vs Peshawar Zalmi",
        "short_name": "KK vs PZ",
        "title": "Karachi Kings vs Peshawar Zalmi - 7th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Karachi Kings",
                "key": "kk"
            },
            "b": {
                "name": "Peshawar Zalmi",
                "key": "pz"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g7",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g7/",
        "start_date": {
            "iso": "2018-02-25T16:00+00:00"
        },
        "dateFilter": 25,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.247Z",
        "updated_at": "2018-02-09T12:40:02.247Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c137",
        "status": "notstarted",
        "related_name": "8th Match",
        "expires": 10800,
        "name": "Karachi Kings vs Lahore Qalandars",
        "short_name": "KK vs LQ",
        "title": "Karachi Kings vs Lahore Qalandars - 8th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Karachi Kings",
                "key": "kk"
            },
            "b": {
                "name": "Lahore Qalandars",
                "key": "lq"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g8",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g8/",
        "start_date": {
            "iso": "2018-02-26T16:00+00:00"
        },
        "dateFilter": 26,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.248Z",
        "updated_at": "2018-02-09T12:40:02.248Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c138",
        "status": "notstarted",
        "related_name": "2nd ODI Match",
        "expires": 10800,
        "name": "New Zealand vs England",
        "short_name": "NZ vs ENG",
        "title": "New Zealand vs England - 2nd ODI Match - New Zealand vs England 2018",
        "season": {
            "name": "New Zealand vs England 2018"
        },
        "format": "one-day",
        "venue": "Bay Oval, Mount Maunganui, New Zealand",
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": null,
        "key": "nzeng_2018_one-day_02",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzeng_2018/nzeng_2018_one-day_02/",
        "start_date": {
            "iso": "2018-02-28T01:00+00:00"
        },
        "dateFilter": 28,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:02.248Z",
        "updated_at": "2018-02-09T12:40:02.248Z",
        "active": 1,
        "_id": "5a7d96a2dcb4fe1984c4c139",
        "status": "notstarted",
        "related_name": "9th Match",
        "expires": 10800,
        "name": "Islamabad United vs Quetta Gladiators",
        "short_name": "IU vs QG",
        "title": "Islamabad United vs Quetta Gladiators - 9th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Islamabad United",
                "key": "iu"
            },
            "b": {
                "name": "Quetta Gladiators",
                "key": "qg"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g9",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g9/",
        "start_date": {
            "iso": "2018-02-28T16:00+00:00"
        },
        "dateFilter": 28,
        "monthFilter": "2018-02",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.538Z",
        "updated_at": "2018-02-09T12:40:44.539Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d490",
        "status": "notstarted",
        "related_name": "1st Test Match",
        "expires": 10800,
        "name": "South Africa vs Australia",
        "short_name": "RSA vs AUS",
        "title": "South Africa vs Australia - 1st Test Match - South Africa vs Australia 2018",
        "season": {
            "name": "South Africa vs Australia 2018"
        },
        "format": "test",
        "venue": "Kingsmead, Durban, South Africa",
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "Australia",
                "key": "aus"
            }
        },
        "winner_team": null,
        "key": "rsaaus_2018_test_01",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaaus_2018/rsaaus_2018_test_01/",
        "start_date": {
            "iso": "2018-03-01T08:00+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.544Z",
        "updated_at": "2018-02-09T12:40:44.544Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d491",
        "status": "notstarted",
        "related_name": "10th Match",
        "expires": 10800,
        "name": "Quetta Gladiators vs Peshawar Zalmi",
        "short_name": "QG vs PZ",
        "title": "Quetta Gladiators vs Peshawar Zalmi - 10th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Quetta Gladiators",
                "key": "qg"
            },
            "b": {
                "name": "Peshawar Zalmi",
                "key": "pz"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g10",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g10/",
        "start_date": {
            "iso": "2018-03-01T16:00+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.544Z",
        "updated_at": "2018-02-09T12:40:44.544Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d492",
        "status": "notstarted",
        "related_name": "11th Match",
        "expires": 10800,
        "name": "Multan Sultans vs Karachi Kings",
        "short_name": "MS vs KK",
        "title": "Multan Sultans vs Karachi Kings - 11th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Multan Sultans",
                "key": "ms"
            },
            "b": {
                "name": "Karachi Kings",
                "key": "kk"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g11",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g11/",
        "start_date": {
            "iso": "2018-03-02T11:30+00:00"
        },
        "dateFilter": 2,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.544Z",
        "updated_at": "2018-02-09T12:40:44.544Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d493",
        "status": "notstarted",
        "related_name": "12th Match",
        "expires": 10800,
        "name": "Lahore Qalandars vs Islamabad United",
        "short_name": "LQ vs IU",
        "title": "Lahore Qalandars vs Islamabad United - 12th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Lahore Qalandars",
                "key": "lq"
            },
            "b": {
                "name": "Islamabad United",
                "key": "iu"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g12",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g12/",
        "start_date": {
            "iso": "2018-03-02T16:00+00:00"
        },
        "dateFilter": 2,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.545Z",
        "updated_at": "2018-02-09T12:40:44.545Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d494",
        "status": "notstarted",
        "related_name": "3rd ODI Match",
        "expires": 10800,
        "name": "New Zealand vs England",
        "short_name": "NZ vs ENG",
        "title": "New Zealand vs England - 3rd ODI Match - New Zealand vs England 2018",
        "season": {
            "name": "New Zealand vs England 2018"
        },
        "format": "one-day",
        "venue": "Westpac Stadium, Wellington, New Zealand",
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": null,
        "key": "nzeng_2018_one-day_03",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzeng_2018/nzeng_2018_one-day_03/",
        "start_date": {
            "iso": "2018-03-03T01:00+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.545Z",
        "updated_at": "2018-02-09T12:40:44.545Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d495",
        "status": "notstarted",
        "related_name": "13th Match",
        "expires": 10800,
        "name": "Multan Sultans vs Quetta Gladiators",
        "short_name": "MS vs QG",
        "title": "Multan Sultans vs Quetta Gladiators - 13th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Multan Sultans",
                "key": "ms"
            },
            "b": {
                "name": "Quetta Gladiators",
                "key": "qg"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g13",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g13/",
        "start_date": {
            "iso": "2018-03-03T11:30+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.546Z",
        "updated_at": "2018-02-09T12:40:44.546Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d496",
        "status": "notstarted",
        "related_name": "14th Match",
        "expires": 10800,
        "name": "Peshawar Zalmi vs Lahore Qalandars",
        "short_name": "PZ vs LQ",
        "title": "Peshawar Zalmi vs Lahore Qalandars - 14th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Peshawar Zalmi",
                "key": "pz"
            },
            "b": {
                "name": "Lahore Qalandars",
                "key": "lq"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g14",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g14/",
        "start_date": {
            "iso": "2018-03-03T16:00+00:00"
        },
        "dateFilter": 3,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.546Z",
        "updated_at": "2018-02-09T12:40:44.546Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d497",
        "status": "notstarted",
        "related_name": "15th Match",
        "expires": 10800,
        "name": "Islamabad United vs Karachi Kings",
        "short_name": "IU vs KK",
        "title": "Islamabad United vs Karachi Kings - 15th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Islamabad United",
                "key": "iu"
            },
            "b": {
                "name": "Karachi Kings",
                "key": "kk"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g15",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g15/",
        "start_date": {
            "iso": "2018-03-04T16:00+00:00"
        },
        "dateFilter": 4,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.548Z",
        "updated_at": "2018-02-09T12:40:44.548Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d498",
        "status": "notstarted",
        "related_name": "16th Match",
        "expires": 10800,
        "name": "Peshawar Zalmi vs Multan Sultans",
        "short_name": "PZ vs MS",
        "title": "Peshawar Zalmi vs Multan Sultans - 16th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Peshawar Zalmi",
                "key": "pz"
            },
            "b": {
                "name": "Multan Sultans",
                "key": "ms"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g16",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g16/",
        "start_date": {
            "iso": "2018-03-06T16:00+00:00"
        },
        "dateFilter": 6,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.548Z",
        "updated_at": "2018-02-09T12:40:44.548Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d499",
        "status": "notstarted",
        "related_name": "4th ODI Match",
        "expires": 10800,
        "name": "New Zealand vs England",
        "short_name": "NZ vs ENG",
        "title": "New Zealand vs England - 4th ODI Match - New Zealand vs England 2018",
        "season": {
            "name": "New Zealand vs England 2018"
        },
        "format": "one-day",
        "venue": "University Oval, Dunedin, New Zealand",
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": null,
        "key": "nzeng_2018_one-day_04",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzeng_2018/nzeng_2018_one-day_04/",
        "start_date": {
            "iso": "2018-03-06T22:00+00:00"
        },
        "dateFilter": 6,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.549Z",
        "updated_at": "2018-02-09T12:40:44.549Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d49a",
        "status": "notstarted",
        "related_name": "17th Match",
        "expires": 10800,
        "name": "Multan Sultans vs Quetta Gladiators",
        "short_name": "MS vs QG",
        "title": "Multan Sultans vs Quetta Gladiators - 17th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Multan Sultans",
                "key": "ms"
            },
            "b": {
                "name": "Quetta Gladiators",
                "key": "qg"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g17",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g17/",
        "start_date": {
            "iso": "2018-03-07T16:00+00:00"
        },
        "dateFilter": 7,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.549Z",
        "updated_at": "2018-02-09T12:40:44.549Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d49b",
        "status": "notstarted",
        "related_name": "18th Match",
        "expires": 10800,
        "name": "Islamabad United vs Lahore Qalandars",
        "short_name": "IU vs LQ",
        "title": "Islamabad United vs Lahore Qalandars - 18th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Islamabad United",
                "key": "iu"
            },
            "b": {
                "name": "Lahore Qalandars",
                "key": "lq"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g18",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g18/",
        "start_date": {
            "iso": "2018-03-08T11:30+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.549Z",
        "updated_at": "2018-02-09T12:40:44.549Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d49c",
        "status": "notstarted",
        "related_name": "19th Match",
        "expires": 10800,
        "name": "Karachi Kings vs Quetta Gladiators",
        "short_name": "KK vs QG",
        "title": "Karachi Kings vs Quetta Gladiators - 19th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Karachi Kings",
                "key": "kk"
            },
            "b": {
                "name": "Quetta Gladiators",
                "key": "qg"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g19",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g19/",
        "start_date": {
            "iso": "2018-03-08T16:00+00:00"
        },
        "dateFilter": 8,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.549Z",
        "updated_at": "2018-02-09T12:40:44.549Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d49d",
        "status": "notstarted",
        "related_name": "2nd Test Match",
        "expires": 10800,
        "name": "South Africa vs Australia",
        "short_name": "RSA vs AUS",
        "title": "South Africa vs Australia - 2nd Test Match - South Africa vs Australia 2018",
        "season": {
            "name": "South Africa vs Australia 2018"
        },
        "format": "test",
        "venue": "St George's Park, Port Elizabeth, South Africa",
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "Australia",
                "key": "aus"
            }
        },
        "winner_team": null,
        "key": "rsaaus_2018_test_02",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaaus_2018/rsaaus_2018_test_02/",
        "start_date": {
            "iso": "2018-03-09T08:00+00:00"
        },
        "dateFilter": 9,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.550Z",
        "updated_at": "2018-02-09T12:40:44.550Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d49e",
        "status": "notstarted",
        "related_name": "20th Match",
        "expires": 10800,
        "name": "Multan Sultans vs Lahore Qalandars",
        "short_name": "MS vs LQ",
        "title": "Multan Sultans vs Lahore Qalandars - 20th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Multan Sultans",
                "key": "ms"
            },
            "b": {
                "name": "Lahore Qalandars",
                "key": "lq"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g20",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g20/",
        "start_date": {
            "iso": "2018-03-09T11:30+00:00"
        },
        "dateFilter": 9,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.550Z",
        "updated_at": "2018-02-09T12:40:44.550Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d49f",
        "status": "notstarted",
        "related_name": "21st Match",
        "expires": 10800,
        "name": "Peshawar Zalmi vs Islamabad United",
        "short_name": "PZ vs IU",
        "title": "Peshawar Zalmi vs Islamabad United - 21st Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Peshawar Zalmi",
                "key": "pz"
            },
            "b": {
                "name": "Islamabad United",
                "key": "iu"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g21",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g21/",
        "start_date": {
            "iso": "2018-03-09T16:00+00:00"
        },
        "dateFilter": 9,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.551Z",
        "updated_at": "2018-02-09T12:40:44.551Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4a0",
        "status": "notstarted",
        "related_name": "5th ODI Match",
        "expires": 10800,
        "name": "New Zealand vs England",
        "short_name": "NZ vs ENG",
        "title": "New Zealand vs England - 5th ODI Match - New Zealand vs England 2018",
        "season": {
            "name": "New Zealand vs England 2018"
        },
        "format": "one-day",
        "venue": "Hagley Oval, Christchurch, New Zealand",
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": null,
        "key": "nzeng_2018_one-day_05",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzeng_2018/nzeng_2018_one-day_05/",
        "start_date": {
            "iso": "2018-03-09T22:00+00:00"
        },
        "dateFilter": 9,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.552Z",
        "updated_at": "2018-02-09T12:40:44.552Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4a1",
        "status": "notstarted",
        "related_name": "22nd Match",
        "expires": 10800,
        "name": "Multan Sultans vs Karachi Kings",
        "short_name": "MS vs KK",
        "title": "Multan Sultans vs Karachi Kings - 22nd Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Multan Sultans",
                "key": "ms"
            },
            "b": {
                "name": "Karachi Kings",
                "key": "kk"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g22",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g22/",
        "start_date": {
            "iso": "2018-03-10T11:30+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.552Z",
        "updated_at": "2018-02-09T12:40:44.552Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4a2",
        "status": "notstarted",
        "related_name": "23rd Match",
        "expires": 10800,
        "name": "Peshawar Zalmi vs Quetta Gladiators",
        "short_name": "PZ vs QG",
        "title": "Peshawar Zalmi vs Quetta Gladiators - 23rd Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Peshawar Zalmi",
                "key": "pz"
            },
            "b": {
                "name": "Quetta Gladiators",
                "key": "qg"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g23",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g23/",
        "start_date": {
            "iso": "2018-03-10T16:00+00:00"
        },
        "dateFilter": 10,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.553Z",
        "updated_at": "2018-02-09T12:40:44.553Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4a3",
        "status": "notstarted",
        "related_name": "24th Match",
        "expires": 10800,
        "name": "Karachi Kings vs Lahore Qalandars",
        "short_name": "KK vs LQ",
        "title": "Karachi Kings vs Lahore Qalandars - 24th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "Karachi Kings",
                "key": "kk"
            },
            "b": {
                "name": "Lahore Qalandars",
                "key": "lq"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g24",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g24/",
        "start_date": {
            "iso": "2018-03-11T16:00+00:00"
        },
        "dateFilter": 11,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.553Z",
        "updated_at": "2018-02-09T12:40:44.553Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4a4",
        "status": "notstarted",
        "related_name": "25th Match",
        "expires": 10800,
        "name": "Multan Sultans vs Islamabad United",
        "short_name": "MS vs IU",
        "title": "Multan Sultans vs Islamabad United - 25th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Multan Sultans",
                "key": "ms"
            },
            "b": {
                "name": "Islamabad United",
                "key": "iu"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g25",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g25/",
        "start_date": {
            "iso": "2018-03-13T16:00+00:00"
        },
        "dateFilter": 13,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.554Z",
        "updated_at": "2018-02-09T12:40:44.554Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4a5",
        "status": "notstarted",
        "related_name": "26th Match",
        "expires": 10800,
        "name": "Quetta Gladiators vs Lahore Qalandars",
        "short_name": "QG vs LQ",
        "title": "Quetta Gladiators vs Lahore Qalandars - 26th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Quetta Gladiators",
                "key": "qg"
            },
            "b": {
                "name": "Lahore Qalandars",
                "key": "lq"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g26",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g26/",
        "start_date": {
            "iso": "2018-03-14T16:00+00:00"
        },
        "dateFilter": 14,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.554Z",
        "updated_at": "2018-02-09T12:40:44.554Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4a6",
        "status": "notstarted",
        "related_name": "27th Match",
        "expires": 10800,
        "name": "Peshawar Zalmi vs Karachi Kings",
        "short_name": "PZ vs KK",
        "title": "Peshawar Zalmi vs Karachi Kings - 27th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Peshawar Zalmi",
                "key": "pz"
            },
            "b": {
                "name": "Karachi Kings",
                "key": "kk"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g27",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g27/",
        "start_date": {
            "iso": "2018-03-15T11:30+00:00"
        },
        "dateFilter": 15,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.554Z",
        "updated_at": "2018-02-09T12:40:44.554Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4a7",
        "status": "notstarted",
        "related_name": "28th Match",
        "expires": 10800,
        "name": "Quetta Gladiators vs Islamabad United",
        "short_name": "QG vs IU",
        "title": "Quetta Gladiators vs Islamabad United - 28th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Quetta Gladiators",
                "key": "qg"
            },
            "b": {
                "name": "Islamabad United",
                "key": "iu"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g28",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g28/",
        "start_date": {
            "iso": "2018-03-15T16:00+00:00"
        },
        "dateFilter": 15,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.554Z",
        "updated_at": "2018-02-09T12:40:44.554Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4a8",
        "status": "notstarted",
        "related_name": "29th Match",
        "expires": 10800,
        "name": "Peshawar Zalmi vs Lahore Qalandars",
        "short_name": "PZ vs LQ",
        "title": "Peshawar Zalmi vs Lahore Qalandars - 29th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Peshawar Zalmi",
                "key": "pz"
            },
            "b": {
                "name": "Lahore Qalandars",
                "key": "lq"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g29",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g29/",
        "start_date": {
            "iso": "2018-03-16T11:30+00:00"
        },
        "dateFilter": 16,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.555Z",
        "updated_at": "2018-02-09T12:40:44.555Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4a9",
        "status": "notstarted",
        "related_name": "30th Match",
        "expires": 10800,
        "name": "Islamabad United vs Karachi Kings",
        "short_name": "IU vs KK",
        "title": "Islamabad United vs Karachi Kings - 30th Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Sharjah Cricket Association Stadium, Sharjah, UAE",
        "teams": {
            "a": {
                "name": "Islamabad United",
                "key": "iu"
            },
            "b": {
                "name": "Karachi Kings",
                "key": "kk"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_g30",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_g30/",
        "start_date": {
            "iso": "2018-03-16T16:00+00:00"
        },
        "dateFilter": 16,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.555Z",
        "updated_at": "2018-02-09T12:40:44.555Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4aa",
        "status": "notstarted",
        "related_name": "Qualifier Match",
        "expires": 10800,
        "name": "TBC vs TBC",
        "short_name": "TBC vs TBC",
        "title": "TBC vs TBC - Qualifier Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Dubai International Cricket Stadium , Dubai",
        "teams": {
            "a": {
                "name": "TBC",
                "key": "tbc"
            },
            "b": {
                "name": "TBC",
                "key": "tbc"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_q",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_q/",
        "start_date": {
            "iso": "2018-03-18T16:00+00:00"
        },
        "dateFilter": 18,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.555Z",
        "updated_at": "2018-02-09T12:40:44.555Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4ab",
        "status": "notstarted",
        "related_name": "1st Test Match",
        "expires": 10800,
        "name": "New Zealand vs England",
        "short_name": "NZ vs ENG",
        "title": "New Zealand vs England - 1st Test Match - New Zealand vs England 2018",
        "season": {
            "name": "New Zealand vs England 2018"
        },
        "format": "test",
        "venue": "Eden Park, Auckland, New Zealand",
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": null,
        "key": "nzeng_2018_test_01",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzeng_2018/nzeng_2018_test_01/",
        "start_date": {
            "iso": "2018-03-20T01:00+00:00"
        },
        "dateFilter": 20,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.556Z",
        "updated_at": "2018-02-09T12:40:44.556Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4ac",
        "status": "notstarted",
        "related_name": "1st Eliminator Match",
        "expires": 10800,
        "name": "TBC vs TBC",
        "short_name": "TBC vs TBC",
        "title": "TBC vs TBC - 1st Eliminator Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Gaddafi Stadium, Lahore",
        "teams": {
            "a": {
                "name": "TBC",
                "key": "tbc"
            },
            "b": {
                "name": "TBC",
                "key": "tbc"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_e1",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_e1/",
        "start_date": {
            "iso": "2018-03-20T16:00+00:00"
        },
        "dateFilter": 20,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.557Z",
        "updated_at": "2018-02-09T12:40:44.558Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4ad",
        "status": "notstarted",
        "related_name": "2nd Eliminator March",
        "expires": 10800,
        "name": "TBC vs TBC",
        "short_name": "TBC vs TBC",
        "title": "TBC vs TBC - 2nd Eliminator March - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "Gaddafi Stadium, Lahore",
        "teams": {
            "a": {
                "name": "TBC",
                "key": "tbc"
            },
            "b": {
                "name": "TBC",
                "key": "tbc"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_e2",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_e2/",
        "start_date": {
            "iso": "2018-03-21T16:00+00:00"
        },
        "dateFilter": 21,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.558Z",
        "updated_at": "2018-02-09T12:40:44.558Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4ae",
        "status": "notstarted",
        "related_name": "3rd Test Match",
        "expires": 10800,
        "name": "South Africa vs Australia",
        "short_name": "RSA vs AUS",
        "title": "South Africa vs Australia - 3rd Test Match - South Africa vs Australia 2018",
        "season": {
            "name": "South Africa vs Australia 2018"
        },
        "format": "test",
        "venue": "Newlands, Cape Town, South Africa",
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "Australia",
                "key": "aus"
            }
        },
        "winner_team": null,
        "key": "rsaaus_2018_test_03",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaaus_2018/rsaaus_2018_test_03/",
        "start_date": {
            "iso": "2018-03-22T08:30+00:00"
        },
        "dateFilter": 22,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.558Z",
        "updated_at": "2018-02-09T12:40:44.558Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4af",
        "status": "notstarted",
        "related_name": "Final Match",
        "expires": 10800,
        "name": "TBC vs TBC",
        "short_name": "TBC vs TBC",
        "title": "TBC vs TBC - Final Match - Pakistan Super League 2018",
        "season": {
            "name": "Pakistan Super League 2018"
        },
        "format": "t20",
        "venue": "National Stadium, Karachi",
        "teams": {
            "a": {
                "name": "TBC",
                "key": "tbc"
            },
            "b": {
                "name": "TBC",
                "key": "tbc"
            }
        },
        "winner_team": null,
        "key": "pslt20_2018_final",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pslt20_2018/pslt20_2018_final/",
        "start_date": {
            "iso": "2018-03-25T16:00+00:00"
        },
        "dateFilter": 25,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.559Z",
        "updated_at": "2018-02-09T12:40:44.559Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4b0",
        "status": "notstarted",
        "related_name": "1st T20 Match",
        "expires": 10800,
        "name": "Pakistan vs West Indies",
        "short_name": "PAK vs WI",
        "title": "Pakistan vs West Indies - 1st T20 Match - New Zealand vs England 2018",
        "season": {
            "name": "New Zealand vs England 2018"
        },
        "format": "t20",
        "venue": "Gaddafi Stadium, Lahore, Pakistan",
        "teams": {
            "a": {
                "name": "Pakistan",
                "key": "pak"
            },
            "b": {
                "name": "West Indies",
                "key": "wi"
            }
        },
        "winner_team": null,
        "key": "pakwi_2018_t20_01",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pakwi_2018/pakwi_2018_t20_01/",
        "start_date": {
            "iso": "2018-03-29T14:00+00:00"
        },
        "dateFilter": 29,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.559Z",
        "updated_at": "2018-02-09T12:40:44.559Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4b1",
        "status": "notstarted",
        "related_name": "4th Test Match",
        "expires": 10800,
        "name": "South Africa vs Australia",
        "short_name": "RSA vs AUS",
        "title": "South Africa vs Australia - 4th Test Match - South Africa vs Australia 2018",
        "season": {
            "name": "South Africa vs Australia 2018"
        },
        "format": "test",
        "venue": "New Wanderers Stadium, Johannesburg, South Africa",
        "teams": {
            "a": {
                "name": "South Africa",
                "key": "rsa"
            },
            "b": {
                "name": "Australia",
                "key": "aus"
            }
        },
        "winner_team": null,
        "key": "rsaaus_2018_test_04",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/rsaaus_2018/rsaaus_2018_test_04/",
        "start_date": {
            "iso": "2018-03-30T08:30+00:00"
        },
        "dateFilter": 30,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.559Z",
        "updated_at": "2018-02-09T12:40:44.560Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4b2",
        "status": "notstarted",
        "related_name": "2nd Test Match",
        "expires": 10800,
        "name": "New Zealand vs England",
        "short_name": "NZ vs ENG",
        "title": "New Zealand vs England - 2nd Test Match - New Zealand vs England 2018",
        "season": {
            "name": "New Zealand vs England 2018"
        },
        "format": "test",
        "venue": "Hagley Oval, Christchurch, New Zealand",
        "teams": {
            "a": {
                "name": "New Zealand",
                "key": "nz"
            },
            "b": {
                "name": "England",
                "key": "eng"
            }
        },
        "winner_team": null,
        "key": "nzeng_2018_test_02",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/nzeng_2018/nzeng_2018_test_02/",
        "start_date": {
            "iso": "2018-03-30T22:00+00:00"
        },
        "dateFilter": 30,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:44.561Z",
        "updated_at": "2018-02-09T12:40:44.561Z",
        "active": 1,
        "_id": "5a7d96cc53ed941fdcc9d4b3",
        "status": "notstarted",
        "related_name": "2nd T20 Match",
        "expires": 10800,
        "name": "Pakistan vs West Indies",
        "short_name": "PAK vs WI",
        "title": "Pakistan vs West Indies - 2nd T20 Match - New Zealand vs England 2018",
        "season": {
            "name": "New Zealand vs England 2018"
        },
        "format": "t20",
        "venue": "Gaddafi Stadium, Lahore, Pakistan",
        "teams": {
            "a": {
                "name": "Pakistan",
                "key": "pak"
            },
            "b": {
                "name": "West Indies",
                "key": "wi"
            }
        },
        "winner_team": null,
        "key": "pakwi_2018_t20_02",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pakwi_2018/pakwi_2018_t20_02/",
        "start_date": {
            "iso": "2018-03-31T14:00+00:00"
        },
        "dateFilter": 31,
        "monthFilter": "2018-03",
        "__v": 0
    },
    {
        "created_at": "2018-02-09T12:40:59.094Z",
        "updated_at": "2018-02-09T12:40:59.094Z",
        "active": 1,
        "_id": "5a7d96dbd958ed1f74e51b6d",
        "status": "notstarted",
        "related_name": "3rd T20 Match",
        "expires": 10800,
        "name": "Pakistan vs West Indies",
        "short_name": "PAK vs WI",
        "title": "Pakistan vs West Indies - 3rd T20 Match - New Zealand vs England 2018",
        "season": {
            "name": "New Zealand vs England 2018"
        },
        "format": "t20",
        "venue": "Gaddafi Stadium, Lahore, Pakistan",
        "teams": {
            "a": {
                "name": "Pakistan",
                "key": "pak"
            },
            "b": {
                "name": "West Indies",
                "key": "wi"
            }
        },
        "winner_team": null,
        "key": "pakwi_2018_t20_03",
        "msgs": {
            "result": null,
            "others": []
        },
        "ref": "http://www.litzscore.com/series/pakwi_2018/pakwi_2018_t20_03/",
        "start_date": {
            "iso": "2018-04-01T14:00+00:00"
        },
        "dateFilter": 1,
        "monthFilter": "2018-04",
        "__v": 0
    }
]

export function scheduleData() {
    return {
        type: types.SCHEDULE_DATA,
        message: dummyData
    };
}

export default {scheduleData};