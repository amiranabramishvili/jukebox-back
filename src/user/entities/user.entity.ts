import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

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

      @CreateDateColumn()
      createdAt!: Date
  
      @UpdateDateColumn()
      updatedAt!: Date
  
      @DeleteDateColumn()
      deletedAt!: Date
}
