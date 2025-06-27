import { CreateMusicDto } from "src/music/dto/create-music.dto";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255 })
    firstName: string

    @Column({ type: 'varchar', length: 255})
    lastName: string

    @Column({ type: 'text' })
    biography: string

    @Column({ type: 'json' })
    music: CreateMusicDto

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deleteAt: Date

}
