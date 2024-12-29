import { MigrationInterface, QueryRunner } from "typeorm";

export class UserTable1735493159350 implements MigrationInterface {
    name = 'UserTable1735493159350'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" text, "email" text NOT NULL, "phone_number" text NOT NULL, "budget" numeric(10,2), "coverage_needs" jsonb, "insured_persons" jsonb, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_3c3ab3f49a87e6ddb607f3c4945" UNIQUE ("email"), CONSTRAINT "UQ_4974bcde29c3e1dfe2716400cb5" UNIQUE ("phone_number"), CONSTRAINT "PK_16d4f7d636df336db11d87413e3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "Users"`);
    }

}
