import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('quizes')
export class Quiz extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment: 'The Quiz unique identifier'
    })
    id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        comment: 'The Quiz title',
    })
    title: string;

    @Column({
        type: 'text',
        nullable: false,
        comment: 'The Quiz description',
    })
    description: string;

    @Column({
        type: 'boolean',
        default: 1,
    })
    isActive: boolean;
}