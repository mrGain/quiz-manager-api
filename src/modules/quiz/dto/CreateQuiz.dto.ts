import { IsNotEmpty, Length } from "class-validator";

export class  CreateQuizDto {
    @IsNotEmpty({message:"Quiz should have a title."})
    @Length(3, 255)
    title: string;

    @IsNotEmpty({message:"There must be a description."})
    @Length(3)
    description:  string;
}