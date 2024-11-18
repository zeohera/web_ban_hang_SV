import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1723884890162 implements MigrationInterface {
    name = 'CreateUserTable1723884890162'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fullName\` varchar(256) NOT NULL, \`address\` varchar(256) NOT NULL, \`dob\` datetime NOT NULL, \`role\` varchar(256) NOT NULL, \`email\` varchar(256) NOT NULL, \`password\` varchar(256) NOT NULL, UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
