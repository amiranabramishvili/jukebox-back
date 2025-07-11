import { Playlist } from "src/playlist/entities/playlist.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export class User {
      @PrimaryGeneratedColumn()
      id!: number;

      @Column()
      name!: string;

      @Column({ unique: true })
      email!: string;

      @Column()
      password!: string;

      @OneToMany(() => Playlist,(playlist) => playlist.user)
      playList: Playlist

      @CreateDateColumn()
      createdAt!: Date
  
      @UpdateDateColumn()
      updatedAt!: Date
  
      @DeleteDateColumn()
      deletedAt!: Date
}
