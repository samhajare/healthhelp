import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

interface InsuredPerson {
  relation: string;
  age: number;
  name?: string;
}

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, unique: true, name: 'phone_number' })
  phoneNumber: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  budget: number;

  @Column({ type: 'jsonb', name: 'coverage_needs', nullable: true })
  coverageNeeds: string[];

  @Column({ type: 'jsonb', name: 'insured_persons', nullable: true })
  insuredPersons: InsuredPerson[];
  
  @Column({ type: 'text', name: 'other', nullable: true })
  other: string;

  @Column({ type: 'varchar', length: 50, name: 'username', unique: true })
  username: string;

  @Column({ type: 'varchar', length: 255, name: 'password', nullable: true })
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
