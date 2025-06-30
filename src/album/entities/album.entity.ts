import { CreateMusicDto } from 'src/music/dto/create-music.dto';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  releaseDate: string;

  @Column({ type: 'json' })
  music: CreateMusicDto;

  @Column({ type: 'varchar', length: 255 })
  artistName: string;

  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @DeleteDateColumn()
  deleteAt: Date;
}
