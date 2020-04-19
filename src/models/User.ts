import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

import { Length, IsNotEmpty } from 'class-validator';
import bcrypt from 'bcryptjs';

@Entity()
@Unique(["email", "mobile"])
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  @Length(4, 20)
  @IsNotEmpty()
  mobile!: number;

  @Column()
  @Length(4)
  @IsNotEmpty()
  email!: string;

  @Column()
  @Length(4, 100)
  password!: string;

  @Column()
  @Length(4, 15)
  @IsNotEmpty()
  fieldOfWork!: string;

  @Column()
  @Length(4, 15)
  @IsNotEmpty()
  companyName!: string;

  @Column()
  @IsNotEmpty()
  role!: string;

  @Column()
  @CreateDateColumn()
  createdAt!: Date;

  @Column()
  @UpdateDateColumn()
  updatedAt!: Date;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }

  checkUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}