import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

interface InsuredPerson {
  relation: string;
  age: number;
  name?: string;
}

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: true })
  name: string;

  @Column({ type: 'text', unique: true })
  email: string;

  @Column({ type: 'text', unique: true, name: 'phone_number' })
  phoneNumber: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  budget: number;

  @Column({ type: 'jsonb', name: 'coverage_needs', nullable: true })
  coverageNeeds: string[];

  @Column({ type: 'jsonb', name: 'insured_persons', nullable: true })
  insuredPersons: InsuredPerson[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}