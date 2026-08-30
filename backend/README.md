routes-

API_URL = https://localhost:5000/api/student

1.  "/upload-student" -> upload student data in the database

2.  "/mark-absent" -> make student attendance to false

3.  "/mark-present" -> make student attendance to true

4.  "/all-absent" -> fetch all absent student

5.  "/all-present"  -> fetch all present student

6.  "/all-student"  -> fetch data of all students present in database



DataBase Schema - {
    Name: String,
    RegID: String,
    attendance: Boolean
}