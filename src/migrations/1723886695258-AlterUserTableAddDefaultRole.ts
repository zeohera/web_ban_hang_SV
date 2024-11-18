import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserTableAddDefaultRole1723886695258 implements MigrationInterface {
    name = 'AlterUserTableAddDefaultRole1723886695258'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`role\` \`role\` varchar(256) NOT NULL DEFAULT 'user'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` CHANGE \`role\` \`role\` varchar(256) NOT NULL`);
    }

}
