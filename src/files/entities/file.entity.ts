import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class FileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fileName: string;

    @Column()
    url: string
}
