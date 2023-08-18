import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Quiz } from "src/modules/quiz/quiz.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 1234,
    username: 'username',
    password: 'password',
    database: 'databasename',
    entities: [Quiz],
    synchronize: true
};


// entities: [
//         __dirname + '/../**/*.entity.ts'
//     ],
