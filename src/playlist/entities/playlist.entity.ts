import { CreateMusicDto } from "src/music/dto/create-music.dto";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Playlist {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    description: string;

    @Column()
    userId: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

    @DeleteDateColumn()
    deleteAt: Date;
}
