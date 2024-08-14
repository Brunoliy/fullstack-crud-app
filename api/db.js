import mysql from "mysql";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysqlp@ssword724760",
    database: "crud",
});
