import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1735849338397 implements MigrationInterface {
    name = 'UserTable1735849338397'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(255), "email" character varying(255) NOT NULL, "phone_number" character varying(20) NOT NULL, "budget" numeric(10,2), "coverage_needs" jsonb, "insured_persons" jsonb, "other" text, "username" character varying(50) NOT NULL, "password" character varying(255), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "UQ_4974bcde29c3e1dfe2716400cb5" UNIQUE ("phone_number"), CONSTRAINT "UQ_ffc81a3b97dcbf8e320d5106c0d" UNIQUE ("username"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
