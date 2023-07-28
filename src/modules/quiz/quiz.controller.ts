import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/CreateQuiz.dto';

@Controller('/quiz')
export class QuizController {
    constructor(private readonly quizService: QuizService) {}
    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuize();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizData:CreateQuizDto) {
        return {
            data: quizData
        }
        // return this.quizService.createQuiz();
    }
}