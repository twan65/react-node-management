const dbConfig = require("../config/dbConfig");

module.exports = require("knex")({
  //DB 타입
  client: "mysql2",

  //connection 옵션
  connection: {
    host: dbConfig.host,
    user: dbConfig.username,
    password: dbConfig.password,
    //database or schema
    database: dbConfig.database,
  },

  //커넥션 타임아웃 시간 설정 ms 단위
  acquireConnectionTimeout: 10000,

  //배열에 넣은 타입을 조회했을 때 데이터가 스트링을 넘어오게 정의 (※oracledb에서만 사용)
  //fetchAsString: ['number', 'clob'],

  //쿼리를 통해 결과값을 전달하기 전에 사용하는 함수, queryContext는 queryContext를 사용할 경우 사용할 수 있음 따라서 순수 쿼리로 작성될 경우 사용 못함.
  postProcessResponse: (result, queryContext) => {
    return result.map((ele) => {
      ele.time = Date.now();
      return ele;
    });
  },
  //로그 설정
  log: {
    warn(msg) {
      console.warn(msg);
    },
    error(msg) {
      console.error(msg);
    },
    deprecate(msg) {
      console.log(msg);
    },
    debug(msg) {
      console.log(msg);
    },
  },
});
