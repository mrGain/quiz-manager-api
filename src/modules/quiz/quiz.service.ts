import { Injectable } from "@nestjs/common";

@Injectable()
export class QuizService {
    getAllQuize(): Array<object> {
        return [
            {
                id: 1,
                name: 'Quiz 1'
            },
            {
                id: 2,
                name: 'Quiz 2'
            },
            {
                id: 3,
                name: 'Quiz 3'
            }

        ]
    }
}